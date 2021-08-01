import { TextStyleObj } from "@revind/types";

export const textStyleObj: TextStyleObj = {
    default: {},
    variants: {
        h1: "font-light text-8xl leading-tight",
        h2: "font-light text-6xl leading-tight",
        h3: "font-normal text-5xl leading-tight",
        h4: "font-normal text-3xl leading-tight",
        h5: "font-norma text-2xl leading-snug",
        h6: "font-medium text-xl leading-normal",
        body1: "font-normal text-base leading-snug",
        body2: "font-normal text-sm leading-snug",
        sub1: "font-normal text-base leading-relaxed",
        sub2: "font-semibold text-sm leading-snug",
        caption: "font-normal text-xs leading-relaxed",
        overline: "font-normal text-xs leading-loose uppercase",
    },
    schemes: {
        primary: "text-primary dark:text-primary-dark",
        secondary: "text-secondary dark:text-secondary-dark",
        red: "text-red dark:text-red-dark",
        green: "text-green dark:text-green-dark",
        yellow: "text-yellow dark:text-yellow-dark",
        inverted: "text-regular-dark dark:text-regular",
        regular: "text-regular dark:text-regular-dark",
    },
    variantSchemes: {},
    alignments: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
        justify: "text-justify",
    },
    conditionals: {
        inline: "inline",
        wrap: "overflow-clip",
        noWrap: "overflow-ellipsis overflow-hidden whitespace-nowrap",
        bottomMargin: "mb-1",
    },
};
