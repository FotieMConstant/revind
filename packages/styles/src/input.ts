import { InputStyleObj } from "@revind/types";

export const inputStyleObj: InputStyleObj = {
    default: {
        start: "dark:border-gray-600 outline-none text-black dark:text-white  placeholder-gray-500 border-gray-300 inline-flex",
    },
    variants: {
        outlined: "border border-solid rounded bg-inherit",
        filled: "border-0 bg-gray-100 dark:bg-gray-800",
        minimal: "border-b border-solid bg-inherit",
    },
    schemes: {
        primary: "focus:border-primary dark:focus:border-primary-dark",
        secondary: "focus:border-secondary dark:focus:border-secondary-dark",
        red: "focus:border-red dark:focus:border-red-dark",
        green: "focus:border-green dark:focus:border-green-dark",
        yellow: "focus:border-yellow dark:focus:border-yellow-dark",
    },
    sizes: {
        sm: "p-1",
        md: "py-2 px-1 text-md",
        lg: "py-4 px-1 text-xl",
        xl: "py-6 px-1 text-2xl",
    },
    variantInputLabelVariant: {
        filled: {
            "material-floating": "placeholder-opacity-0 focus:placeholder-opacity-100",
        },
        minimal: {
            "material-floating": "placeholder-opacity-0 focus:placeholder-opacity-100",
        },
        outlined: {
            "material-floating": "placeholder-opacity-0 focus:placeholder-opacity-100",
        },
    },
    variantSchemes: {},
    variantSizes: {},
    sub: {
        wrapper: {
            default: {
                start: "transition-colors relative text-gray-500 bg-inherit",
            },
            conditionals: {
                "full-width": "flex",
            },
            schemes: {
                primary: "focus-within:text-primary",
                secondary: "focus-within:text-secondary",
                red: "focus-within:text-red",
                green: "focus-within:text-green",
                yellow: "focus-within:text-yellow",
            },
        },
    },
    conditionals: {
        "full-width": "w-full",
        margin: "mx-1 mb-2",
    },
};
