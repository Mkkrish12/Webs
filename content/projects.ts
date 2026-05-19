import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "FormFiller",
    description:
      "AI-powered Chrome extension that auto-fills forms using your stored profile data. Built with OpenAI and WXT.",
    tags: ["Chrome Extension", "React", "OpenAI", "TypeScript"],
    github: "https://github.com/manikandan/formfiller",
    featured: true,
  },
  {
    title: "Corgi Claims Co-Pilot",
    description:
      "5-agent AI system for insurance claim processing. Built during AG2 hackathon with Gemini and multi-agent orchestration.",
    tags: ["AG2", "Gemini", "Multi-Agent", "Python"],
    github: "https://github.com/manikandan/ag2-insurance",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "This site. Built with Next.js 14, Tailwind, and MDX. Dark mode, minimal, fast.",
    tags: ["Next.js", "Tailwind", "MDX", "TypeScript"],
    featured: false,
  },
];
