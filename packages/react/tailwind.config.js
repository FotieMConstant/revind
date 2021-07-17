/**
 *
 * @type {import("@types/tailwindcss/tailwind-config").TailwindConfig}
 */
module.exports = {
    mode: "jit",
    presets: [require("@revind/tailwindcss-preset-revind")],
    purge: {
        content: [
            "./src/**/*.{ts,tsx,js,jsx}",
            "../../node_modules/@revind/styles/dist/src/**/*.js",
        ],
    },
    darkMode: "class",
};
