import {
    BaseStyleObj,
    Logical,
    Schemes,
    Sizes,
    VariantJunctions,
    Variants,
} from "./styles";

export interface InputLabelOptions {
    variant?: keyof InputLabelVariants;
    scheme?: keyof Schemes;
    size?: keyof Sizes;
    inputVariant: keyof Variants;
    styleObj?: Partial<InputLabelStyleObj>;
}

export interface InputLabelVariants {
    readonly "material-floating"?: string;
    readonly "material-static"?: string;
    readonly top?: string;
    readonly left?: string;
}

export type InputLabelStyleObj = BaseStyleObj<InputLabelVariants> & {
    variantInputVariant: VariantJunctions<Variants, InputLabelVariants>;
};
