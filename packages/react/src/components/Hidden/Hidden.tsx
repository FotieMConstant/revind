import PropTypes from "prop-types";
import React, { forwardRef, HTMLProps } from "react";

export interface HiddenProps extends HTMLProps<HTMLDivElement> {
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
    { sm, md, lg, xl, xxl, hover, active, focus, all = true, children, ...props },
    ref,
) {
    const states = Object.entries({ all, sm, md, lg, xl, xxl, hover, active, focus })
        .map(([key, value]) => {
            return { [key]: value ? key : "nothing" };
        })
        .reduce((acc, back) => ({ ...acc, ...back })) as {
        [key: string]: keyof typeof statesRaw;
    };
    const statesRaw = {
        nothing: "",
        all: "hidden invisible opacity-0",
        sm: "sm:hidden sm:invisible sm:opacity-0",
        md: "md:hidden md:invisible md:opacity-0",
        lg: "lg:hidden lg:invisible lg:opacity-0",
        xl: "xl:hidden xl:invisible xl:opacity-0",
        xxl: "2xl:hidden 2xl:invisible 2xl:opacity-0",
        hover: "hover:hidden hover:invisible hover:opacity-0",
        active: "active:hidden active:invisible active:opacity-0",
        focus: "focus:hidden focus:invisible focus:opacity-0",
    };
    return (
        <div
            ref={ref}
            className={`${statesRaw[states.sm]} ${statesRaw[states.md]} ${
                statesRaw[states.lg]
            } ${statesRaw[states.xl]} ${statesRaw[states.xxl]} ${
                statesRaw[states.hover]
            } ${statesRaw[states.active]} ${statesRaw[states.focus]} ${
                statesRaw[states.all]
            }`}
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
