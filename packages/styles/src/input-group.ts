import { InputGroupStyleObj } from "@revind/types";
import { inputStyleObj } from "./input";

export const inputGroupStyleObj: InputGroupStyleObj = {
    default: {
        start: "inline-flex items-center relative",
        end: "",
    },
    conditionals: {
        margin: inputStyleObj.conditionals.margin,
        "full-width": "flex w-full",
    },
    sub: {
        input: {
            default: {
                start: "",
                end: "",
            },
            variants: {},
            schemes: {},
            sizes: {},
            variantSizes: {},
            inputAddonVariants: {
                floating: "focus:ring-0",
            },
            logical: {
                placement: {
                    left: "rounded-l-none",
                    right: "rounded-r-none",
                    both: "rounded-l-none rounded-r-none",
                },
                placementInputAddonVariant: {
                    static: {},
                    floating: {
                        left: "border-l-0",
                        right: "border-r-0",
                        both: "border-l-0 border-r-0",
                    },
                },
            },
        },
    },
};
