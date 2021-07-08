/**
 *
 * @type {import("@types/tailwindcss/tailwind-config").TailwindConfig}
 */
module.exports = {
    presets: [require("../../tailwind.base.config")],
    purge: {
        content: ["./src/**/*.{ts,tsx,js,jsx}"],
        options: {
            safelist: [
                ...(process.env.NODE_ENV === "production"
                    ? require("@revind/styles").default
                    : []),
            ],
        },
    },
    darkMode: "class",
};
