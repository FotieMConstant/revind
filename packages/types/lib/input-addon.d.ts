import { InputSizes } from "./input";
import { BaseStyleObj, Logical, Schemes, VariantJunctions, Variants } from "./styles";

export type InputAddonOptions = {
    variant?: keyof Variants;
    scheme?: keyof Schemes;
    size?: keyof InputSizes;
    left?: boolean;
    right?: boolean;
    styleObj?: InputAddonStyleObj;
};

interface InputAddonPlacements {
    readonly left?: string;
    readonly right?: string;
}

export interface InputAddonLogicalStyles {
    readonly placement: InputAddonPlacements;
}

export type VariantPlacements = {
    variantPlacements: VariantJunctions<InputAddonPlacements>;
};

export type InputAddonStyleObj = BaseStyleObj &
    VariantPlacements &
    Logical<InputAddonLogicalStyles>;
