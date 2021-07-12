import React, { createContext, FC } from "react";
import {
    ButtonStyleObj,
    buttonStyleObj,
    flexStyleObj,
    FlexStyleObj,
    ContainerStyleObj,
    containerStyleObj,
    HiddenStyleObj,
    hiddenStyleObj,
    textStyleObj,
    TextStyleObj,
    ButtonGroupStyleObj,
    buttonGroupStyleObj,
    InputStyleObj,
    inputStyleObj,
    inputLabelStyleObj,
    InputLabelStyleObj,
} from "@revind/styles";

export interface ThemeContext {
    styleObjects: {
        Button: ButtonStyleObj;
        ButtonGroup: ButtonGroupStyleObj;
        Flex: FlexStyleObj;
        Container: ContainerStyleObj;
        Hidden: HiddenStyleObj;
        Text: TextStyleObj;
        Input: InputStyleObj;
        InputLabel: InputLabelStyleObj;
    };
}

export const defaultTheme: ThemeContext = {
    styleObjects: {
        Button: buttonStyleObj,
        Flex: flexStyleObj,
        Container: containerStyleObj,
        Hidden: hiddenStyleObj,
        Text: textStyleObj,
        ButtonGroup: buttonGroupStyleObj,
        Input: inputStyleObj,
        InputLabel: inputLabelStyleObj,
    },
};
export const themeCtx = createContext<ThemeContext>(defaultTheme);

export interface ThemeProviderProps {
    theme: ThemeContext;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ theme, children }) => {
    return <themeCtx.Provider value={theme}>{children}</themeCtx.Provider>;
};
