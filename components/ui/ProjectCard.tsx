import { Project } from "@/lib/types";
import { Tag } from "./Tag";

export function ProjectCard({ project }: { project: Project }) {
  const Wrapper = project.link ? "a" : "div";
  const wrapperProps = project.link
    ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="block border border-white/[0.08] rounded-lg p-6 transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 bg-surface-card"
    >
      <h3 className="text-lg font-semibold text-zinc-100 mb-2">
        {project.title}
      </h3>
      <p className="text-sm text-zinc-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </Wrapper>
  );
}
