import { InputStyleObj } from "@revind/types";

export const inputStyleObj: InputStyleObj = {
    default: {
        start: "dark:border-gray-600 outline-none text-black dark:text-white  placeholder-gray-500 border-gray-300",
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
    variantSchemes: {},
    variantSizes: {},
    sub: {
        wrapper: {
            default: {
                start: "transition-colors relative text-gray-500",
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
        label: {
            default: {
                start: "overflow-ellipsis whitespace-nowrap appearance-none transition-all transform select-none absolute",
            },
            conditionals: {
                nonFocusedText: "text-gray-500",
            },
        },
    },
    logical: {
        variantStates: {
            outlined: {
                focused:
                    "-top-2 text-xs bg-container-primary dark:bg-container-primary-dark left-2",
                default: "left-2 top-1/2 -translate-y-1/2 text-gray-500",
            },
            filled: {
                focused: "-top-2 text-xs left-2",
                default: "left-2 top-1/2 -translate-y-1/2 text-gray-500",
            },
            minimal: {
                focused: "-top-2 text-xs",
                default: "top-1/2 -translate-y-1/2 text-gray-500",
            },
        },
    },
    conditionals: {
        "full-width": "w-full",
        margin: "mx-1 mb-2",
        floatingPlaceholder: "placeholder-opacity-0 focus:placeholder-opacity-100",
    },
};
