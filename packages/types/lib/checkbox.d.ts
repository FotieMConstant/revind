import { InputLabelVariants } from "./input-label";
import { BaseStyleObj, Junction, Logical, Schemes, Sizes, SubComponents } from "./styles";

export interface CheckboxOptions<W, L, I> {
    variant?: unknown;
    checked?: boolean;
    scheme?: keyof Schemes;
    "wrapper-props"?: W;
    size?: keyof Omit<Sizes, "xs">;
    value?: "on" | "off" | string;
    label?: string;
    "label-props"?: L;
    "icon-props"?: I;
}

export interface CheckboxIconLogicalStyles {
    states: {
        readonly checked?: string;
        readonly default?: string;
    };
}

export type SchemeStateJunction = {
    schemeState: Junction<CheckboxIconLogicalStyles["states"], readonly (keyof Schemes)>;
};

export interface CheckboxSubComponentsStyles {
    wrapper: Pick<BaseStyleObj, "default"> & {
        wrapperInputLabelVariant: Omit<
            InputLabelVariants,
            "material-floating" | "material-static"
        > & { readonly right: string };
    };
    icon: BaseStyleObj<{}> & Logical<CheckboxIconLogicalStyles> & SchemeStateJunction;
    label: Pick<BaseStyleObj, "default">;
}

export type CheckboxStyleObj = Pick<BaseStyleObj, "default"> &
    SubComponents<CheckboxSubComponentsStyles>;
