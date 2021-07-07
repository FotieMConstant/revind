import PropTypes from "prop-types";
import React, { DetailedHTMLProps, forwardRef, HTMLAttributes } from "react";

export interface FlexProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * set the direction of the `Flex` container
     * @default row
     */
    direction?: "column" | "row" | "row-reverse" | "column-reverse";
    /**
     * wraps the content to new line if set to wrap='wrap' or vice versa
     * if not. wrap-reverse will wrap the content from the opposite site
     * @default no-wrap
     */
    wrap?: "wrap" | "no-wrap" | "wrap-reverse";
    /**
     * css `justify-content`
     */
    justifyContent?: "center" | "start" | "end" | "between" | "around" | "evenly";
    /**
     * css `align-content`
     */
    alignContent?: "center" | "start" | "end" | "between" | "around" | "evenly";
    /**
     * css `align-items`
     */
    alignItems?: "center" | "start" | "end" | "stretch" | "baseline";
    /**
     * uses `inline-flex` instead of `flex` as display for `Flex`
     * @default false
     */
    inline?: boolean;
}

/**
 * Flex is a css flexbox wrapper. Its a core level component & shared
 * across multiple components. It supports both block & inline
 * implementation
 * @example
 * ```jsx
 * <Flex inline direction="column" justifyContent="center" alignItems="center">
 *    <button>Button 1</button>
 *    <button>Button 2</button>
 *    <button>Button 3</button>
 * </Flex>
 * ```
 */
export const Flex = forwardRef<HTMLDivElement, FlexProps>(function Flex(
    {
        direction = "row",
        wrap = "no-wrap",
        alignItems = "start",
        justifyContent = "start",
        alignContent = "start",
        inline = false,
        children,
        className,
        ...props
    },
    ref,
) {
    let dirRaw = {
        row: "flex-row",
        column: "flex-col",
        "row-reverse": "flex-row-reverse",
        "column-reverse": "flex-col-reverse",
    };
    let wrapRaw = {
        wrap: "flex-wrap",
        "no-wrap": "flex-nowrap",
        "wrap-reverse": "wrap-reverse",
    };
    let alignItemsRaw = {
        center: "items-center",
        start: "items-start",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline",
    };
    let justifyContentRaw = {
        center: "justify-center",
        start: "justify-start",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-around",
    };

    let alignContentRaw = {
        center: "content-center",
        start: "content-start",
        end: "content-end",
        between: "content-between",
        around: "content-around",
        evenly: "content-around",
    };

    return (
        <div
            ref={ref}
            className={`${inline ? "inline-flex" : "flex"} ${dirRaw[direction]} ${
                wrapRaw[wrap]
            } ${alignItemsRaw[alignItems]} ${justifyContentRaw[justifyContent]} ${
                alignContentRaw[alignContent]
            } ${className}`}
            {...props}
        >
            {children}
        </div>
    );
});

export const flexProps = {
    direction: PropTypes.oneOf<FlexProps["direction"]>([
        "column",
        "row",
        "row-reverse",
        "column-reverse",
    ]),

    wrap: PropTypes.oneOf<FlexProps["wrap"]>(["wrap", "no-wrap", "wrap-reverse"]),

    justifyContent: PropTypes.oneOf<FlexProps["justifyContent"]>([
        "center",
        "start",
        "end",
        "between",
        "around",
        "evenly",
    ]),

    alignContent: PropTypes.oneOf<FlexProps["alignContent"]>([
        "center",
        "start",
        "end",
        "between",
        "around",
        "evenly",
    ]),

    alignItems: PropTypes.oneOf<FlexProps["alignItems"]>([
        "center",
        "start",
        "end",
        "stretch",
        "baseline",
    ]),

    inline: PropTypes.bool,
};

Flex.propTypes = flexProps;
