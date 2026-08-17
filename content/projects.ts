import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "Corgi — Insurance Co-Pilot",
    description:
      "Multi-agent AI system for insurance claim processing. Orchestrator, agents, frontend pipeline, and policy evaluation — built during hackathon.",
    tags: ["Python", "Multi-Agent AI", "Orchestrator"],
    github: "https://github.com/Mkkrish12/Corgi",
    featured: false,
  },
  {
    title: "GoSolar",
    description:
      "Rooftop intelligence platform that evaluates commercial buildings for solar installation vs. edge data center conversion. Dual scoring engine integrating 10+ data sources — NREL, FEMA, FCC, Census.",
    tags: ["React", "Node.js", "Express", "Leaflet", "Tailwind"],
    github: "https://github.com/Mkkrish12/Solar",
    featured: false,
  },
  {
    title: "Lemuria Recovery",
    description:
      "SMB lending platform with AI-powered outbound voice calls, loan eligibility evaluation, and applicant management dashboard. Demo mode included.",
    tags: ["Next.js", "TypeScript", "Supabase", "Vapi", "OpenAI"],
    github: "https://github.com/Mkkrish12/smb-lending",
    demo: "https://www.loom.com/share/658c038248da4bcc870183041acf4a9f",
    featured: true,
  },
  {
    title: "GEO Agent",
    description:
      "AI tool that tracks a brand's Share of Model across Tavily, Perplexity, OpenAI, and Gemini. Live SoM audits, competitive intelligence, and PDF export.",
    tags: ["Next.js 14", "shadcn/ui", "Framer Motion", "Tavily", "OpenAI"],
    github: "https://github.com/Mkkrish12/fun-projects",
    featured: false,
  },
  {
    title: "LP-Allocator",
    description:
      "VC fund analysis dashboard with PDF document parsing, AI-powered fund scoring, Plotly charts, and portfolio view. Built for LP due diligence workflows.",
    tags: ["React", "TypeScript", "OpenAI", "Plotly", "Tailwind"],
    github: "https://github.com/Mkkrish12/LP-Allocator",
    link: "https://lp-allocator.vercel.app/",
    demo: "https://www.loom.com/share/67d1a2b559c94dabb992f597080dbc58",
    featured: true,
  },
  {
    title: "Nana & Neo",
    description:
      "Built at Eazo x Gen Hackathon. Two-sided matching app pairing older adults (Nanas) with younger people (Neos) for weekly conversations. Quiz-based compatibility scoring with AI-generated prompts and a streak-tracked weekly call experience.",
    tags: ["Eazo", "Next.js", "Drizzle ORM", "AWS Bedrock", "Framer Motion"],
    link: "https://nana-neo-02c53b7c.eazo.dev",
    featured: false,
  },
  {
    title: "CredAgent",
    description:
      "Built at MuleRun. AI agent that automates healthcare staffing credentialing — chases candidates, verifies docs against government registers, and ships compliance packs on clearance. Cuts onboarding from 60 days to 14.",
    tags: ["MuleRun", "AI Agent", "Healthcare", "Compliance"],
    link: "https://x2uvzcup.mule.page",
    featured: false,
  },
  {
    title: "Warden",
    description:
      "Built at Rain x Monad hackathon. Autonomous AP agent for finance teams — ingests vendor invoices, enforces spend policy on-chain via Monad, and pays approved bills with Rain scoped virtual cards locked to one vendor and exact amount.",
    tags: ["Rain", "Monad", "Solidity", "TypeScript", "Slack"],
    github: "https://github.com/Mkkrish12/warden",
    demo: "https://www.loom.com/share/20e00e1582bf4f43a5d7a9c4269f3186",
    featured: true,
  },
  {
    title: "Latch",
    description:
      "Built at Shopify hackathon. Agentic escrow checkout — describe what you want, the agent searches the live Shopify catalog, and checks out with a Rain card. Funds held in escrow until delivery or inspection confirmed.",
    tags: ["Shopify", "Next.js", "TypeScript", "OpenAI", "Rain"],
    demo: "https://www.loom.com/share/c2d7cba7222b49d7ba35dc0d33c93798",
    featured: false,
  },
  {
    title: "FormFiller",
    description:
      "AI-powered Chrome extension that auto-fills forms using your stored profile. Saves time across job applications, sign-ups, and repeated forms.",
    tags: ["Chrome Extension", "React", "OpenAI", "TypeScript", "WXT"],
    featured: false,
  },
  {
    title: "Which is Right?",
    description:
      "Space-themed spelling game for kids 8–11. Two versions of a word fall from the sky — tap the correct spelling. Streak bonuses, difficulty levels 1–10, and shareable challenge links via encoded URLs.",
    tags: ["Vanilla JS", "HTML5", "CSS Animations", "Web Audio API"],
    link: "https://3000-i4fgui2kpnxucqv0es5q9.e2b.app",
    featured: false,
  },
];
