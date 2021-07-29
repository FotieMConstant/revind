import React from "react";
import PropTypes from "prop-types";
import { HTMLRevindProps, forwardRef } from "../../utils/forward-ref";
import clsx from "clsx";
import { InputLabelOptions } from "@revind/types";
import { useTheme } from "../../hooks/useTheme";
export type InputLabelProps = HTMLRevindProps<"label"> & InputLabelOptions;

const InputLabel = forwardRef<InputLabelProps, "label">(function InputLabel(
    {
        variant = "material-floating",
        scheme = "secondary",
        size = "md",
        inputVariant,
        children,
        ...props
    },
    ref,
) {
    const {
        styleObjects: {
            InputLabel: {
                default: { start, end },
                variantInputVariant,
                schemes,
                sizes,
                variantSchemes,
                variantSizes,
                variants,
            },
        },
    } = useTheme();

    return (
        <label
            className={clsx(
                start,
                schemes[scheme],
                variantInputVariant[variant][inputVariant],
                sizes[size],
                variants[variant],
                variantSizes?.[variant]?.[size],
                variantSchemes?.[variant]?.[scheme],
                end,
            )}
            ref={ref}
            {...props}
        >
            {children}
            {props["aria-required"] && (
                <span className="text-red dark:text-red-dark">*</span>
            )}
        </label>
    );
});

InputLabel.propTypes = {
    variant: PropTypes.oneOf<InputLabelProps["variant"]>([
        "material-floating",
        "material-static",
        "top",
        "left",
    ]),
    scheme: PropTypes.oneOf<InputLabelProps["scheme"]>([
        "primary",
        "secondary",
        "blue",
        "cyan",
        "gray",
        "indigo",
        "orange",
        "pink",
        "purple",
        "red",
        "teal",
        "yellow",
    ]),
    size: PropTypes.oneOf<InputLabelProps["size"]>(["2xl", "xl", "lg", "md", "sm", "xs"]),
    inputVariant: PropTypes.oneOf<InputLabelProps["inputVariant"]>([
        "filled",
        "minimal",
        "outlined",
    ]),
};

export { InputLabel };
