/**
 * @type {import("@types/tailwindcss/tailwind-config").TailwindConfig}
 */
module.exports = {
    purge: { content: ["./src/**/*.vue"] },
    presets: [require("../../tailwind.base.config")],
};
