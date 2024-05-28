import { CustomSvgProps } from "./types";

export const DockerIcon = ({
  mainColor = "#1794D4",
  secondaryColor,
  ...props
}: CustomSvgProps) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    fill={mainColor}
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <title>{"docker"}</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="invisible_box" data-name="invisible box">
          <rect width={48} height={48} fill="none" />
          <rect width={48} height={48} fill="none" />
        </g>
        <g id="icons_Q2" data-name="icons Q2">
          <g>
            <rect x={10} y={19.3} width={4.4} height={4.44} />
            <rect x={4.6} y={19.3} width={4.4} height={4.44} />
            <path d="M45.4,21.7a6.3,6.3,0,0,0-5.2-.6,6.6,6.6,0,0,0-2.9-4.4l-.5-.5-.5.6A6.1,6.1,0,0,0,35.2,21a5.6,5.6,0,0,0,1,2.8l-1.5.7a10.5,10.5,0,0,1-3,.5H2.2v.6a12.1,12.1,0,0,0,1,6.5l.4.8h0c2.8,4.6,7.7,6.6,13,6.6,10.3,0,18.7-4.4,22.7-14,2.6.2,5.2-.5,6.5-3L46,22ZM10.8,33.5a2.3,2.3,0,1,1,0-4.6,2.3,2.3,0,1,1,0,4.6Z" />
            <rect x={10} y={13.7} width={4.4} height={4.44} />
            <rect x={26.5} y={19.3} width={4.4} height={4.44} />
            <rect x={21.1} y={8} width={4.4} height={4.44} />
            <rect x={21.1} y={19.3} width={4.4} height={4.44} />
            <rect x={15.6} y={13.7} width={4.4} height={4.44} />
            <rect x={21.1} y={13.7} width={4.4} height={4.44} />
            <rect x={15.6} y={19.3} width={4.4} height={4.44} />
          </g>
        </g>
      </g>
    </g>
  </svg>
);
