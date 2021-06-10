const colors = require("tailwindcss/colors");
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
            colors: {
                ...brandColors,
            },
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
