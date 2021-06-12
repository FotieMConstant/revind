import { DetailedHTMLProps, ReactElement, ReactNode } from "react";

declare interface ButtonProps
    extends DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    /**
     * the variant/category of button to use
     * @default filled
     */
    variant: "filled" | "outlined" | "text";
    /**
     * the bg & accent colors to use
     * @default primary
     */
    scheme?: "primary" | "secondary" | "red" | "green" | "yellow";
    /**
     * the size to use (based on padding)
     * @default md
     */
    size?: "sm" | "md" | "lg" | "xl" | "xxl";
    /**
     * gives a bit margin around the button for separation
     * its turned off in `ButtonGroup`
     * @default true
     */
    margin?: boolean;
    /**
     * the icon to be shown on the left side of all other button contents
     */
    "start-icon": ReactNode;
    /**
     * the icon to be shown on the right side of all other button contents
     */
    "end-icon": ReactNode;
    /**
     * makes the button consume/grow 100% of the container size
     * @default false
     */
    "full-width": boolean;
}

/**
 * Higher level Button component
 */
declare function Button(props: ButtonProps): ReactElement;

export default Button;
