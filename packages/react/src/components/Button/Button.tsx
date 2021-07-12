import * as PropTypes from "prop-types";
import React, { ReactNode } from "react";
import clsx from "clsx";
import { useTheme } from "../../hooks/useTheme";
import { forwardRef, HTMLRevindProps } from "../../utils/forward-ref";

export interface ButtonProps extends HTMLRevindProps<"button"> {
    /**
     * the variant/category of button to use
     * @default filled
     */
    variant?: "filled" | "outlined" | "minimal";
    /**
     * the bg & accent colors to use
     * @default primary
     */
    scheme?: "primary" | "secondary" | "red" | "green" | "yellow";
    /**
     * the size to use (based on padding)
     * @default md
     */
    size?: "sm" | "md" | "lg" | "xl" | "2xl";
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
    /**
     * round edged button
     * @default true
     */
    rounded?: boolean;
}

/**
 * Higher level Button component
 */
export const Button = forwardRef<ButtonProps, "button">(function Button(
    {
        scheme = "primary",
        size = "md",
        margin: isMargin = true,
        variant = "filled",
        "start-icon": startIcon,
        "end-icon": endIcon,
        "full-width": isFullWidth = false,
        rounded: isRounded = true,
        as: Component = "button",
        className,
        children,
        ...props
    },
    ref,
) {
    const {
        styleObjects: {
            Button: {
                sizes,
                variantSchemes,
                variants,
                default: { start, end },
                sub: { startIcon: startIconStyle, endIcon: endIconStyle },
                schemes,
                conditionals: { fullWidth, margin, rounded },
                variantSizes,
            },
        },
    } = useTheme();

    return (
        <Component
            ref={ref}
            className={clsx(
                start,
                variants[variant],
                sizes[size],
                schemes[scheme],
                variantSizes?.[variant]?.[size],
                variantSchemes?.[variant]?.[scheme],
                {
                    [margin]: isMargin,
                    [fullWidth]: isFullWidth,
                    [rounded]: isRounded,
                },
                end,
                className,
            )}
            {...props}
        >
            <span
                className={clsx(startIconStyle.default.start, startIconStyle.default.end)}
            >
                {startIcon}
            </span>
            {children}
            <span className={clsx(endIconStyle.default.start, endIconStyle.default.end)}>
                {endIcon}
            </span>
        </Component>
    );
});

Button.propTypes = {
    ...Button.propTypes,
    variant: PropTypes.oneOf<ButtonProps["variant"]>(["filled", "outlined", "minimal"]),
    scheme: PropTypes.oneOf(["primary", "secondary", "red", "green", "yellow"]),
    size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl"]),
    margin: PropTypes.bool,
    "start-icon": PropTypes.node,
    "end-icon": PropTypes.node,
    "full-width": PropTypes.bool,
    rounded: PropTypes.bool,
};
