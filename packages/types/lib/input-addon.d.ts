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

export type InputAddonOptions = Pick<
    InputOptions<unknown, unknown>,
    "variant" | "scheme" | "size"
> &
    PropStyleObj<InputAddonStyleObj> & {
        left?: boolean;
        right?: boolean;
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
