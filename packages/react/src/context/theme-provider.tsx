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
    inputAddonStyleObj,
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
    ContainerOptions,
    FlexOptions,
    HiddenOptions,
    InputLabelOptions,
    TextOptions,
    InputAddonStyleObj,
    InputAddonOptions,
} from "@revind/types";
import { ReactRevindButtonOptions } from "../components/Button/Button";
import {
    ReactRevindButtonGroupOptions,
    ReactRevindInputOptions,
    ReactRevindCheckboxOptions,
} from "../main";

export interface ThemeContext {
    styleObjects: {
        Button: ButtonStyleObj;
        ButtonGroup: ButtonGroupStyleObj;
        Checkbox: CheckboxStyleObj;
        Container: ContainerStyleObj;
        Flex: FlexStyleObj;
        Hidden: HiddenStyleObj;
        Input: InputStyleObj;
        InputAddon: InputAddonStyleObj;
        InputLabel: InputLabelStyleObj;
        Text: TextStyleObj;
    };
    props: {
        Button?: ReactRevindButtonOptions;
        ButtonGroup?: ReactRevindButtonGroupOptions;
        Checkbox?: ReactRevindCheckboxOptions;
        Container?: ContainerOptions;
        Flex?: FlexOptions;
        Hidden?: HiddenOptions;
        Input?: ReactRevindInputOptions;
        InputAddon?: InputAddonOptions;
        InputLabel?: InputLabelOptions;
        Text?: TextOptions;
    };
}

export const defaultTheme: ThemeContext = {
    styleObjects: {
        Button: buttonStyleObj,
        ButtonGroup: buttonGroupStyleObj,
        Checkbox: checkboxStyleObj,
        Container: containerStyleObj,
        Flex: flexStyleObj,
        Hidden: hiddenStyleObj,
        Input: inputStyleObj,
        InputAddon: inputAddonStyleObj,
        InputLabel: inputLabelStyleObj,
        Text: textStyleObj,
    },
    props: {},
};
export const themeCtx = createContext<ThemeContext>(defaultTheme);

export interface ThemeProviderProps {
    theme: ThemeContext;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ theme, children }) => {
    return <themeCtx.Provider value={theme}>{children}</themeCtx.Provider>;
};
