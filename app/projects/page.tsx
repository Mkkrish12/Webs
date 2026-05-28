import { Metadata } from "next";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "AI tools and things I've built.",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
        Projects
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-12">
        Things I&apos;ve built. Mostly AI tools solving problems I ran into.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
