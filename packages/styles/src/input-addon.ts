import { InputAddonStyleObj } from "@revind/types";

export const inputAddonStyleObj: InputAddonStyleObj = {
    default: {
        start: "text-regular dark:text-regular-dark whitespace-nowrap",
        end: "",
    },
    variants: {
        outlined:
            "bg-container-secondary dark:bg-container-secondary-dark border border-gray-300 dark:border-gray-600",
        filled: "border-0 bg-gray-100 dark:bg-gray-800",
        minimal: "border-b border-gray-300 dark:border-gray-600",
    },
    schemes: {},
    sizes: {
        sm: "p-1",
        md: "p-2 text-md",
        lg: "p-4 text-xl",
        xl: "p-6 text-2xl",
    },
    variantPlacements: {
        filled: {},
        minimal: {},
        outlined: {
            left: "rounded-l border-r-0",
            right: "rounded-r border-l-0",
        },
    },
    variantSchemes: {},
    variantSizes: {},
    logical: {
        placement: {},
    },
};
