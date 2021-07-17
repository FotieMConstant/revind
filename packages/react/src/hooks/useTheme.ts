import { useContext } from "react";
import { themeCtx } from "../context/theme-provider";

export function useTheme() {
    const theme = useContext(themeCtx);

    return theme;
}
