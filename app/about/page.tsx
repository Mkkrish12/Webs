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
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 mb-8">
        About
      </h1>

      <div className="space-y-6 text-zinc-400 leading-relaxed">
        <p className="text-lg">
          I&apos;m Manikandan — a finance student who{" "}
          <GradientText>builds AI tools</GradientText>.
        </p>

        <p>
          I got into building because I kept running into problems that nobody
          was solving. The first time I automated something tedious with code, I
          was hooked. Now I spend my time at the intersection of finance and AI,
          building tools that make workflows faster and smarter.
        </p>

        <p>
          My current focus is on AI agents, browser automation, and tools that
          reduce friction in everyday tasks. I believe the best software comes
          from solving your own problems first.
        </p>

        <h2 className="text-xl font-bold text-zinc-100 pt-6">What I&apos;m up to</h2>
        <ul className="list-disc list-inside space-y-2 text-zinc-400">
          <li>Building AI-powered Chrome extensions</li>
          <li>Exploring multi-agent systems</li>
          <li>Writing about building in public</li>
          <li>Studying finance (the day job)</li>
        </ul>

        <h2 className="text-xl font-bold text-zinc-100 pt-6">Get in touch</h2>
        <p>
          Reach out via{" "}
          <a
            href={`mailto:${siteConfig.links.email}`}
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            email
          </a>{" "}
          or find me on{" "}
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            X
          </a>
          .
        </p>
      </div>
    </div>
  );
}
