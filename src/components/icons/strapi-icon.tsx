import { CustomSvgProps } from "./types";

export const StrapiIcon = ({
  mainColor = "#8E75FF",
  secondaryColor,
  ...props
}: CustomSvgProps) => (
  <svg
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <g strokeWidth={0} />
    <g strokeLinecap="round" strokeLinejoin="round" />
    <g fill={mainColor}>
      <path d="M249.868 0H81.613v84.362h82.79a5.343 5.343 0 0 1 5.342 5.342v81.647h85.465V5.352A5.34 5.34 0 0 0 249.868 0" />
      <path
        d="M81.603 0v84.362H2.671a2.676 2.676 0 0 1-1.875-4.58zm92.693 251.22a2.676 2.676 0 0 1-4.551-1.904v-77.965h85.465l-80.914 79.86zM81.603 84.362h85.476a2.67 2.67 0 0 1 2.666 2.666v84.323h-82.79a5.34 5.34 0 0 1-5.342-5.342V84.362z"
        opacity={0.405}
      />
    </g>
  </svg>
);
