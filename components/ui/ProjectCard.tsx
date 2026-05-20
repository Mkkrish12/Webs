import { Project } from "@/lib/types";
import { Tag } from "./Tag";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group border border-white/[0.08] rounded-lg p-6 transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 bg-surface-card flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-lg font-semibold text-zinc-100">{project.title}</h3>
      </div>
      <p className="text-sm text-zinc-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-auto pt-2 border-t border-white/[0.05]">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-purple-400 hover:text-purple-300 transition-colors"
          >
            ▶ Watch Demo
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            Live ↗
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-zinc-500 hover:text-zinc-200 transition-colors"
          >
            GitHub ↗
          </a>
        )}
      </div>
    </div>
  );
}
