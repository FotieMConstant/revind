import clsx from "clsx";
import PropTypes from "prop-types";
import React, { ReactElement, SVGProps, useEffect } from "react";
import { CheckboxOptions } from "../../../../types";
import { useTheme } from "../../hooks/useTheme";
import { forwardRef, HTMLRevindProps } from "../../utils/forward-ref";
import { uid } from "../../utils/uid";
import { InputLabel as CheckboxLabel, InputLabelProps } from "../Input/InputLabel";

export type CheckboxLabelProps = Omit<InputLabelProps, "variant" | "inputVariant"> & {
    variant: "top" | "left";
};

export type CheckboxProps = Omit<HTMLRevindProps<"input">, "size"> &
    CheckboxOptions<HTMLRevindProps<"div">, CheckboxLabelProps, CheckedIconProps>;

export const Checkbox = forwardRef<CheckboxProps, "input">(function Checkbox(
    {
        checked = false,
        scheme = "primary",
        size = "md",
        label,
        value,
        "label-props": labelProps = { variant: "left" },
        "wrapper-props": wrapperProps,
        "icon-props": iconProps,
        className = "",
        id,
        ...props
    },
    ref,
) {
    const {
        styleObjects: {
            Checkbox: {
                default: { start, end },
                sub: { wrapper, icon, label: labelStyle },
            },
        },
    } = useTheme();

    const stateKeys = checked ? "checked" : "default";

    useEffect(() => {
        if (["material-static", "material-floating"].includes(labelProps.variant)) {
            throw new TypeError(
                "[revind]: can't use `material-floating`/`material-static` for `CheckboxLabel`",
            );
        }
    }, [labelProps.variant]);

    const gid = id ?? uid();

    return (
        <div
            className={clsx(
                wrapper.default.start,
                wrapper.wrapperInputLabelVariant[labelProps.variant],
                wrapper.default.end,
            )}
            {...wrapperProps}
        >
            <input
                id={gid}
                checked={checked}
                className={clsx(start, end, className)}
                type="checkbox"
                ref={ref}
                value={value}
                {...props}
            />
            <CheckIcon
                checked={checked}
                className={clsx(
                    icon.default.start,
                    icon.schemes[scheme],
                    icon.sizes[size],
                    icon.logical.states[stateKeys],
                    icon.schemeState[scheme][stateKeys],
                    icon.default.end,
                )}
                {...iconProps}
            />
            {label && (
                <CheckboxLabel
                    htmlFor={gid}
                    className={clsx(labelStyle.default.start, labelStyle.default.end)}
                    {...labelProps}
                    inputVariant="filled"
                >
                    {label}
                </CheckboxLabel>
            )}
        </div>
    );
});

interface CheckedIconProps extends SVGProps<SVGSVGElement> {
    checked: boolean;
}

function CheckIcon({ checked, ...props }: CheckedIconProps): ReactElement {
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

Checkbox.propTypes = {
    ...Checkbox.propTypes,
    checked: PropTypes.bool,
    scheme: PropTypes.oneOf(["primary", "secondary", "red", "green", "yellow"]),
    "wrapper-props": PropTypes.object,
    size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl"]),
    value: PropTypes.any,
    label: PropTypes.string,
    "label-props": PropTypes.object,
};
