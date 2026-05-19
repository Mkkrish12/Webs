import Link from "next/link";
import { PostMeta } from "@/lib/types";
import { Tag } from "./Tag";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/work/${post.slug}`}
      className="block border border-white/[0.08] rounded-lg p-6 transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 bg-surface-card"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="font-mono text-xs text-purple-400 uppercase">
          {post.type}
        </span>
        <span className="text-xs text-zinc-600">{post.date}</span>
        {post.readingTime && (
          <span className="text-xs text-zinc-600">{post.readingTime}</span>
        )}
      </div>
      <h3 className="text-lg font-semibold text-zinc-100 mb-2">
        {post.title}
      </h3>
      <p className="text-sm text-zinc-400 mb-4">{post.description}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </Link>
  );
}
