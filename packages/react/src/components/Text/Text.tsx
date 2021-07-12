import clsx from "clsx";
import PropTypes from "prop-types";
import React, { forwardRef, HTMLProps } from "react";
import { useTheme } from "../../hooks/useTheme";

export type TextElement = HTMLParagraphElement | HTMLSpanElement | HTMLHeadingElement;

export interface TextProps extends Omit<HTMLProps<TextElement>, "wrap" | "ref"> {
    variant?:
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6"
        | "body1"
        | "body2"
        | "sub1"
        | "sub2"
        | "caption"
        | "overline";
    align?: "left" | "center" | "right" | "justify";
    scheme?:
        | "primary"
        | "secondary"
        | "red"
        | "green"
        | "yellow"
        | "regular"
        | "inverted";
    inline?: boolean;
    wrap?: boolean;
    "bottom-margin"?: boolean;
}

export const Text = forwardRef<TextElement, TextProps>(function Text(
    {
        scheme = "regular",
        variant = "body1",
        inline: isInline = false,
        align = "left",
        wrap: isWrap = true,
        "bottom-margin": isBottomMargin = true,
        className = "",
        children,
        ...props
    },
    ref,
) {
    const {
        styleObjects: {
            Text: {
                default: { start, end },
                conditionals: { bottomMargin, inline, noWrap, wrap },
                variantSchemes,
                variants,
                schemes,
                alignments,
                ...styleObj
            },
        },
    } = useTheme();
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
    }[variant] as any;

    return (
        <Component
            ref={ref}
            className={clsx(
                start,
                variants[variant],
                schemes[scheme],
                variantSchemes?.[variant]?.[scheme],
                alignments[align],
                {
                    [inline]: isInline,
                    [bottomMargin]: isBottomMargin,
                },
                wrap ? wrap : noWrap,
                end,
                className,
            )}
            {...props}
        >
            {children}
        </Component>
    );
});

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
