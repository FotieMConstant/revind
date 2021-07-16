import { BaseStyleObj, Conditionals, Schemes, Sizes, VariantJunctions } from "./styles";

export type ContainerSchemes = Pick<Schemes, "primary" | "secondary">;

export interface ContainerVariants {
    readonly elevated: string;
    readonly regular: stirng;
    readonly bordered: string;
}

export type ContainerSizes = Omit<Sizes, "xs" | "2xl">;

export interface ContainerOptions {
    fixed?: boolean;
    scheme?: keyof ContainerSchemes;
    variant?: keyof ContainerVariants;
    gutters?: boolean;
    center?: boolean;
    "max-width"?: keyof ContainerSizes | false;
    elevation?: keyof Sizes;
    border?: keyof ContainerSizes;
    rounded?: boolean;
}

export interface ContainerStyleObj
    extends Omit<
            BaseStyleObj<ContainerVariants, ContainerSchemes>,
            "sizes" | "variantSizes"
        >,
        Conditionals<"fixed" | "gutters" | "center" | "rounded"> {
    "max-widths": ContainerSizes;
    elevations: Sizes;
    borders: ContainerSizes;
    variantElevations: VariantJunctions<Sizes, ContainerVariants>;
    variantBorders: VariantJunctions<ContainerSizes, ContainerVariants>;
}
