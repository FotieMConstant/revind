import React, { useEffect } from "react";
import "../src/index.css";
import { ThemeProvider, defaultTheme } from "../src/context/theme-provider";
import { useDarkMode } from "storybook-dark-mode";

export const decorators = [
    (Story) => {
        const isDark = useDarkMode();
        useEffect(() => {
            document.querySelector("html").classList[isDark ? "add" : "remove"]("dark");
        }, [isDark]);
        return (
            <ThemeProvider theme={defaultTheme}>
                <Story />
            </ThemeProvider>
        );
    },
];

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
