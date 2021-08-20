import { InputOptions } from "./input";
import { InputAddonPlacements, InputAddonVariants } from "./input-addon";
import { PropStyleObj } from "./props";
import { BaseStyleObj, Conditionals, Junction, Logical, SubComponents } from "./styles";

export type InputGroupOptions = PropStyleObj<InputGroupStyleObj> &
    Pick<
        InputOptions<unknown, unknown>,
        "variant" | "scheme" | "size" | "full-width" | "margin"
    >;

export interface InputGroupPlacements extends InputAddonPlacements {
    readonly both?: string;
}

export type InputGroupLogicalStyles = {
    placement: InputGroupPlacements;
    placementInputAddonVariant: Junction<InputGroupPlacements, keyof InputAddonVariants>;
};

export type InputGroupSubComponentStyles = {
    input: Omit<BaseStyleObj, "scheme" | "variantSchemes"> &
        Logical<InputGroupLogicalStyles> & { inputAddonVariants: InputAddonVariants };
};

export type InputGroupStyleObj = Pick<BaseStyleObj, "default"> &
    SubComponents<InputGroupSubComponentStyles> &
    Conditionals<"margin" | "full-width">;
