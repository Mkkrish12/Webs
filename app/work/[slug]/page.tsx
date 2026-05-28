import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { Tag } from "@/components/ui/Tag";
import { SpotifyEmbed } from "@/components/ui/SpotifyEmbed";
import { siteConfig } from "@/lib/constants";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.description,
  };
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-purple-600 dark:text-purple-400 uppercase">
            {post.meta.type}
          </span>
          <span className="text-xs text-zinc-500 dark:text-zinc-600">{post.meta.date}</span>
          {post.meta.readingTime && (
            <span className="text-xs text-zinc-500 dark:text-zinc-600">
              {post.meta.readingTime}
            </span>
          )}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          {post.meta.title}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">{post.meta.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {post.meta.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </header>
      {post.meta.type === "podcast" && (
        <SpotifyEmbed url={post.meta.spotify || siteConfig.links.spotify} />
      )}
      <article className="prose prose-zinc dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-purple-600 dark:prose-a:text-purple-400 prose-code:font-mono max-w-none">
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}
