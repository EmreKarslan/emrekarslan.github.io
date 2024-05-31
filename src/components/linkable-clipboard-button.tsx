"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { CheckIcon, ClipboardIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

interface TitleCopyButtonProps {
  href: string;
  title: string;
  value: string;
}

const LinkableClipboardButton: React.FC<TitleCopyButtonProps> = ({
  href,
  title,
  value,
}) => {
  const [copied, setCopied] = useState(false);
  const { resolvedTheme } = useTheme();
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="p-2 flex items-center gap-4">
      <p className="text-primary text-lg font-bold w-16">{title}:</p>
      <div className="flex items-center rounded-lg px-2 py-2 gap-2">
        <Link
          href={href}
          rel="noreferrer nofollow"
          className="hover:bg-accent hover:text-accent-foreground"
        >
          <Button variant="link" asChild>
            <p>{value}</p>
          </Button>
        </Link>
        <Button variant="ghost" onClick={handleCopy}>
          {copied ? (
            <CheckIcon color={resolvedTheme === "dark" ? "white" : "black"} />
          ) : (
            <ClipboardIcon
              color={resolvedTheme === "dark" ? "white" : "black"}
            />
          )}
        </Button>
      </div>
    </div>
  );
};

export default LinkableClipboardButton;
