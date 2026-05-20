import { siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-8">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between text-sm text-zinc-500">
        <span>&copy; {new Date().getFullYear()} {siteConfig.name}</span>
        <div className="flex gap-6">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.links.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            Spotify
          </a>
        </div>
      </div>
    </footer>
  );
}
