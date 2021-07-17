import { ContainerStyleObj } from "@revind/types";

export const containerStyleObj: ContainerStyleObj = {
    default: {},
    "max-widths": {
        sm: "sm:container",
        md: "md:container",
        lg: "lg:container",
        xl: "xl:container",
    },
    variants: {
        bordered: "border-gray-600 dark:border-gray-300 border-solid",
        elevated: "",
        regular: "",
    },
    variantElevations: {
        elevated: {
            xs: "shadow",
            sm: "shadow-sm",
            md: "shadow-md",
            lg: "shadow-lg",
            xl: "shadow-xl",
            "2xl": "shadow-2xl",
        },
        bordered: {},
        regular: {},
    },
    variantBorders: {
        bordered: { sm: "border", md: "border-2", lg: "border-4", xl: "border-8" },
        elevated: {},
        regular: {},
    },
    variantSchemes: {
        bordered: {},
        elevated: {},
        regular: {},
    },
    elevations: {},
    borders: {},
    schemes: {
        primary: "bg-container-primary dark:bg-container-primary-dark",
        secondary: "bg-container-secondary dark:bg-container-secondary-dark",
    },
    conditionals: {
        fixed: "container",
        center: "mx-auto",
        rounded: "rounded",
        gutters: "px-3",
    },
};
