import { ContainerSizes } from "./container";
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

type InputLabelVariants = "static" | "floating";

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
    "label-variant"?: InputLabelVariants;
    "wrapper-ref"?: W;
    "label-ref"?: L;
}

export type InputLogicalStyles = {
    variantStates: VariantJunctions<{ focused: string; default: string }>;
};

export interface InputSubComponents {
    wrapper: Pick<BaseStyleObj, "default" | "schemes"> & Conditionals<"full-width">;
    label: Pick<BaseStyleObj, "default"> & Conditionals<"nonFocusedText">;
}

export type InputStyleObj = BaseStyleObj &
    Conditionals<"full-width" | "margin" | "floatingPlaceholder"> &
    SubComponents<InputSubComponents> &
    Logical<InputLogicalStyles>;
