import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { PostMeta } from "./types";

const contentDir = path.join(process.cwd(), "content");

function getPostsFromDir(dir: string, type: "blog" | "podcast"): PostMeta[] {
  const fullPath = path.join(contentDir, dir);
  if (!fs.existsSync(fullPath)) return [];

  const files = fs.readdirSync(fullPath).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const filePath = path.join(fullPath, filename);
      const source = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(source);
      const slug = filename.replace(".mdx", "");
      const stats = readingTime(content);

      return {
        title: data.title,
        description: data.description,
        date: data.date,
        tags: data.tags || [],
        type,
        published: data.published !== false,
        slug,
        readingTime: stats.text,
        spotify: data.spotify,
      } as PostMeta;
    })
    .filter((post) => post.published);
}

export function getAllPosts(): PostMeta[] {
  const blog = getPostsFromDir("blog", "blog");
  const podcast = getPostsFromDir("podcast", "podcast");
  return [...blog, ...podcast].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogPosts(): PostMeta[] {
  return getPostsFromDir("blog", "blog").sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPodcastEpisodes(): PostMeta[] {
  return getPostsFromDir("podcast", "podcast").sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string) {
  const dirs = ["blog", "podcast"] as const;

  for (const dir of dirs) {
    const filePath = path.join(contentDir, dir, `${slug}.mdx`);
    if (fs.existsSync(filePath)) {
      const source = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(source);
      const stats = readingTime(content);
      return {
        meta: {
          title: data.title,
          description: data.description,
          date: data.date,
          tags: data.tags || [],
          type: dir as "blog" | "podcast",
          published: data.published !== false,
          slug,
          readingTime: stats.text,
          spotify: data.spotify,
        } as PostMeta,
        content,
      };
    }
  }

  return null;
}
