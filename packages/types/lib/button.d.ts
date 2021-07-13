import {
    BaseStyleObj,
    Conditionals,
    Schemes,
    Sizes,
    SubComponents,
    Variants,
} from "./styles";

export interface ButtonOptions<I> {
    /**
     * the variant/category of button to use
     * @default filled
     */
    variant?: keyof Variants;
    /**
     * the bg & accent colors to use
     * @default primary
     */
    scheme?: keyof Schemes;
    /**
     * the size to use (based on padding)
     * @default md
     */
    size?: keyof Omit<Sizes, "xs">;
    /**
     * gives a bit margin around the button for separation
     * its turned off in `ButtonGroup`
     * @default true
     */
    margin?: boolean;
    /**
     * the icon to be shown on the left side of all other button contents
     */
    "start-icon"?: I;
    /**
     * the icon to be shown on the right side of all other button contents
     */
    "end-icon"?: I;
    /**
     * makes the button consume/grow 100% of the container size
     * @default false
     */
    "full-width"?: boolean;
    /**
     * round edged button
     * @default true
     */
    rounded?: boolean;
}

export type ButtonStyleObj = BaseStyleObj &
    Conditionals<"rounded" | "margin" | "fullWidth"> &
    SubComponents<"startIcon" | "endIcon", Pick<BaseStyleObj, "default">>;
