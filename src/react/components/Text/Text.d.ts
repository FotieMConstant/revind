import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";

declare type TextElement = HTMLParagraphElement | HTMLSpanElement | HTMLHeadingElement;

declare interface TextProps
    extends DetailedHTMLProps<HTMLAttributes<TextElement>, TextElement> {
    variant?:
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6"
        | "body1"
        | "body2"
        | "sub1"
        | "sub2"
        | "caption"
        | "overline";
    align?: "left" | "center" | "right" | "justify";
    scheme?:
        | "primary"
        | "secondary"
        | "red"
        | "green"
        | "yellow"
        | "regular"
        | "inverted";
    inline?: boolean;
    wrap?: boolean;
    "bottom-margin"?: boolean;
}

declare function Text(props: TextProps): ReactElement;

export default Text;
