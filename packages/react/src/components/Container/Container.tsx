import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import { ContainerOptions } from "@revind/types";
import { useTheme } from "../../hooks/useTheme";
import { forwardRef, HTMLRevindProps } from "../../utils/forward-ref";
import { useStyleConfig } from "../../hooks/useStyleConfig";

export type ContainerProps = HTMLRevindProps<"div"> & ContainerOptions;

export const Container = forwardRef<ContainerProps, "div">(function Container(
    {
        center: isCenter = false,
        gutters: isGutters = false,
        fixed: isFixed = false,
        scheme = "primary",
        variant = "regular",
        "max-width": maxWidth = "lg",
        elevation = "md",
        border = "sm",
        rounded: isRounded,
        className = "",
        children,
        styleObj,
        ...props
    },
    ref,
) {
    if (scheme === "secondary" && isRounded === undefined) {
        isRounded = true;
    }

    const {
        default: { start, end },
        "max-widths": maxWidths,
        conditionals: { center, fixed, gutters, rounded },
        elevations,
        schemes,
        variantBorders,
        variantElevations,
        variantSchemes,
        variants,
        borders,
    } = useStyleConfig("Container", styleObj);

    return (
        <div
            ref={ref}
            className={clsx(
                start,
                {
                    [fixed]: fixed,
                    [center]: isCenter,
                    [gutters]: isGutters,
                    [rounded]: isRounded,
                },
                maxWidth && maxWidths[maxWidth],
                variants[variant],
                schemes[scheme],
                borders[border],
                elevations[elevation],
                variantSchemes?.[variant]?.[scheme],
                variantBorders[variant][border],
                variantElevations[variant][elevation],
                end,
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
    scheme: PropTypes.oneOf<ContainerOptions["scheme"]>(["primary", "secondary"]),
    variant: PropTypes.oneOf<ContainerOptions["variant"]>([
        "elevated",
        "regular",
        "bordered",
    ]),
    gutters: PropTypes.bool,
    center: PropTypes.bool,
    "max-width": PropTypes.oneOf<ContainerOptions["max-width"]>([
        "sm",
        "md",
        "lg",
        "xl",
        false,
    ]),
    elevation: PropTypes.oneOf<ContainerOptions["elevation"]>([
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
    ]),
    border: PropTypes.oneOf<ContainerOptions["border"]>(["sm", "md", "lg", "xl"]),
    rounded: PropTypes.bool,
};
