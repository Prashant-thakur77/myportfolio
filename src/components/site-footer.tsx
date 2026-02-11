import { RssIcon } from "lucide-react";
import Link from "next/link";

import { SITE_INFO, SOURCE_CODE_GITHUB_URL } from "@/config/site";

import { Icons } from "./icons";

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-before mx-auto border-x border-edge pt-4 md:max-w-3xl">
        <p className="mb-1 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Built with inspiration from{" "}
          <a
            className="link"
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener"
          >
            Tailwind CSS
          </a>
          ,{" "}
          <a
            className="link"
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noopener"
          >
            shadcn/ui
          </a>
          , and{" "}
          <a
            className="link"
            href="https://github.com/ncdai/chanhdai.com"
            target="_blank"
            rel="noopener"
          >
            ncdai
          </a>
        </p>

        <p className="mb-4 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Designed & developed by{" "}
          <a
            className="link"
            href="https://x.com/2730Thakur12618"
            target="_blank"
            rel="noopener"
          >
            Prashant Thakur
          </a>
          . The source code is available on{" "}
          <a
            className="link"
            href={SOURCE_CODE_GITHUB_URL}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          .
        </p>
      </div>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-2" />
      </div>
    </footer>
  );
}

function Separator() {
  return <div className="flex h-11 w-px bg-edge" />;
}
