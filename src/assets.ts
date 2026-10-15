/** Resolves a file in /public against the deploy base path (e.g. /amberfox-web/ on GitHub Pages). */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

/** Builds a `srcset` string from `[path, descriptor]` pairs. */
export const srcSet = (entries: [path: string, descriptor: string][]) =>
  entries.map(([path, descriptor]) => `${asset(path)} ${descriptor}`).join(', ');
