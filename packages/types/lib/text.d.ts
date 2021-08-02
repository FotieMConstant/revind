import { BaseStyleObj, Conditionals, Schemes } from "./styles";

export interface TextOptions {
    variant?: keyof TextVariants;
    align?: keyof TextAlignments;
    scheme?: keyof TextSchemes;
    inline?: boolean;
    wrap?: boolean;
    "bottom-margin"?: boolean;
    styleObj?: TextStyleObj
}

export interface TextVariants {
    readonly h1?: string;
    readonly h2?: string;
    readonly h3?: string;
    readonly h4?: string;
    readonly h5?: string;
    readonly h6?: string;
    readonly body1?: string;
    readonly body2?: string;
    readonly sub1?: string;
    readonly sub2?: string;
    readonly caption?: string;
    readonly overline?: string;
}

export interface TextSchemes extends Schemes {
    readonly inverted?: string;
    readonly regular?: string;
}

interface TextAlignments {
    left: string;
    center: string;
    right: string;
    justify: string;
}

export interface TextStyleObj
    extends Omit<BaseStyleObj<TextVariants, TextSchemes>, "sizes" | "variantSizes">,
        Conditionals<"inline" | "wrap" | "noWrap" | "bottomMargin"> {
    alignments: TextAlignments;
}
