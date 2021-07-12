import clsx from "clsx";
import PropTypes from "prop-types";
import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import { useTheme } from "../../hooks/useTheme";

export interface ContainerProps extends ComponentPropsWithoutRef<"div"> {
    fixed?: boolean;
    scheme?: "primary" | "secondary";
    variant?: "elevated" | "regular" | "bordered";
    gutters?: boolean;
    center?: boolean;
    "max-width"?: "sm" | "md" | "lg" | "xl" | false;
    elevation?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    border?: "sm" | "md" | "lg" | "xl";
    rounded?: boolean;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
    {
        center = false,
        gutters = false,
        fixed = false,
        scheme = "primary",
        variant = "regular",
        "max-width": maxWidth = "lg",
        elevation = "md",
        border = "sm",
        rounded,
        className = "",
        children,
        ...props
    },
    ref,
) {
    if (scheme === "secondary" && rounded === undefined) {
        rounded = true;
    }

    const {
        styleObjects: { Container: styleObj },
    } = useTheme();

    const variantKey = (
        variant === "elevated"
            ? `elevated-${elevation}`
            : variant === "bordered"
            ? `bordered-${border}`
            : "regular"
    ) as keyof typeof styleObj.variants;

    return (
        <div
            ref={ref}
            className={clsx(
                styleObj.defaultStart,
                maxWidth && styleObj.breakpoints[maxWidth],
                {
                    [styleObj.center]: center,
                    [styleObj.gutters]: gutters,
                    [styleObj.rounded]: rounded,
                },
                styleObj.variants[variant],
                styleObj.variants[variantKey],
                styleObj.schemes[scheme],
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
});

Container.propTypes = {
    ...Container.propTypes,
    fixed: PropTypes.bool,
    scheme: PropTypes.oneOf(["primary", "secondary"]),
    variant: PropTypes.oneOf(["elevated", "regular", "bordered"]),
    gutters: PropTypes.bool,
    center: PropTypes.bool,
    "max-width": PropTypes.oneOf(["sm", "md", "lg", "xl", false]),
    elevation: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl"]),
    border: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
    rounded: PropTypes.bool,
};
