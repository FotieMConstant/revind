import React, { DetailedHTMLProps, InputHTMLAttributes, ReactElement, Ref } from "react";
export declare interface TextFieldProps
    extends DetailedHTMLProps<
        Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
        HTMLInputElement
    > {
    type?:
        | "text"
        | "email"
        | "password"
        | "hidden"
        | "number"
        | "tel"
        | "url"
        | "datetime";
    variant?: "filled" | "regular" | "underlined";
    scheme?: "primary" | "secondary" | "red" | "green" | "yellow";
    size?: "sm" | "md" | "lg" | "xl" | "xxl";
    margin?: boolean;
    "full-width": boolean;
    label?: string;
    "label-variant"?: "static" | "floating";
    "wrapper-ref"?: Ref<HTMLLabelElement>;
    "label-ref"?: Ref<HTMLSpanElement>;
    component?: ReactElement;
}

declare function TextField(props: TextFieldProps): ReactElement;

export default TextField;
