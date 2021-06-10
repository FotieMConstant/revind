import React from "react";
import PropTypes from "prop-types";

export default function Hidden({
    sm,
    md,
    lg,
    xl,
    xxl,
    hover,
    active,
    focus,
    all = true,
    children,
    ...props
}) {
    const states = Object.entries({ all, sm, md, lg, xl, xxl, hover, active, focus })
        .map(([key, value]) => {
            return { [key]: value ? key : "nothing" };
        })
        .reduce((acc, back) => ({ ...acc, ...back }));
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
}

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
