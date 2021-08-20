import { InputOptions, InputSizes } from "./input";
import { PropStyleObj } from "./props";
import {
    BaseStyleObj,
    Conditionals,
    Logical,
    Schemes,
    VariantJunctions,
    Variants,
} from "./styles";

export interface InputAddonVariants {
    readonly floating?: string;
    readonly static?: string;
}

export interface InputAddonOptions
    extends Pick<InputOptions<unknown, unknown, unknown>, "scheme" | "size">,
        PropStyleObj<InputAddonStyleObj> {
    inputVariant?: keyof Variants;
    variant?: keyof InputAddonVariants;
    styleObj?: Partial<InputAddonStyleObj>;
}

export interface InputAddonStyleObj extends BaseStyleObj<InputAddonVariants> {
    inputVariants: Variants;
    variantInputVariants: VariantJunctions<Variants, InputAddonVariants>;
}
