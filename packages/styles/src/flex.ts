import { FlexStyleObj } from "@revind/types";

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
