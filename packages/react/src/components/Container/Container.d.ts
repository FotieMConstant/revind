import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";

declare interface ContainerProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    fixed?: boolean;
    scheme?: "primary" | "secondary";
    variant?: "elevated" | "regular" | "bordered";
    gutters?: boolean;
    center?: boolean;
    "max-width"?: "sm" | "md" | "lg" | "xl" | false;
    elevation?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    border?: "sm" | "md" | "lg" | "xl";
    rounded?: boolean;
}

declare function Container(props: ContainerProps): ReactElement;

export default Container;
