import PropTypes from "prop-types";
import React, { forwardRef } from "react";

function Text(
    {
        scheme = "regular",
        variant = "body1",
        inline = false,
        align = "left",
        wrap = true,
        "bottom-margin": bottomMargin = true,
        className = "",
        children,
        ...props
    },
    ref,
) {
    const Component = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        sub1: "h6",
        sub2: "h6",
        body1: "p",
        body2: "p",
        caption: "span",
        overline: "span",
    }[variant];

    const variants = {
        h1: "font-light text-8xl leading-tight",
        h2: "font-light text-6xl leading-tight",
        h3: "font-normal text-5xl leading-tight",
        h4: "font-normal text-3xl leading-tight",
        h5: "font-norma text-2xl leading-snug",
        h6: "font-medium text-xl leading-normal",
        body1: "font-normal text-base leading-snug",
        body2: "font-normal text-sm leading-snug",
        sub1: "font-normal text-base leading-relaxed",
        sub2: "font-semibold text-sm leading-snug",
        caption: "font-normal text-xs leading-relaxed",
        overline: "font-normal text-xs leading-loose uppercase",
    };

    const schemes = {
        primary: "text-primary dark:text-primary-dark",
        secondary: "text-secondary dark:text-secondary-dark",
        red: "text-red-600 dark:text-red-500",
        green: "text-green-600 dark:text-green-500",
        yellow: "text-yellow-400 dark:text-yellow-300",
        inverted: "text-gray-100 dark:text-gray-800",
        regular: "text-gray-800 dark:text-gray-100",
    };

    const alignments = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
        justify: "text-justify",
    };

    return (
        <Component
            ref={ref}
            className={`${schemes[scheme]} ${variants[variant]} ${className} ${
                inline ? "inline" : "block"
            } ${
                wrap
                    ? "overflow-clip"
                    : "overflow-ellipsis overflow-hidden whitespace-nowrap"
            } ${alignments[align]} ${bottomMargin ? "mb-1" : ""}`}
            {...props}
        >
            {children}
        </Component>
    );
}

Text.propTypes = {
    ...Text.propTypes,
    variant: PropTypes.oneOf([
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "body1",
        "body2",
        "sub1",
        "sub2",
        "caption",
        "overline",
    ]),
    align: PropTypes.oneOf(["left", "center", "right", "justify"]),
    scheme: PropTypes.oneOf([
        "primary",
        "secondary",
        "red",
        "green",
        "yellow",
        "regular",
        "inverted",
    ]),
    inline: PropTypes.bool,
    wrap: PropTypes.bool,
    "bottom-margin": PropTypes.bool,
};

export default forwardRef(Text);
