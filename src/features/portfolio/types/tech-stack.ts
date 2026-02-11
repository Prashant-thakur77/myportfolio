/**
 * A technology item displayed in the Tech Stack section.
 *
 * Default icon paths:
 * - Normal: /images/tech-stack/{key}.svg
 * - Themed light: /images/tech-stack/{key}-light.svg
 * - Themed dark: /images/tech-stack/{key}-dark.svg
 */
export type TechStack = {
  /** Unique identifier used to resolve icon files. */
  key: string;
  /** Display name of the technology. */
  title: string;
  /** Official website URL. */
  href: string;
  /** Category tags used for grouping/filtering. */
  categories: string[];
  /** If true, use theme-specific icons for dark/light mode. */
  theme?: boolean;
  /** Icon URL for single icon (when theme is false/undefined). */
  icon?: string;
  /** Icon URL for light theme (when theme is true). */
  iconLight?: string;
  /** Icon URL for dark theme (when theme is true). */
  iconDark?: string;
};
