import clsx from "clsx";
import React, { useEffect } from "react";
import { InputAddonOptions } from "../../../../types";
import { useStyleConfig } from "../../hooks/useStyleConfig";
import { forwardRef, HTMLRevindProps } from "../../utils/forward-ref";

export type InputAddonProps = HTMLRevindProps<"div"> & InputAddonOptions;

const InputAddon = forwardRef<InputAddonProps, "div">(function InputAddon(
    {
        variant = "outlined",
        scheme = "primary",
        size = "md",
        styleObj,
        left = true,
        right = false,
        ...props
    },
    ref,
) {
    const {
        default: { start, end },
        logical: { placement },
        schemes,
        variants,
        sizes,
        variantPlacements,
        variantSchemes,
        variantSizes,
    } = useStyleConfig("InputAddon", styleObj);

    const placementKey = left ? "left" : "right";

    useEffect(() => {
        if (left && right)
            throw new TypeError("[revind]: both left & right placements can't be true");
        else if (!left && !right)
            throw new TypeError("[revind]: both left & right placements can't be false");
    }, [left, right]);

    return (
        <div
            {...props}
            className={clsx(
                start,
                variants[variant],
                schemes[scheme],
                placement[placementKey],
                sizes[size],
                variantPlacements[variant][placementKey],
                variantSchemes[variant]?.[scheme],
                variantSizes[variant]?.[size],
                end,
            )}
            ref={ref}
        />
    );
});

export default InputAddon;
