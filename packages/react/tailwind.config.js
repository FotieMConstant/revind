/**
 * @type {import("@types/tailwindcss/tailwind-config").TailwindConfig}
 */ module.exports = {
    mode: "jit",
    purge: { content: ["./src/**/*.tsx"] },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
