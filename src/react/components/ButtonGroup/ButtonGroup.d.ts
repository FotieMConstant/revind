import { ReactElement } from "react";

declare interface ButtonGroupProps {
    direction: "column" | "row";
    variant: "filled" | "outlined" | "text";
    scheme?: "primary" | "secondary" | "red" | "green" | "yellow";
    size?: "sm" | "md" | "lg" | "xl" | "xxl";
    "full-width": boolean;
}

declare function ButtonGroup(props: ButtonGroupProps): ReactElement;

export default ButtonGroup;