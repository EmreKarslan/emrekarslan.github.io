"use client";

import {
  TypescriptIcon,
  JavascriptIcon,
  TailwindIcon,
  NextjsIcon,
  ReactIcon,
} from "@/components/icons";
import { DockerIcon } from "@/components/icons/docker-icon";
import { MantineIcon } from "@/components/icons/mantine-icon";
import { NodejsIcon } from "@/components/icons/nodejs-icon";
import { ReduxIcon } from "@/components/icons/redux-icon";
import { TechStackButtonSkeleton } from "@/components/tech-stack-button/tech-stack-button.skeleton";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
const TechStackButton = dynamic(
  () =>
    import("@/components/tech-stack-button/tech-stack-button").then(
      (mod) => mod.TechStackButton
    ),
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
        <TechStackButton
          icon={<TypescriptIcon width={48} height={48} />}
          title="TypeScript"
          href="/"
        />
        <TechStackButton
          icon={<JavascriptIcon width={48} height={48} />}
          title="JavaScript"
          href="/"
        />
        <TechStackButton
          icon={
            <ReactIcon
              width={48}
              height={48}
              secondaryColor={resolvedTheme === "light" ? "black" : "white"}
            />
          }
          title="React"
          href="/"
        />
        <TechStackButton
          icon={
            <ReactIcon
              width={48}
              height={48}
              secondaryColor={resolvedTheme === "light" ? "black" : "white"}
            />
          }
          title="React Native"
          href="/"
        />
        <TechStackButton
          icon={
            <NextjsIcon
              width={48}
              height={48}
              secondaryColor={resolvedTheme === "light" ? "black" : "white"}
            />
          }
          title="NextJS"
          href="/"
        />
        <TechStackButton
          icon={<TailwindIcon width={48} height={48} />}
          title="Tailwind"
          href="/"
        />
        <TechStackButton
          icon={
            <ReduxIcon
              width={48}
              height={48}
              mainColor={resolvedTheme === "light" ? "black" : "white"}
            />
          }
          title="Redux"
          href="/"
        />
        <TechStackButton
          icon={
            <MantineIcon
              width={48}
              height={48}
              secondaryColor={resolvedTheme === "dark" ? "black" : "white"}
            />
          }
          title="Mantine"
          href="/"
        />
        <TechStackButton
          icon={<NodejsIcon width={48} height={48} />}
          title="NodeJS"
          href="/"
        />
        <TechStackButton
          icon={<DockerIcon width={48} height={48} />}
          title="Docker"
          href="/"
        />
      </div>
    </section>
  );
};
