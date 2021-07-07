import * as PropTypes from "prop-types";
import React, { DetailedHTMLProps, forwardRef, ReactNode } from "react";
import { buttonStyleObj } from "@revind/styles";
import clsx from "clsx";

export interface ButtonProps
    extends DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    /**
     * the variant/category of button to use
     * @default filled
     */
    variant?: "filled" | "outlined" | "text";
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
    "start-icon"?: ReactNode;
    /**
     * the icon to be shown on the right side of all other button contents
     */
    "end-icon"?: ReactNode;
    /**
     * makes the button consume/grow 100% of the container size
     * @default false
     */
    "full-width"?: boolean;
}

/**
 * Higher level Button component
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    {
        scheme = "primary",
        size = "md",
        margin = true,
        variant = "filled",
        "start-icon": startIcon,
        "end-icon": endIcon,
        "full-width": fullWidth = false,
        className,
        children,
        ...props
    },
    ref,
) {
    const { sizes, variantSchemes, variants, defaultEnd, defaultStart } =
        buttonStyleObj;

    return (
        <button
            ref={ref}
            className={clsx(
                defaultStart,
                variants[variant],
                variantSchemes[variant][scheme],
                sizes[size],
                {
                    [buttonStyleObj.margin]: margin,
                    [buttonStyleObj.fullWidth]: fullWidth,
                },
                defaultEnd,
                className,
            )}
            {...props}
        >
            <span className="mr-1 inline-block align-middle">{startIcon}</span>
            {children}
            <span className="ml-1 inline-block align-middle">{endIcon}</span>
        </button>
    );
});

Button.propTypes = {
    ...Button.propTypes,
    variant: PropTypes.oneOf<ButtonProps["variant"]>(["filled", "outlined", "text"]),
    scheme: PropTypes.oneOf(["primary", "secondary", "red", "green", "yellow"]),
    size: PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"]),
    margin: PropTypes.bool,
    "start-icon": PropTypes.node,
    "end-icon": PropTypes.node,
    "full-width": PropTypes.bool,
};
