import { CustomSvgProps } from "./types";
export const ShadcnuiIcon = ({
  mainColor = "#000",
  secondaryColor = "#FFF",
  ...props
}: CustomSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="h-6 w-6"
    {...props}
  >
    <path fill={mainColor} d="M0 0h256v256H0z" />
    <path
      stroke={secondaryColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="m208 128-80 80m64-168L40 192"
    />
  </svg>
);
