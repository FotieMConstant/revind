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

export type Junction<T, V> = {
    [key in V]: T;
};

/**
 * Joins Variants with Other types
 *
 * can be used to junction/join any thing
 */
export type VariantJunctions<T, V extends object = Variants> = Junction<T, keyof V>;

export type VariantSchemes<
    V extends object = Variants,
    S extends object = Schemes,
> = Partial<VariantJunctions<S, V>>;

export type VariantSizes<V extends object = Variants> = Partial<VariantJunctions<Sizes, V>>;

export interface DefaultStyles {
    start?: string;
    end?: string;
}

export interface BaseStyleObj<V extends object = Variants, Sh extends object = Schemes> {
    default: DefaultStyles;
    variants: V;
    schemes: Sh;
    sizes: Sizes;
    variantSchemes: VariantSchemes<V, Sh>;
    variantSizes: VariantSizes<V>;
}

// StyleObj Addon
export type Conditionals<T extends string> = { conditionals: Record<T, string> };
export type Logical<P extends object = {}> = { logical: P };
export type SubComponents<T extends object = {}> = { sub: T };
