import React from "react";
import { CustomSvgProps } from "../icons/types";

interface TechStackButtonProps {
  icon: React.ReactElement<CustomSvgProps>;
}

const TechStackButton = ({ icon }: TechStackButtonProps) => {
  return (
    <div className="p-2 border border-transparent shadow transition-all transform hover:scale-110 hover:bg-primary-foreground hover:border-primary-foreground hover:shadow-lg">
      {React.cloneElement(icon)}
    </div>
  );
};

export default TechStackButton;
