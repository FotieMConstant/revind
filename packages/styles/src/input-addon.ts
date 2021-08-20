import { InputAddonStyleObj } from "@revind/types";

export const inputAddonStyleObj: InputAddonStyleObj = {
    default: {
        start: "text-regular dark:text-regular-dark whitespace-nowrap",
        end: "",
    },
    variants: {},
    schemes: {},
    sizes: {
        sm: "p-1",
        md: "p-2 text-md",
        lg: "p-4 text-xl",
        xl: "p-6 text-2xl",
    },
    inputVariants: {
        outlined:
            "border border-gray-300 dark:border-gray-600 first:rounded-l last:rounded-r first:border-r-0 last:border-l-0",
        filled: "border-0 bg-gray-100 dark:bg-gray-800",
    },
    variantInputVariants: {
        static: {
            minimal: "border-b border-gray-300 dark:border-gray-600",
        },
        floating: {},
    },
    variantSchemes: {
        floating: {
            primary: "peer-focus:border-primary dark:peer-focus:border-primary-dark",
            secondary:
                "peer-focus:border-secondary dark:peer-focus:border-secondary-dark",
            red: "peer-focus:border-red dark:peer-focus:border-red-dark",
            green: "peer-focus:border-green dark:peer-focus:border-green-dark",
            yellow: "peer-focus:border-yellow dark:peer-focus:border-yellow-dark",
        },
    },
    variantSizes: {},
};
