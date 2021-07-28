import { InputLabelStyleObj } from "@revind/types";

export const inputLabelStyleObj: InputLabelStyleObj = {
    default: {
        start: "overflow-ellipsis whitespace-nowrap",
    },
    variants: {
        "material-floating":
            "appearance-none transition-all transform select-none absolute cursor-text left-2 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:-top-2 group-focus-within:left-2 group-focus-within:translate-y-0 group-focus-within:text-xs group-focus-within:text-inherit",
        "material-static":
            "appearance-none transition-all transform select-none absolute cursor-text -top-2 left-2 text-xs",
        left: "min-h-full bg-primary text-white",
    },
    schemes: {},
    sizes: {},
    variantInputVariant: {
        "material-floating": {
            outlined:
                "group-focus-within:bg-container-primary dark:group-focus-within:bg-container-secondary-dark",
        },
        "material-static": {
            outlined: "bg-container-primary dark:bg-container-secondary-dark",
        },
        left: {},
        right: {},
        top: {},
    },
    variantSchemes: {},
    variantSizes: {},
};
