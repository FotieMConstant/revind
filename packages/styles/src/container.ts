export interface ContainerStyleObj {
    defaultStart: string;
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    variants: {
        elevated: string;
        bordered: string;
        regular: string;
        "elevated-xs": string;
        "elevated-sm": string;
        "elevated-md": string;
        "elevated-lg": string;
        "elevated-xl": string;
        "elevated-xxl": string;
        "bordered-sm": string;
        "bordered-md": string;
        "bordered-lg": string;
        "bordered-xl": string;
    };
    container: string;
    schemes: {
        primary: string;
        secondary: string;
    };
    center: string;
    defaultEnd: string;
    gutters: string;
    rounded: string;
}

export const containerStyleObj: ContainerStyleObj = {
    defaultStart: "",
    defaultEnd: "",
    breakpoints: {
        sm: "sm:container",
        md: "md:container",
        lg: "lg:container",
        xl: "xl:container",
    },
    variants: {
        bordered: "border-gray-600 dark:border-gray-300 border-solid",
        elevated: "",
        regular: "",
        "elevated-xs": "shadow",
        "elevated-sm": "shadow-sm",
        "elevated-md": "shadow-md",
        "elevated-lg": "shadow-lg",
        "elevated-xl": "shadow-xl",
        "elevated-xxl": "shadow-2xl",
        "bordered-sm": "border",
        "bordered-md": "border-2",
        "bordered-lg": "border-4",
        "bordered-xl": "border-8",
    },
    schemes: {
        primary: "bg-container-primary dark:bg-container-primary-dark",
        secondary: "bg-container-secondary dark:bg-container-secondary-dark",
    },
    container: "container",
    center: "mx-auto",
    rounded: "rounded",
    gutters: "px-3",
};
