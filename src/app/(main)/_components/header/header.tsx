"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { ModeToggle } from "@/components/mode-toggle";
import { LinkedinButton } from "./linkedin-button";
import { GitHubButton } from "./github-button";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import Link from "next/link";

export const Header = () => {
  const { scrolled } = useScrollTop();
  const currentPath = usePathname();

  return (
    <div
      className={cn(
        "z-50 bg-background fixed w-[100vw] 2xl:w-[60vw] top-0 flex items-center p-6 gap-4 ",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Button variant="link" asChild>
        <Link href="/" passHref>
          <Logo />
        </Link>
      </Button>
      <Button
        variant="link"
        className={currentPath === "/" ? "bg-gray-200 dark:bg-slate-700" : ""}
        asChild
      >
        <Link href="/" passHref>
          Home
        </Link>
      </Button>
      <Button
        variant="link"
        className={
          currentPath === "/projects" ? "bg-gray-200 dark:bg-slate-700" : ""
        }
        asChild
      >
        <Link href="/projects" passHref>
          Projects
        </Link>
      </Button>
      <Button
        variant="link"
        className={
          currentPath === "/blog" ? "bg-gray-200 dark:bg-slate-700" : ""
        }
        asChild
      >
        <Link href="/blog" passHref>
          Blog
        </Link>
      </Button>
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        <ModeToggle />
        <LinkedinButton />
        <GitHubButton />
      </div>
    </div>
  );
};
