/**
 * @type {import("@types/tailwindcss/tailwind-config").TailwindConfig}
 */
module.exports = {
    purge: { content: ["./src/**/*.vue"] },
    presets: [require("@revind/tailwindcss-preset-revind")],
};
