export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-xs text-zinc-600 dark:text-zinc-500 bg-zinc-100 dark:bg-white/[0.04] px-2 py-1 rounded">
      {children}
    </span>
  );
}
