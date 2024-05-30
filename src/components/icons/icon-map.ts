import { JavascriptIcon } from "./javascript-icon";
import { NextjsIcon } from "./nextjs-icon";
import { ReactIcon } from "./react-icon";
import { TailwindIcon } from "./tailwind-icon";
import { TypescriptIcon } from "./typescript-icon";
import { CustomSvgProps } from "./types";
import { AstroIcon } from "./astro-icon";
import { DockerIcon } from "./docker-icon";
import { MantineIcon } from "./mantine-icon";
import { ReduxIcon } from "./redux-icon";
import { ShadcnuiIcon } from "./shadcnui-icon";

type IconMapType = {
  [key: string]: (props: CustomSvgProps) => JSX.Element;
};

export const IconMap: IconMapType = {
  typescript: TypescriptIcon,
  javascript: JavascriptIcon,
  tailwind: TailwindIcon,
  nextjs: NextjsIcon,
  react: ReactIcon,
  astro: AstroIcon,
  docker: DockerIcon,
  mantine: MantineIcon,
  redux: ReduxIcon,
  shadcnui: ShadcnuiIcon,
};
