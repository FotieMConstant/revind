import * as PropTypes from "prop-types";
import React, { ReactNode } from "react";
import clsx from "clsx";
import { forwardRef, HTMLRevindProps } from "../../utils/forward-ref";
import { ButtonOptions } from "@revind/types";
import { useStyleConfig } from "../../hooks/useStyleConfig";

export type ReactRevindButtonOptions = ButtonOptions<ReactNode>;

export type ButtonProps = HTMLRevindProps<"button"> & ReactRevindButtonOptions;

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
        styleObj,
        className,
        children,
        ...props
    },
    ref,
) {
    const {
        sizes,
        variantSchemes,
        variants,
        default: { start, end },
        sub: { startIcon: startIconStyle, endIcon: endIconStyle },
        schemes,
        conditionals: { fullWidth, margin, rounded },
        variantSizes,
    } = useStyleConfig("Button", styleObj);

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
    scheme: PropTypes.oneOf<ReactRevindButtonOptions["scheme"]>([
        "primary",
        "secondary",
        "red",
        "green",
        "yellow",
    ]),
    size: PropTypes.oneOf<ReactRevindButtonOptions["size"]>([
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
    ]),
    margin: PropTypes.bool,
    "start-icon": PropTypes.node,
    "end-icon": PropTypes.node,
    "full-width": PropTypes.bool,
    rounded: PropTypes.bool,
};
