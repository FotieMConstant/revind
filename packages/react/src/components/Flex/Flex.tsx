import PropTypes from "prop-types";
import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import clsx from "clsx";
import { useTheme } from "../../hooks/useTheme";

export interface FlexProps extends ComponentPropsWithoutRef<"div"> {
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
    const {
        styleObjects: { Flex: flexStyleObj },
    } = useTheme();

    return (
        <div
            ref={ref}
            className={clsx(
                flexStyleObj.default,
                { [flexStyleObj.inline]: inline },
                flexStyleObj.direction[direction],
                flexStyleObj.wrap[wrap],
                flexStyleObj.alignItems[alignItems],
                flexStyleObj.justifyContent[justifyContent],
                flexStyleObj.alignContent[alignContent],
            )}
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
