import { CheckboxStyleObj } from "@revind/types";

export const checkboxStyleObj: CheckboxStyleObj = {
    default: {
        start: "peer absolute opacity-0 h-0 w-0",
        end: "",
    },
    sub: {
        wrapper: {
            default: {
                start: "inline-flex items-center",
            },
            wrapperInputLabelVariant: {
                top: "inline-flex flex-col-reverse",
                left: "inline-flex items-center flex-row-reverse",
                right: "inline-flex items-center"
            },
        },
        icon: {
            default: {
                start: "transition rounded",
            },
            logical: {
                states: {
                    checked: "border-0",
                    default: "border-2 border-solid",
                },
            },
            schemeState: {
                primary: {
                    checked: "bg-primary dark:bg-primary-dark text-white",
                    default:
                        "border-primary dark:border-primary-dark text-primary dark:text-primary-dark",
                },
                secondary: {
                    checked: "bg-secondary dark:bg-secondary-dark text-white",
                    default:
                        "border-secondary dark:border-secondary-dark text-secondary dark:text-secondary-dark",
                },
                red: {
                    checked: "bg-red dark:bg-red-dark text-white",
                    default:
                        " border-red dark:border-red-dark text-red dark:text-red-dark",
                },
                green: {
                    checked: "bg-green dark:bg-green-dark text-white",
                    default:
                        " border-green dark:border-green-dark text-green dark:text-green-dark",
                },
                yellow: {
                    checked: "bg-yellow dark:bg-yellow-dark text-white",
                    default:
                        " border-yellow dark:border-yellow-dark text-yellow dark:text-yellow-dark",
                },
                blue: {},
                cyan: {},
                gray: {},
                indigo: {},
                orange: {},
                pink: {},
                purple: {},
                teal: {},
            },
            schemes: {},
            sizes: {
                sm: "h-4 w-4",
                md: "h-5 w-5",
                lg: "h-6 w-6",
                xl: "h-10 w-10",
                "2xl": "h-14 w-14",
            },
            variants: {},
            variantSchemes: {},
            variantSizes: {},
        },
        label: {
            default: {
                start: "text-regular dark:text-regular-dark peer-focus:text-regular dark:peer-focus:text-regular-dark",
            },
        },
    },
};
