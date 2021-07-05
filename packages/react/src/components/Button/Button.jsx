import PropTypes from "prop-types";
import React, { forwardRef } from "react";

const Button = forwardRef(function Button(
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
    const variantsCommon = {
        filled: "text-white hover:brightness-90 hover:filter active:brightness-105 active:filter",
        outlined:
            "border border-solid bg-opacity-0 dark:bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-10 dark:hover:bg-opacity-20 dark:active:bg-opacity-10",
        text: "bg-opacity-0 dark:bg-opacity-0 hover:bg-opacity-20 dark:hover:bg-opacity-20 active:bg-opacity-10 dark:active:bg-opacity-10",
    };
    const variants = {
        filled: {
            primary: "bg-primary dark:bg-primary-dark",
            secondary: "bg-secondary dark:bg-secondary-dark",
            red: "bg-red dark:bg-red-dark",
            green: "bg-green dark:bg-green-dark",
            yellow: "bg-yellow dark:bg-yellow-dark",
        },
        outlined: {
            primary:
                "border-primary dark:border-primary-dark text-primary dark:text-primary-dark bg-primary dark:bg-primary-dark",
            secondary:
                "border-secondary dark:border-secondary-dark text-secondary dark:text-secondary-dark bg-secondary dark:bg-secondary-dark",
            red: "border-red dark:border-red text-red dark:text-red-dark bg-red dark:bg-red-dark",
            green: "border-green dark:border-green text-green dark:text-green-dark bg-green dark:bg-green-dark",
            yellow: "border-yellow dark:border-yellow text-yellow dark:text-yellow-dark bg-yellow dark:bg-yellow-dark",
        },
        text: {
            primary:
                "text-primary dark:text-primary-dark bg-primary dark:bg-primary-dark",
            secondary:
                "text-secondary dark:text-secondary-dark bg-secondary dark:bg-secondary-dark",
            red: "text-red dark:text-red-dark bg-red dark:bg-red-dark",
            green: "text-green dark:text-green-dark bg-green dark:bg-green-dark",
            yellow: "text-yellow dark:text-yellow-dark bg-yellow dark:bg-yellow-dark",
        },
    };
    const sizes = {
        sm: "p-1",
        md: "p-2",
        lg: "p-4",
        xl: "p-6",
        xxl: "p-8",
    };
    return (
        <button
            ref={ref}
            className={`rounded cursor-pointer transition-all ${
                variantsCommon[variant]
            } ${variants[variant][scheme]} ${
                sizes[size]
            } disabled:bg-gray-200 dark:disabled:bg-gray-500 disabled:cursor-not-allowed disabled:text-gray-400 focus:outline-none  ${
                margin ? "m-1" : ""
            } ${fullWidth ? "w-full block" : ""} ${className}`}
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
    variant: PropTypes.oneOf(["filled", "outlined", "text"]),
    scheme: PropTypes.oneOf(["primary", "secondary", "red", "green", "yellow"]),
    size: PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"]),
    margin: PropTypes.bool,
    "start-icon": PropTypes.node,
    "end-icon": PropTypes.node,
    "full-width": PropTypes.bool,
};

export default Button;
