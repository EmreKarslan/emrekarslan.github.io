import React from "react";
import { CustomSvgProps } from "../icons/types";
import Link from "next/link";

interface TechStackButtonProps {
  icon: React.ReactElement<CustomSvgProps>;
  title: string;
  href: string;
}

export const TechStackButton = ({
  icon,
  title,
  href,
}: TechStackButtonProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <Link target="_blank" href={href} rel="noreferrer nofollow">
        <div className="w-fit p-2 border border-transparent rounded-sm shadow transition-all transform hover:scale-105 hover:border-blue-500 hover:bg-primary-foreground hover:shadow-lg">
          {React.cloneElement(icon)}
        </div>
      </Link>
      <span className="text-sm font-medium">{title}</span>
    </div>
  );
};
