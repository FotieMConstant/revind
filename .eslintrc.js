/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:vue/vue3-recommended"
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: "module"
    },
    plugins: [
        "react",
        "vue"
    ],
    settings: {
        react: {
            version: "17.0.0"
        }
    },
    rules: {
        "no-unused-vars": ["warn"],
        "react/no-unescaped-entities": ["off"],
        indent: [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        quotes: [
            "error",
            "double"
        ],
        semi: [
            "error",
            "always"
        ]
    }
};

module.exports = config;