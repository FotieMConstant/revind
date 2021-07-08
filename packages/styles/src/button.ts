export interface ButtonSchemes {
    primary: string;
    secondary: string;
    red: string;
    green: string;
    yellow: string;
}

export interface ButtonStyleObject {
    defaultStart: string;
    defaultEnd: string;
    margin: string;
    fullWidth: string;
    variants: {
        filled: string;
        outlined: string;
        text: string;
    };
    variantSchemes: {
        filled: ButtonSchemes;
        outlined: ButtonSchemes;
        text: ButtonSchemes;
    };
    sizes: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
    };
    startIcon: string;
    endIcon: string;
}
export const buttonStyleObj: ButtonStyleObject = {
    defaultStart: "rounded cursor-pointer transition-all",
    defaultEnd:
        "disabled:bg-gray-200 dark:disabled:bg-gray-500 disabled:cursor-not-allowed disabled:text-gray-400 focus:outline-none",
    margin: "m-1",
    fullWidth: "w-full block",
    variants: {
        filled: "text-white filter hover:brightness-95 active:brightness-105",
        outlined:
            "border border-solid bg-opacity-0 dark:bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-10 dark:hover:bg-opacity-20 dark:active:bg-opacity-10",
        text: "bg-opacity-0 dark:bg-opacity-0 hover:bg-opacity-20 dark:hover:bg-opacity-20 active:bg-opacity-10 dark:active:bg-opacity-10",
    },
    variantSchemes: {
        filled: {
            primary: "bg-primary dark:bg-primary-dark",
            secondary: "bg-secondary dark:bg-secondary-dark",
            red: "bg-red dark:bg-red-dark",
            green: "bg-green dark:bg-green-dark",
            yellow: "bg-yellow dark:bg-yellow-dark",
        },
        outlined: {
            primary:
                "border-primary dark:border-primary-dark text-primary dark:text-primary-dark bg-primary dark:bg-primary-dark",
            secondary:
                "border-secondary dark:border-secondary-dark text-secondary dark:text-secondary-dark bg-secondary dark:bg-secondary-dark",
            red: "border-red dark:border-red text-red dark:text-red-dark bg-red dark:bg-red-dark",
            green: "border-green dark:border-green text-green dark:text-green-dark bg-green dark:bg-green-dark",
            yellow: "border-yellow dark:border-yellow text-yellow dark:text-yellow-dark bg-yellow dark:bg-yellow-dark",
        },
        text: {
            primary:
                "text-primary dark:text-primary-dark bg-primary dark:bg-primary-dark",
            secondary:
                "text-secondary dark:text-secondary-dark bg-secondary dark:bg-secondary-dark",
            red: "text-red dark:text-red-dark bg-red dark:bg-red-dark",
            green: "text-green dark:text-green-dark bg-green dark:bg-green-dark",
            yellow: "text-yellow dark:text-yellow-dark bg-yellow dark:bg-yellow-dark",
        },
    },
    sizes: {
        sm: "p-1",
        md: "p-2",
        lg: "p-4",
        xl: "p-6",
        xxl: "p-8",
    },
    startIcon: "mr-1 inline-block align-middle",
    endIcon: "ml-1 inline-block align-middle",
};
