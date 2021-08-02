import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import { HiddenOptions } from "@revind/types";
import { useTheme } from "../../hooks/useTheme";
import { forwardRef, HTMLRevindProps } from "../../utils/forward-ref";
import { useStyleConfig } from "../../hooks/useStyleConfig";

export type HiddenProps = HTMLRevindProps<"div"> & HiddenOptions;

/**
 * Hides any component passed as children inside of it.
 * It can hide them based on responsiveness & different user input states.
 * Responsiveness is mobile-first thus hides the components on breakpoint
 * size & above
 *
 * Using multiple breakpoints isn't supported
 */

export const Hidden = forwardRef<HiddenProps, "div">(function Hidden(
    {
        sm,
        md,
        lg,
        xl,
        "2xl": xxl,
        hover,
        active,
        focus,
        all = true,
        className,
        children,
        styleObj,
        ...props
    },
    ref,
) {
    const { states: statesRaw } = useStyleConfig("Hidden", styleObj);

    const states = Object.entries({ all, sm, md, lg, xl, xxl, hover, active, focus })
        .map(([key, value]) => {
            return { [key]: value ? key : "nothing" };
        })
        .reduce((acc, back) => ({ ...acc, ...back })) as {
        [key: string]: keyof typeof statesRaw;
    };

    return (
        <div
            ref={ref}
            className={clsx(
                statesRaw[states.sm],
                statesRaw[states.md],
                statesRaw[states.lg],
                statesRaw[states.xl],
                statesRaw[states["2xl"]],
                statesRaw[states.hover],
                statesRaw[states.active],
                statesRaw[states.focus],
                statesRaw[states.all],
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
});

Hidden.propTypes = {
    ...Hidden.propTypes,
    all: PropTypes.bool,
    sm: PropTypes.bool,
    md: PropTypes.bool,
    lg: PropTypes.bool,
    xl: PropTypes.bool,
    "2xl": PropTypes.bool,
    hover: PropTypes.bool,
    active: PropTypes.bool,
    focus: PropTypes.bool,
};
