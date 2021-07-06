/**
 * @type {import("@types/tailwindcss/tailwind-config").TailwindConfig}
 */
module.exports = {
    presets: [require("../../tailwind.base.config")],
    purge: { content: ["./src/**/*.tsx"] },
};