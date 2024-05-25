import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const LinkedinButton = () => {
  return (
    <Button variant="outline" size="icon" asChild>
      <Link
        href="https://www.linkedin.com/in/EmreKarslan/"
        rel="noopener noreferrer"
        target="_blank"
        passHref
      >
        <LinkedInLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      </Link>
    </Button>
  );
};
