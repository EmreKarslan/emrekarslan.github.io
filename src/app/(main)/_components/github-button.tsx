import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const GitHubButton = () => {
  return (
    <Button variant="outline" size="icon" asChild>
      <Link
        href="https://github.com/EmreKarslan"
        rel="noopener noreferrer"
        target="_blank"
        passHref
      >
        <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      </Link>
    </Button>
  );
};
