import clsx from "clsx";
import React from "react";
import { InputAddonOptions } from "../../../../types";
import { useStyleConfig } from "../../hooks/useStyleConfig";
import { ComponentIds } from "../../utils/component-ids";
import { forwardRef, HTMLRevindProps } from "../../utils/forward-ref";

export type InputAddonProps = HTMLRevindProps<"div"> & InputAddonOptions;

export const InputAddon = forwardRef<InputAddonProps, "div">(function InputAddon(
    {
        variant = "static",
        scheme = "primary",
        size = "md",
        inputVariant = "outlined",
        styleObj,
        ...props
    },
    ref,
) {
    const {
        default: { start, end },
        schemes,
        variants,
        inputVariants,
        variantInputVariants,
        sizes,
        variantSchemes,
        variantSizes,
    } = useStyleConfig("InputAddon", styleObj);

    return (
        <div
            {...props}
            className={clsx(
                start,
                variants[variant],
                schemes[scheme],
                inputVariants[inputVariant],
                variantInputVariants[variant][inputVariant],
                sizes[size],
                variantSchemes[variant]?.[scheme],
                variantSizes[variant]?.[size],
                end,
            )}
            ref={ref}
        />
    );
});

InputAddon.id = ComponentIds.InputAddon;
