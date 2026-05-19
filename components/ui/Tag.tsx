export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-xs text-zinc-500 bg-white/[0.04] px-2 py-1 rounded">
      {children}
    </span>
  );
}
