import clsx from "clsx";
import PropTypes from "prop-types";
import React, { ComponentPropsWithoutRef, forwardRef, HTMLProps } from "react";
import { useTheme } from "../../hooks/useTheme";

export interface HiddenProps extends ComponentPropsWithoutRef<"div"> {
    /**
     * hides from sm & above
     */
    sm?: boolean;
    /**
     * hides from md & above
     */
    md?: boolean;
    /**
     * hides from lg & above
     */
    lg?: boolean;
    /**
     * hides from xl & above
     */
    xl?: boolean;
    /**
     * hides from 2xl & above
     */
    xxl?: boolean;
    /**
     * hides while hovering over the component or its children
     */
    hover?: boolean;
    /**
     * hides while clicking over the component or its children
     */
    active?: boolean;
    /**
     * hides while focusing over the component or its children
     */
    focus?: boolean;
    all?: boolean;
}

/**
 * Hides any component passed as children inside of it.
 * It can hide them based on responsiveness & different user input states.
 * Responsiveness is mobile-first thus hides the components on breakpoint
 * size & above
 *
 * Using multiple breakpoints isn't supported
 */

export const Hidden = forwardRef<HTMLDivElement, HiddenProps>(function Hidden(
    {
        sm,
        md,
        lg,
        xl,
        xxl,
        hover,
        active,
        focus,
        all = true,
        className,
        children,
        ...props
    },
    ref,
) {
    const {
        styleObjects: {
            Hidden: { states: statesRaw },
        },
    } = useTheme();

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
                statesRaw[states.xxl],
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
    xxl: PropTypes.bool,
    hover: PropTypes.bool,
    active: PropTypes.bool,
    focus: PropTypes.bool,
};
