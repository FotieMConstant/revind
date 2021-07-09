export interface TextStyleObj {
    defaultStart: string;
    variants: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        body1: string;
        body2: string;
        sub1: string;
        sub2: string;
        caption: string;
        overline: string;
    };
    schemes: {
        primary: string;
        secondary: string;
        red: string;
        green: string;
        yellow: string;
        inverted: string;
        regular: string;
    };
    alignments: {
        left: string;
        center: string;
        right: string;
        justify: string;
    };
    inline: string;
    wrap: string;
    noWrap: string;
    bottomMargin: string;
    defaultEnd: string;
}
export const textStyleObj: TextStyleObj = {
    defaultStart: "",
    defaultEnd: "",
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
        inverted: "text-gray-100 dark:text-gray-800",
        regular: "text-gray-800 dark:text-gray-100",
    },
    alignments: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
        justify: "text-justify",
    },
    inline: "inline",
    wrap: "overflow-clip",
    noWrap: "overflow-ellipsis overflow-hidden whitespace-nowrap",
    bottomMargin: "mb-1",
};
