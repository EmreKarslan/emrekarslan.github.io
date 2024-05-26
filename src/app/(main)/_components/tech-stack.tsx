"use client";

import {
  TypescriptIcon,
  JavascriptIcon,
  TailwindIcon,
  NextjsIcon,
} from "@/components/icons";
import { TechStackButtonSkeleton } from "@/components/tech-stack-button/tech-stack-button.skeleton";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
const TechStackButton = dynamic(
  () => import("@/components/tech-stack-button/tech-stack-button"),
  {
    ssr: false,
    loading: () => <TechStackButtonSkeleton />,
  }
);

export const TechStack = () => {
  const { resolvedTheme } = useTheme();
  return (
    <section className="flex flex-col">
      <div>Tech Stack</div>
      <div className="flex flex-row gap-4">
        <TechStackButton icon={<TypescriptIcon width={48} height={48} />} />
        <TechStackButton icon={<JavascriptIcon width={48} height={48} />} />
        <TechStackButton icon={<TailwindIcon width={48} height={48} />} />
        <TechStackButton
          icon={
            <NextjsIcon
              width={48}
              height={48}
              secondaryColor={resolvedTheme === "light" ? "black" : "white"}
            />
          }
        />
      </div>
    </section>
  );
};
