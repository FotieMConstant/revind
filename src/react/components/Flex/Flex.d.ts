import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";

declare interface FlexProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * set the direction of the `Flex` container
     * @default row
     */
    direction: "column" | "row" | "row-reverse" | "column-reverse";
    /**
     * wraps the content to new line if set to wrap='wrap' or vice versa
     * if not. wrap-reverse will wrap the content from the opposite site
     * @default no-wrap
     */
    wrap: "wrap" | "no-wrap" | "wrap-reverse";
    /**
     * css `justify-content`
     */
    justifyContent: "center" | "start" | "end" | "between" | "around" | "evenly";
    /**
     * css `align-content`
     */
    alignContent: "center" | "start" | "end" | "between" | "around" | "evenly";
    /**
     * css `align-items`
     */
    alignItems: "center" | "start" | "end" | "stretch" | "baseline";
    /**
     * uses `inline-flex` instead of `flex` as display for `Flex`
     * @default false
     */
    inline: boolean;
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
declare function Flex(props: FlexProps): ReactElement;
export default Flex;
