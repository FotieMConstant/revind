import PropTypes from "prop-types";
import React from "react";
import clsx from "clsx";
import { useTheme } from "../../hooks/useTheme";
import { forwardRef, HTMLRevindProps } from "../../utils/forward-ref";
import { FlexOptions } from "@revind/types";
import { useStyleConfig } from "../../hooks/useStyleConfig";

export type FlexProps = HTMLRevindProps<"div"> & FlexOptions;

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
export const Flex = forwardRef<FlexProps, "div">(function Flex(
    {
        direction = "row",
        wrap = "no-wrap",
        alignItems = "start",
        justifyContent = "start",
        alignContent = "start",
        inline = false,
        children,
        className,
        styleObj,
        ...props
    },
    ref,
) {
    const flexStyleObj = useStyleConfig("Flex", styleObj);

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
