import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";

declare interface HiddenProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  xxl?: boolean;
  hover?: boolean;
  active?: boolean;
  focus?: boolean;
}

declare function Hidden(props: HiddenProps): ReactElement;

export default Hidden;
