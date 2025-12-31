import { USER } from "@/features/portfolio/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://github.com/Prashant-thakur77",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
  {
    title: "Components",
    href: "/components",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export const GITHUB_USERNAME = "Prashant-thakur77";

export const SHOW_TESTIMONIALS = false;

export const SOURCE_CODE_GITHUB_REPO = "Prashant-thakur77/myportfolio";
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/Prashant-thakur77/myportfolio";

export const SPONSORSHIP_URL = ""; // not applicable right now

export const UTM_PARAMS = {
  utm_source: "prashant-thakur.dev",
  utm_medium: "referral",
  utm_campaign: "portfolio",
};
