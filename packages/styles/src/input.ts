export interface InputStyleObj {
    defaultStart: string;
    wrapperDefault: string;
    defaultEnd: string;
    schemes: {
        primary: string;
        secondary: string;
        red: string;
        green: string;
        yellow: string;
    };
    variants: {
        regular: string;
        filled: string;
        underlined: string;
    };
    textSchemes: {
        primary: string;
        secondary: string;
        red: string;
        green: string;
        yellow: string;
    };
    sizes: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    fullWidth: string;
    margin: string;
    floatingPlaceholder: string;
    wrapperFullWidth: string;
}

export const inputStyleObj: InputStyleObj = {
    defaultStart:
        "dark:border-gray-600 outline-none text-black dark:text-white  placeholder-gray-500 border-gray-300",
    defaultEnd: "",
    wrapperDefault: "transition-colors relative text-gray-500",
    schemes: {
        primary: "focus:border-primary dark:focus:border-primary-dark",
        secondary: "focus:border-secondary dark:focus:border-secondary-dark",
        red: "focus:border-red dark:focus:border-red-dark",
        green: "focus:border-green dark:focus:border-green-dark",
        yellow: "focus:border-yellow dark:focus:border-yellow-dark",
    },
    variants: {
        regular: "border border-solid rounded bg-inherit",
        filled: "border-0 bg-gray-100 dark:bg-gray-800",
        underlined: "border-b border-solid bg-inherit",
    },
    textSchemes: {
        primary: "focus-within:text-primary",
        secondary: "focus-within:text-secondary",
        red: "focus-within:text-red",
        green: "focus-within:text-green",
        yellow: "focus-within:text-yellow",
    },
    sizes: {
        sm: "p-1",
        md: "py-2 px-1 text-md",
        lg: "py-4 px-1 text-xl",
        xl: "py-6 px-1 text-2xl",
    },
    floatingPlaceholder: "placeholder-opacity-0 focus:placeholder-opacity-100",
    fullWidth: "w-full",
    wrapperFullWidth: "flex",
    margin: "mx-1 mb-2",
};

export interface InputLabelStates {
    focused: string;
    default: string;
}

export interface InputLabelStyleObj {
    variants: {
        regular: InputLabelStates;
        filled: InputLabelStates;
        underlined: InputLabelStates;
    };
    nonFocusedText: string;
    defaultStart: string;
    defaultEnd: string;
}

export const inputLabelStyleObj: InputLabelStyleObj = {
    variants: {
        regular: {
            focused:
                "-top-2 text-xs bg-container-primary dark:bg-container-primary-dark left-2",
            default: "left-2 top-1/2 -translate-y-1/2 text-gray-500",
        },
        filled: {
            focused: "-top-2 text-xs left-2",
            default: "left-2 top-1/2 -translate-y-1/2 text-gray-500",
        },
        underlined: {
            focused: "-top-2 text-xs",
            default: "top-1/2 -translate-y-1/2 text-gray-500",
        },
    },
    defaultStart:
        "overflow-ellipsis whitespace-nowrap appearance-none transition-all transform select-none absolute",
    defaultEnd: "",
    nonFocusedText: "text-gray-500",
};
