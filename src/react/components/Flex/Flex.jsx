import React from "react";
import PropTypes from "prop-types";

export default function Flex({
    direction = "row",
    wrap = "no-wrap",
    alignItems = "items-starts",
    justifyContent = "justify-start",
    alignContent = "content-start",
    children,
    className,
    ...props
}) {
    let dirRaw = {
        row: "flex-row",
        column: "flex-col",
        "row-reverse": "flex-row-reverse",
        "column-reverse": "flex-col-reverse",
    };
    let wrapRaw = {
        wrap: "flex-wrap",
        "no-wrap": "",
        "wrap-reverse": "wrap-reverse"
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
        <div className={`flex ${dirRaw[direction]} ${wrapRaw[wrap]} ${alignItemsRaw[alignItems]} ${justifyContentRaw[justifyContent]} ${alignContentRaw[alignContent]} ${className}`} {...props}>
            {children}  
        </div>
    );
}

Flex.propTypes = {
    ...Flex.propTypes,
    direction: PropTypes.oneOf(["column", "row", "row-reverse", "column-reverse"]),
    wrap: PropTypes.oneOf(["wrap", "no-wrap", "wrap-reverse"]),
    justifyContent: PropTypes.oneOf(["center", "start", "end", "between","around", "evenly"]),
    alignContent: PropTypes.oneOf(["center", "start", "end", "between","around", "evenly"]),
    alignItems: PropTypes.oneOf(["center", "start", "end", "stretch", "baseline",]),
};