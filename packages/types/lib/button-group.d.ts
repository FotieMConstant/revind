import { ButtonOptions } from "./button";
import { BaseStyleObj, Schemes, VariantJunctions } from "./styles";

export interface ButtonGroupOptions<I>
    extends Pick<ButtonOptions<I>, "variant" | "scheme" | "size" | "full-width"> {
    direction?: "column" | "row";
}

export interface Directions {
    row: string;
    column: string;
}

export type VariantDirections = VariantJunctions<Directions>;

export interface ButtonGroupStyleObj extends Pick<BaseStyleObj, "default"> {
    directions: Directions;
    variantDirections: VariantDirections;
    borderColors: Schemes;
}
