import { ContainerSizes } from "./container";
import { InputLabelVariants } from "./input-label";
import {
    BaseStyleObj,
    Conditionals,
    Logical,
    Schemes,
    Sizes,
    SubComponents,
    VariantJunctions,
    Variants,
} from "./styles";

type InputSizes = ContainerSizes;

export interface InputOptions<W, L> {
    type?:
        | "text"
        | "email"
        | "password"
        | "hidden"
        | "number"
        | "tel"
        | "url"
        | "datetime";
    variant?: keyof Variants;
    scheme?: keyof Schemes;
    size?: keyof InputSizes;
    "full-width"?: boolean;
    margin?: boolean;
    label?: string;
    "label-props"?: L;
    "wrapper-props"?: W;
    styleObj?: InputStyleObj;
}

export interface InputSubComponents {
    wrapper: Pick<BaseStyleObj, "default" | "schemes"> &
        Conditionals<"full-width"> & {
            wrapperInputLabelVariant: InputLabelVariants;
            wrapperInputVariant: Variants;
        };
}

export type InputStyleObj = BaseStyleObj & {
    variantInputLabelVariant: VariantJunctions<InputLabelVariants>;
} & Conditionals<"full-width" | "margin"> &
    SubComponents<InputSubComponents>;
