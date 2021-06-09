/**
 * @type {import("@types/tailwindcss/tailwind-config").TailwindConfig}
 */

module.exports = {
    mode: "jit",
    purge: {
        content: ["./src/**/*.{vue,js,ts,jsx,tsx,html}"],
        options: {
            keyframes: true,
        }
    },
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            visibility: ["responsive", "active", "focus", "hover"],
            opacity: ["responsive", "active", "focus", "hover"],
            display: ["responsive", "active", "focus", "hover"]
        },
    },
    plugins: [],
};
