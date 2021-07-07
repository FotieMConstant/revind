import PropTypes from "prop-types";
import React, { DetailedHTMLProps, forwardRef, HTMLAttributes } from "react";

export interface ContainerProps
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
    const containerBreakpoints = {
        sm: "sm:container",
        md: "md:container",
        lg: "lg:container",
        xl: "xl:container",
    };

    const variantsMap = {
        "elevated-xs": "shadow",
        "elevated-sm": "shadow-sm",
        "elevated-md": "shadow-md",
        "elevated-lg": "shadow-lg",
        "elevated-xl": "shadow-xl",
        "elevated-xxl": "shadow-2xl",
        "bordered-sm": "border",
        "bordered-md": "border-2",
        "bordered-lg": "border-4",
        "bordered-xl": "border-8",
        regular: "",
    };

    const variantKey =
        variant === "elevated"
            ? `elevated-${elevation}`
            : variant === "bordered"
            ? `bordered-${border}`
            : "regular";

    const schemes = {
        primary: "bg-container-primary dark:bg-container-primary-dark",
        secondary: "bg-container-secondary dark:bg-container-secondary-dark",
    };

    return (
        <div
            ref={ref}
            className={`${fixed ? "container" : ""} ${
                maxWidth && containerBreakpoints[maxWidth]
            } ${center ? "mx-auto" : ""} ${gutters ? "px-2" : ""} ${schemes[scheme]} ${
                variantsMap[variantKey as keyof typeof variantsMap]
            } ${rounded ? "rounded" : ""} ${
                variant === "bordered"
                    ? "border-gray-600 dark:border-gray-300 border-solid"
                    : ""
            } ${className}`}
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
    elevation: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
    border: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
    rounded: PropTypes.bool,
};
