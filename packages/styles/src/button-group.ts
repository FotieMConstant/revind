import { ButtonGroupStyleObj } from "@revind/types";

export const buttonGroupStyleObj: ButtonGroupStyleObj = {
    default: {
        start: "",
        end: "",
    },
    borderColors: {
        primary: "border-primary dark:border-primary-dark",
        secondary: "border-secondary dark:border-secondary-dark",
        red: "border-red dark:border-red-dark",
        green: "border-green dark:border-green-dark",
        yellow: "border-yellow dark:border-yellow-dark",
        blue: "",
        cyan: "",
        gray: "",
        indigo: "",
        orange: "",
        pink: "",
        purple: "",
        teal: "",
    },
    directions: {
        row: "first:rounded-l last:rounded-r",
        column: "first:rounded-t last:rounded-b",
    },
    variantDirections: {
        filled: {
            row: "mx-[0.5px] first:ml-0 last:mr-0",
            column: "my-[0.5px] first:mt-0 last:mb-0",
        },
        outlined: {
            row: "first:border-r-0 last:border-l-0",
            column: "first:border-b-0 last:border-t-0",
        },
        minimal: {
            row: "border-l border-r first:border-none last:border-none",
            column: "border-t border-b first:border-none last:border-none",
        },
    },
};
