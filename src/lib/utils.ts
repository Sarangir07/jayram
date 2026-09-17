/** Joins class names, dropping falsy values — the shadcn `cn` helper without extra deps. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
