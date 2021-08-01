import React, { createContext, FC } from "react";
import {
    buttonStyleObj,
    flexStyleObj,
    containerStyleObj,
    checkboxStyleObj,
    hiddenStyleObj,
    textStyleObj,
    buttonGroupStyleObj,
    inputStyleObj,
    inputLabelStyleObj,
} from "@revind/styles";
import {
    ButtonGroupStyleObj,
    ButtonStyleObj,
    TextStyleObj,
    ContainerStyleObj,
    FlexStyleObj,
    HiddenStyleObj,
    InputStyleObj,
    InputLabelStyleObj,
    CheckboxStyleObj,
} from "@revind/types";

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
        Checkbox: CheckboxStyleObj;
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
        Checkbox: checkboxStyleObj
    },
};
export const themeCtx = createContext<ThemeContext>(defaultTheme);

export interface ThemeProviderProps {
    theme: ThemeContext;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ theme, children }) => {
    return <themeCtx.Provider value={theme}>{children}</themeCtx.Provider>;
};
