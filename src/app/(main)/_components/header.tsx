"use client";

import { cn } from "@/lib/utils";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { ModeToggle } from "@/components/mode-toggle";
import { LinkedinButton } from "./linkedin-button";
import { GitHubButton } from "./github-button";

export const Header = () => {
  const { scrolled } = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        <ModeToggle />
        <LinkedinButton />
        <GitHubButton />
      </div>
    </div>
  );
};
