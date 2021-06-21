import { DetailedHTMLProps, ReactElement, TextareaHTMLAttributes } from "react";
import { TextFieldProps } from "../TextField/TextField";
declare interface TextareaProps
    extends DetailedHTMLProps<
            TextareaHTMLAttributes<HTMLTextAreaElement>,
            HTMLTextAreaElement
        >,
        Pick<
            TextFieldProps,
            | "variant"
            | "scheme"
            | "size"
            | "margin"
            | "full-width"
            | "label"
            | "label-variant"
            | "wrapper-ref"
            | "label-ref"
        > {
    "min-rows"?: number;
    "max-rows"?: number;
}

declare function Textarea(props: TextareaProps): ReactElement;

export default Textarea;
