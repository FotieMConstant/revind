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
            logical: {
                placement: {
                    addon: {
                        left: "rounded-l-none",
                        right: "rounded-r-none",
                        both: "rounded-l-none rounded-r-none",
                    },
                    element: {},
                },
            },
        },
    },
};
