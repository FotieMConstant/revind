export interface FlexboxDirection {
    row: string;
    column: string;
    "row-reverse": string;
    "column-reverse": string;
}
export interface FlexboxWrap {
    wrap: string;
    "no-wrap": string;
    "wrap-reverse": string;
}

interface FlexboxJustifyAlign {
    center: string;
    start: string;
    end: string;
    between: string;
    around: string;
    evenly: string;
    stretch: string;
    baseline: string;
}

export type FlexboxAlign = Omit<FlexboxJustifyAlign, "around" | "between" | "evenly">;

export type FlexboxJustify = Omit<FlexboxJustifyAlign, "stretch" | "baseline">;

export interface FlexStyleObj {
    default: string;
    direction: FlexboxDirection;
    wrap: FlexboxWrap;
    alignItems: FlexboxAlign;
    justifyContent: FlexboxJustify;
    alignContent: FlexboxJustify;
    inline: string;
}

export const flexStyleObj: FlexStyleObj = {
    default: "flex",
    direction: {
        row: "flex-row",
        column: "flex-col",
        "row-reverse": "flex-row-reverse",
        "column-reverse": "flex-col-reverse",
    },
    wrap: {
        wrap: "flex-wrap",
        "no-wrap": "flex-nowrap",
        "wrap-reverse": "wrap-reverse",
    },
    alignItems: {
        center: "items-center",
        start: "items-start",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline",
    },
    justifyContent: {
        center: "justify-center",
        start: "justify-start",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-around",
    },

    alignContent: {
        center: "content-center",
        start: "content-start",
        end: "content-end",
        between: "content-between",
        around: "content-around",
        evenly: "content-around",
    },
    inline: "inline-flex",
};
