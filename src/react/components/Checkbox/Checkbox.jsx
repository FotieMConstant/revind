import PropTypes from "prop-types";
import React, { forwardRef } from "react";
const Checkbox = forwardRef(function Checkbox(
    {
        checked = false,
        scheme = "primary",
        "wrapper-ref": wrapperProps,
        size = "md",
        label,
        "label-direction": labelDirection = "right",
        "label-spacing": labelSpacing = true,
        value,
        "wrapper-ref": wrapperRef,
        className = "",
        ...props
    },
    ref,
) {
    const schemes = {
        primary: {
            checked: "bg-primary dark:bg-primary-dark text-white",
            notChecked:
                "border-primary dark:border-primary-dark text-primary dark:text-primary-dark",
        },
        secondary: {
            checked: "bg-secondary dark:bg-secondary-dark text-white",
            notChecked:
                "border-secondary dark:border-secondary-dark text-secondary dark:text-secondary-dark",
        },
        red: {
            checked: "bg-red dark:bg-red-dark text-white",
            notChecked: " border-red dark:border-red-dark text-red dark:text-red-dark",
        },
        green: {
            checked: "bg-green dark:bg-green-dark text-white",
            notChecked:
                " border-green dark:border-green-dark text-green dark:text-green-dark",
        },
        yellow: {
            checked: "bg-yellow dark:bg-yellow-dark text-white",
            notChecked:
                " border-yellow dark:border-yellow-dark text-yellow dark:text-yellow-dark",
        },
    };

    const labelDirections = {
        top: "flex-column-reverse",
        bottom: "flex-column",
        left: "flex-row-reverse",
        right: "flex-row",
    };

    const labelSpacings = {
        top: {
            spacing: "space-y-2",
            nonSpacing: "",
        },
        bottom: {
            spacing: "space-y-2",
            nonSpacing: "",
        },
        left: {
            spacing: "space-x-2",
            nonSpacing: "",
        },
        right: {
            spacing: "space-x-2",
            nonSpacing: "",
        },
    };

    const sizes = {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
        xl: "h-10 w-10",
        xxl: "h-14 w-14",
    };

    const scheme2dKeys = checked ? "checked" : "notChecked";
    const labelSpacingKey = labelSpacing ? "spacing" : "non-Spacing";

    return (
        <label
            className={`inline-flex items-center ${labelDirections[labelDirection]} ${labelSpacings[labelDirection][labelSpacingKey]} ${className}`}
            ref={wrapperRef}
            {...wrapperProps}
        >
            <input
                checked={checked}
                className="absolute opacity-0 h-0 w-0"
                type="checkbox"
                ref={ref}
                value={value}
                {...props}
            />
            <CheckIcon
                checked={checked}
                className={`transition ${sizes[size]} rounded ${
                    checked ? "border-0" : "border-2 border-solid"
                } ${schemes[scheme][scheme2dKeys]}`}
            />
            {label && <span>{label}</span>}
        </label>
    );
});

function CheckIcon({ checked, ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={checked ? 2 : 0}
                d="M5 13l4 4L19 7"
            />
        </svg>
    );
}

CheckIcon.propTypes = {
    ...CheckIcon.propTypes,
    checked: PropTypes.bool.isRequired,
};

Checkbox.propTypes = {
    ...Checkbox.propTypes,
    checked: PropTypes.bool,
    scheme: PropTypes.oneOf(["primary", "secondary", "red", "green", "yellow"]),
    "wrapper-props": PropTypes.object,
    "wrapper-ref": PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    size: PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"]),
    value: PropTypes.any,
    label: PropTypes.string,
    "label-direction": PropTypes.oneOf(["top", "left", "right", "bottom"]),
    "label-spacing": PropTypes.bool,
};

export default Checkbox;
