import { useMemo } from "react";
import { ThemeContext } from "../context/theme-provider";
import { mergeExtendStyleObj } from "../utils/mergeExtendStyleObj";
import { useTheme } from "./useTheme";

export type ThemeKeys = keyof ThemeContext["styleObjects"];

export function useStyleConfig<S>(
    themeKey: ThemeKeys,
    styleObj?: S,
): Required<S> {
    const { styleObjects } = useTheme();
    const theme = styleObjects[themeKey] as unknown as Required<S>;

    return useMemo(() => {
        if (!styleObj) {
            return theme;
        }
        return mergeExtendStyleObj(styleObj, theme);
    }, [styleObj, theme]);
}
