import PropTypes from "prop-types";
import React, { forwardRef } from "react";

function Container(
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
        false: "",
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
            className={`${fixed ? "container" : ""} ${containerBreakpoints[maxWidth]} ${
                center ? "mx-auto" : ""
            } ${gutters ? "px-2" : ""} ${schemes[scheme]} ${variantsMap[variantKey]} ${
                rounded ? "rounded" : ""
            } ${
                variant === "bordered"
                    ? "border-gray-600 dark:border-gray-300 border-solid"
                    : ""
            } ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}

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

export default forwardRef(Container);
