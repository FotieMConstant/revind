import React from "react";
import PropTypes from "prop-types";

function Button({
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
}) {
    const variantsCommon = {
        filled: "text-white hover:brightness-90 hover:filter active:brightness-105 active:filter",
        outlined:
            "border border-solid bg-opacity-0 dark:bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-10",
        text: "bg-opacity-0 dark:bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-10",
    };
    const variants = {
        filled: {
            primary: "bg-primary dark:bg-primary-dark",
            secondary: "bg-secondary dark:bg-secondary-dark",
            red: "bg-red-600 dark:bg-red-500",
            green: "bg-green-600 dark:bg-green-500",
            yellow: "bg-yellow-400 dark:bg-yellow-300",
        },
        outlined: {
            primary:
                "border-primary dark:border-primary-dark text-primary dark:text-primary-dark bg-primary dark:bg-primary-dark",
            secondary:
                "border-secondary dark:border-secondary-dark text-secondary dark:text-secondary-dark bg-secondary dark:bg-secondary-dark",
            red: "border-red-600 dark:border-red-600 text-red-600 dark:text-red-500 bg-red-600 dark:bg-red-500",
            green: "border-green-600 dark:border-green-600 text-green-600 dark:text-green-500 bg-green-600 dark:bg-green-500",
            yellow: "border-yellow-400 dark:border-yellow-400 text-yellow-400 dark:text-yellow-300 bg-yellow-400 dark:bg-yellow-300",
        },
        text: {
            primary:
                "text-primary dark:text-primary-dark bg-primary dark:bg-primary-dark",
            secondary:
                "text-secondary dark:text-secondary-dark bg-secondary dark:bg-secondary-dark",
            red: "text-red-600 dark:text-red-500 bg-red-600 dark:bg-red-500",
            green: "text-green-600 dark:text-green-500 bg-green-600 dark:bg-green-500",
            yellow: "text-yellow-400 dark:text-yellow-300 bg-yellow-400 dark:bg-yellow-300",
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
            className={`rounded cursor-pointer transition-all ${
                variantsCommon[variant]
            } ${variants[variant][scheme]} ${
                sizes[size]
            } disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-400 focus:outline-none  ${
                margin ? "m-1" : ""
            } ${fullWidth ? "w-full block" : ""} ${className}`}
            {...props}
        >
            <span className="mr-1 inline-block align-middle">{startIcon}</span>
            {children}
            <span className="ml-1 inline-block align-middle">{endIcon}</span>
        </button>
    );
}

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
