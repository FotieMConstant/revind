<template>
    <div
        class=""
        :class="`${inline ? 'inline-flex' : 'flex'} ${dirRaw[direction]} ${
            wrapRaw[wrap]
        } ${alignItemsRaw[alignItems]} ${justifyContentRaw[justifyContent]} ${
            alignContentRaw[alignContent]
        } ${$props.className}`"
        v-bind="$props"
    >
        <slot />
    </div>
</template>

<script>
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

export default {
    name: "Flex",
    props: {
        direction: {
            type: String,
            default: "row",
            validate: (val) =>
                ["column", "row", "row-reverse", "column-reverse"].includes(val),
        },
        wrap: {
            type: String,
            default: "no-wrap",
            validate: (val) => ["wrap", "no-wrap", "wrap-reverse"].includes(val),
        },
        justifyContent: {
            type: String,
            default: "start",
            validate: (val) =>
                ["center", "start", "end", "between", "around", "evenly"].includes(val),
        },
        alignContent: {
            type: String,
            default: "start",
            validate: (val) =>
                ["center", "start", "end", "between", "around", "evenly"].includes(val),
        },
        alignItems: {
            type: String,
            default: "start",
            validate: (val) =>
                ["center", "start", "end", "stretch", "baseline"].includes(val),
        },
        inline: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            dirRaw,
            wrapRaw,
            alignItemsRaw,
            justifyContentRaw,
            alignContentRaw,
        };
    },
};
</script>
