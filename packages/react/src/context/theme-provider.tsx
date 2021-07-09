import React, { createContext, FC } from "react";
import {
    buttonStyleObj,
    ButtonStyleObject,
    flexStyleObj,
    FlexStyleObj,
    ContainerStyleObj,
    containerStyleObj,
    HiddenStyleObj,
    hiddenStyleObj,
    textStyleObj,
    TextStyleObj,
} from "@revind/styles";

export interface ThemeContext {
    styleObjects: {
        Button: ButtonStyleObject;
        Flex: FlexStyleObj;
        Container: ContainerStyleObj;
        Hidden: HiddenStyleObj;
        Text: TextStyleObj;
    };
}

export const defaultTheme = {
    styleObjects: {
        Button: buttonStyleObj,
        Flex: flexStyleObj,
        Container: containerStyleObj,
        Hidden: hiddenStyleObj,
        Text: textStyleObj,
    },
};
export const themeCtx = createContext<ThemeContext>(defaultTheme);

export interface ThemeProviderProps {
    theme: ThemeContext;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ theme, children }) => {
    return <themeCtx.Provider value={theme}>{children}</themeCtx.Provider>;
};
