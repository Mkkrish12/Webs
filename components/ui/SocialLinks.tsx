import { siteConfig } from "@/lib/constants";

export function SocialLinks() {
  const links = [
    { label: "GitHub", href: siteConfig.links.github },
    { label: "X", href: siteConfig.links.twitter },
    { label: "LinkedIn", href: siteConfig.links.linkedin },
  ];

  return (
    <div className="flex gap-5">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
