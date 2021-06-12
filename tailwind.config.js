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
    mode: "jit",
    purge: {
        content: ["./src/**/*.{vue,js,ts,jsx,tsx,html}"],
        options: {
            keyframes: true,
        },
    },
    darkMode: "media",
    theme: {
        extend: {
            colors: brandColors,
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
    plugins: [],
};
module.exports = config;
