export interface FlexOptions {
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

export interface FlexboxDirection {
    readonly row: string;
    readonly column: string;
    readonly "row-reverse": string;
    readonly "column-reverse": string;
}
export interface FlexboxWrap {
    readonly wrap: string;
    readonly "no-wrap": string;
    readonly "wrap-reverse": string;
}

interface FlexboxCoordinateAlignments {
    readonly center: string;
    readonly start: string;
    readonly end: string;
    readonly between: string;
    readonly around: string;
    readonly evenly: string;
    readonly stretch: string;
    readonly baseline: string;
}

export type FlexboxAlign = Omit<FlexboxCoordinateAlignments, "around" | "between" | "evenly">;

export type FlexboxJustify = Omit<FlexboxCoordinateAlignments, "stretch" | "baseline">;

export interface FlexStyleObj {
    readonly default: string;
    readonly direction: FlexboxDirection;
    readonly wrap: FlexboxWrap;
    readonly alignItems: FlexboxAlign;
    readonly justifyContent: FlexboxJustify;
    readonly alignContent: FlexboxJustify;
    readonly inline: string;
}

