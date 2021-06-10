import { DetailedHTMLProps, ReactElement, ReactNode } from "react";

declare interface ButtonProps
    extends DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    variant: "filled" | "outlined" | "text";
    scheme?: "primary" | "secondary" | "red" | "green" | "yellow";
    size?: "sm" | "md" | "lg" | "xl" | "xxl";
    margin?: boolean;
    "start-icon": ReactNode;
    "end-icon": ReactNode;
    "full-width": boolean;
}

declare function Button(props: ButtonProps): ReactElement;

export default Button;
