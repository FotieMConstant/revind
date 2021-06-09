import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";

declare interface FlexProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  direction: "column" | "row" | "row-reverse" | "column-reverse";
  wrap: "wrap" | "no-wrap" | "wrap-reverse";
  justifyContent: "center" | "start" | "end" | "between" | "around" | "evenly";
  alignContent: "center" | "start" | "end" | "between" | "around" | "evenly";
  alignItems: "center" | "start" | "end" | "stretch" | "baseline";
}

declare function Flex(props: FlexProps): ReactElement;
export default Flex;
