import { SVGProps } from "react";

export interface CustomSvgProps extends SVGProps<SVGSVGElement> {
  mainColor?: string;
  secondaryColor?: string;
}
