import Link from "next/link";
import { GradientText } from "@/components/ui/GradientText";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { projects } from "@/content/projects";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Hero */}
      <section className="py-32 md:py-40">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
          Manikandan
        </h1>
        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-4">
          Finance student <GradientText>building AI tools</GradientText>.
          Turning ideas into products that solve real problems.
        </p>
        <p className="text-zinc-500 mb-8">
          I build at the intersection of finance and artificial intelligence.
        </p>
        <SocialLinks />
      </section>

      {/* Featured Projects */}
      <section className="pb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Featured Projects</h2>
          <Link
            href="/projects"
            className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="flex gap-6">
          <Link
            href="/work"
            className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
          >
            Read my writing &rarr;
          </Link>
          <Link
            href="/about"
            className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
          >
            More about me &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
