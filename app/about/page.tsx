import { Metadata } from "next";
import { GradientText } from "@/components/ui/GradientText";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: "Finance student building AI tools.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-8">
        About
      </h1>

      <div className="space-y-6 text-zinc-700 dark:text-zinc-400 leading-relaxed">
        <p className="text-lg">
          I&apos;m Manikandan — a{" "}
          <GradientText>builder, hustler, and ambitious thinker</GradientText>.
        </p>

        <p>
          I solve problems by shipping. The fastest way to know if an idea
          matters is to put it in front of people — so that&apos;s what I do.
          Friction becomes a product, an idea becomes a working tool, and a
          weekend becomes a hackathon win.
        </p>

        <p>
          My work sits at the intersection of finance and AI — agents that
          compress repetitive workflows, dashboards that surface signal, and
          tools that hand power back to the operator.
        </p>

        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 pt-6">What I&apos;m up to</h2>
        <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-400">
          <li>Building tools</li>
          <li>Working on my startup idea</li>
          <li>Building at hackathons</li>
          <li>
            Scouting early-stage startups for LvlUp Ventures and GoAhead
            Ventures
          </li>
          <li>Writing about investing in startups</li>
          <li>Oh yeah — studying finance at Fordham University (the day job)</li>
        </ul>

        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 pt-6">Get in touch</h2>
        <p>
          Reach out at{" "}
          <a
            href={`mailto:${siteConfig.links.email}`}
            className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            {siteConfig.links.email}
          </a>{" "}
          or find me on{" "}
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </div>
  );
}
