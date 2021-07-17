export interface Variants {
    readonly filled?: string;
    readonly outlined?: string;
    readonly minimal?: string;
}

export interface Schemes {
    readonly primary?: string;
    readonly secondary?: string;
    readonly red?: string;
    readonly green?: string;
    readonly yellow?: string;
    readonly blue?: string;
    readonly gray?: string;
    readonly orange?: string;
    readonly teal?: string;
    readonly cyan?: string;
    readonly purple?: string;
    readonly pink?: string;
    readonly indigo?: string;
}

export interface Sizes {
    readonly xs?: string;
    readonly sm?: string;
    readonly md?: string;
    readonly lg?: string;
    readonly xl?: string;
    readonly "2xl"?: string;
}

export type VariantJunctions<T, V extends object = Variants> = {
    [key in keyof V]: T;
};

export type VariantSchemes<
    V extends object = Variants,
    S extends object = Schemes,
> = VariantJunctions<S, V>;

export type VariantSizes<V extends object = Variants> = VariantJunctions<Sizes, V>;

export interface DefaultStyles {
    start?: string;
    end?: string;
}

export type Conditionals<T extends string> = { conditionals: Record<T, string> };
export type SubComponents<T extends string, Props = {}> = { sub: Record<T, Props> };

export interface BaseStyleObj<V extends object = Variants, Sh extends object = Schemes> {
    default: DefaultStyles;
    variants: V;
    schemes: Sh;
    sizes: Sizes;
    variantSchemes: VariantSchemes<V, Sh>;
    variantSizes: VariantSizes<V>;
}
