import { IconMap } from "./icons/icon-map";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface TechStackIconsProps {
  techStacks: string[];
}

export const TechStackIcons = ({ techStacks }: TechStackIconsProps) => {
  return (
    <div className="mt-2 text-gray-600 flex-row flex justify-center">
      Tech Stack:{" "}
      <div className="flex">
        {techStacks.map((techStack) => {
          const IconComponent = IconMap[techStack.toLowerCase()];
          return IconComponent ? (
            <TooltipProvider key={techStack}>
              <Tooltip>
                <TooltipTrigger>
                  <IconComponent width={25} height={25} />
                </TooltipTrigger>
                <TooltipContent className="bg-accent text-foreground">
                  {techStack}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : null;
        })}
      </div>
    </div>
  );
};
