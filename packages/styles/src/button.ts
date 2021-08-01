import { ButtonStyleObj } from "@revind/types";

export const buttonStyleObj: ButtonStyleObj = {
    default: {
        start: "cursor-pointer transition-all select-none focus:ring focus:ring-opacity-50",
        end: "disabled:bg-gray-200 dark:disabled:bg-gray-500 disabled:cursor-not-allowed disabled:text-gray-400 focus:outline-none",
    },
    conditionals: {
        rounded: "rounded",
        margin: "m-1",
        fullWidth: "w-full block",
    },
    schemes: {
        primary: "focus:ring-primary",
        secondary: "focus:ring-secondary",
        red: "focus:ring-red",
        green: "focus:ring-green",
        yellow: "focus:ring-yellow",
        blue: "focus:ring-blue",
        gray: "focus:ring-gray",
        orange: "focus:ring-orange",
        teal: "focus:ring-teal",
        cyan: "focus:ring-cyan",
        purple: "focus:ring-purple",
        pink: "focus:ring-pink",
        indigo: "focus:ring-indigo",
    },
    variants: {
        filled: "text-white filter hover:brightness-95 active:brightness-105",
        outlined:
            "border border-solid bg-opacity-0 dark:bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-10 dark:hover:bg-opacity-20 dark:active:bg-opacity-10",
        minimal:
            "bg-opacity-0 dark:bg-opacity-0 hover:bg-opacity-20 dark:hover:bg-opacity-20 active:bg-opacity-10 dark:active:bg-opacity-10",
    },
    sizes: {
        sm: "p-1",
        md: "p-2",
        lg: "p-4",
        xl: "p-6",
        "2xl": "p-8",
    },
    variantSchemes: {
        filled: {
            primary: "bg-primary dark:bg-primary-dark",
            secondary: "bg-secondary dark:bg-secondary-dark",
            red: "bg-red dark:bg-red-dark",
            green: "bg-green dark:bg-green-dark",
            yellow: "bg-yellow dark:bg-yellow-dark",
            blue: "bg-blue dark:bg-blue-dark",
            gray: "bg-gray dark:bg-gray-dark",
            orange: "bg-orange dark:bg-orange-dark",
            teal: "bg-teal dark:bg-teal-dark",
            cyan: "bg-cyan dark:bg-cyan-dark",
            purple: "bg-purple dark:bg-purple-dark",
            pink: "bg-pink dark:bg-pink-dark",
            indigo: "bg-indigo dark:bg-indigo-dark",
        },
        outlined: {
            primary:
                "border-primary dark:border-primary-dark text-primary dark:text-primary-dark bg-primary dark:bg-primary-dark",
            secondary:
                "border-secondary dark:border-secondary-dark text-secondary dark:text-secondary-dark bg-secondary dark:bg-secondary-dark",
            red: "border-red dark:border-red-dark text-red dark:text-red-dark bg-red dark:bg-red-dark",
            green: "border-green dark:border-green-dark text-green dark:text-green-dark bg-green dark:bg-green-dark",
            yellow: "border-yellow dark:border-yellow-dark text-yellow dark:text-yellow-dark bg-yellow dark:bg-yellow-dark",
            blue: "border-blue dark:border-blue text-blue dark:text-blue-dark bg-blue dark:bg-blue-dark",
            gray: "border-gray dark:border-gray text-gray dark:text-gray-dark bg-gray dark:bg-gray-dark",
            orange: "border-orange dark:border-orange text-orange dark:text-orange-dark bg-orange dark:bg-orange-dark",
            teal: "border-teal dark:border-teal text-teal dark:text-teal-dark bg-teal dark:bg-teal-dark",
            cyan: "border-cyan dark:border-cyan text-cyan dark:text-cyan-dark bg-cyan dark:bg-cyan-dark",
            purple: "border-purple dark:border-purple text-purple dark:text-purple-dark bg-purple dark:bg-purple-dark",
            pink: "border-pink dark:border-pink text-pink dark:text-pink-dark bg-pink dark:bg-pink-dark",
            indigo: "border-indigo dark:border-indigo text-indigo dark:text-indigo-dark bg-indigo dark:bg-indigo-dark",
        },
        minimal: {
            primary:
                "text-primary dark:text-primary-dark bg-primary dark:bg-primary-dark",
            secondary:
                "text-secondary dark:text-secondary-dark bg-secondary dark:bg-secondary-dark",
            red: "text-red dark:text-red-dark bg-red dark:bg-red-dark",
            green: "text-green dark:text-green-dark bg-green dark:bg-green-dark",
            yellow: "text-yellow dark:text-yellow-dark bg-yellow dark:bg-yellow-dark",
            blue: "text-blue dark:text-blue-dark bg-blue dark:bg-blue-dark",
            gray: "text-gray dark:text-gray-dark bg-gray dark:bg-gray-dark",
            orange: "text-orange dark:text-orange-dark bg-orange dark:bg-orange-dark",
            teal: "text-teal dark:text-teal-dark bg-teal dark:bg-teal-dark",
            cyan: "text-cyan dark:text-cyan-dark bg-cyan dark:bg-cyan-dark",
            purple: "text-purple dark:text-purple-dark bg-purple dark:bg-purple-dark",
            pink: "text-pink dark:text-pink-dark bg-pink dark:bg-pink-dark",
            indigo: "text-indigo dark:text-indigo-dark bg-indigo dark:bg-indigo-dark",
        },
    },
    variantSizes: {},
    sub: {
        startIcon: {
            default: {
                start: "mr-1 inline-block align-middle",
                end: "",
            },
        },
        endIcon: {
            default: {
                start: "ml-1 inline-block align-middle",
                end: "",
            },
        },
    },
};
