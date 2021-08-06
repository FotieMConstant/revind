import { InputLabelStyleObj } from "@revind/types";

export const inputLabelStyleObj: InputLabelStyleObj = {
    default: {
        start: "overflow-ellipsis whitespace-nowrap peer-focus:text-inherit transition-all",
    },
    variants: {
        "material-floating":
            "appearance-none transform select-none absolute cursor-text -top-2 left-2 translate-y-0 text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:translate-y-0 peer-focus:text-xs peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-500",
        "material-static":
            "appearance-none transform select-none absolute cursor-text -top-2 left-2 text-xs",
        left: "pr-2",
    },
    schemes: {
        primary: "text-primary dark:text-primary-dark",
        secondary: "text-secondary dark:text-secondary-dark",
        red: "text-red dark:text-red-dark",
        green: "text-green dark:text-green-dark",
        yellow: "text-yellow dark:text-yellow-dark",
        orange: "text-orange dark:text-orange-dark",
        teal: "text-teal dark:text-teal-dark",
        blue: "text-blue dark:text-blue-dark",
        cyan: "text-cyan dark:text-cyan-dark",
        indigo: "text-indigo dark:text-indigo-dark",
        pink: "text-pink dark:text-pink-dark",
        purple: "text-purple dark:text-purple-dark",
        gray: "text-gray dark:text-gray-dark",
    },
    sizes: {},
    variantInputVariant: {
        "material-floating": {
            outlined:
                "bg-container-primary dark:bg-container-secondary-dark peer-focus:bg-container-primary dark:peer-focus:bg-container-secondary-dark peer-placeholder-shown:bg-transparent dark:peer-placeholder-shown:bg-transparent",
            filled: "-top-1 peer-focus:-top-1",
        },
        "material-static": {
            outlined: "bg-container-primary dark:bg-container-secondary-dark",
        },
        left: {},
        top: {},
    },
    variantSchemes: {},
    variantSizes: {},
};
