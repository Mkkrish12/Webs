export function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
      {children}
    </span>
  );
}
