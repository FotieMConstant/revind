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
}
export declare const buttonStyleObj: ButtonStyleObject;
