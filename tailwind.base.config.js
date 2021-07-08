const colors = require("tailwindcss/colors");
// accents
const brandColors = {
    primary: {
        DEFAULT: colors.blue[500],
        dark: colors.blue[400],
    },
    secondary: {
        DEFAULT: colors.gray[600],
        dark: colors.gray[400],
    },
    red: {
        DEFAULT: colors.red[600],
        dark: colors.red[500],
    },
    green: {
        DEFAULT: colors.green[600],
        dark: colors.green[500],
    },
    yellow: {
        DEFAULT: colors.yellow[400],
        dark: colors.yellow[300],
    },
};
// bg
const brandBgColors = {
    "container-primary": {
        DEFAULT: colors.white,
        dark: colors.gray[900],
    },
    "container-secondary": {
        DEFAULT: colors.gray[200],
        dark: colors.gray[700],
    },
};
/**
 * @type {import("@types/tailwindcss/tailwind-config").TailwindConfig}
 */
const config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                inherit: "inherit",
                ...brandColors,
            },
            backgroundColor: brandBgColors,
        },
    },
    variants: {
        extend: {
            visibility: ["responsive", "active", "focus", "hover"],
            opacity: ["responsive", "active", "focus", "hover"],
            display: ["responsive", "active", "focus", "hover"],
            transitionProperty: ["hover"],
            backgroundOpacity: ["dark"],
        },
    },
};
module.exports = config;
