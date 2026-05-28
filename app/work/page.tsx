import { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import { PostCard } from "@/components/ui/PostCard";
import { SpotifyEmbed } from "@/components/ui/SpotifyEmbed";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Work",
  description: "Blog posts and podcast episodes.",
};

export default function WorkPage() {
  const posts = getAllPosts();
  const blogPosts = posts.filter((p) => p.type === "blog");
  const podcastEpisodes = posts.filter((p) => p.type === "podcast");

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
        Work
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-12">Writing and podcast episodes.</p>

      {blogPosts.length > 0 && (
        <section className="mb-16">
          <h2 className="text-sm font-mono text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-6">
            Blog
          </h2>
          <div className="space-y-4">
            {blogPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="text-sm font-mono text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-6">
          Podcast
        </h2>
        <SpotifyEmbed url={siteConfig.links.spotify} />
        {podcastEpisodes.length > 0 && (
          <div className="space-y-4 mt-6">
            {podcastEpisodes.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
