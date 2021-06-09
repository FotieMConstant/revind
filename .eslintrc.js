/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "vue", "prettier"],
  settings: {
    react: {
      version: "17.0.0",
    },
  },
  rules: {
    "prettier/prettier": "warn",
    "no-unused-vars": ["warn"],
    "react/no-unescaped-entities": ["off"],
    indent: ["error", 4],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
module.exports = config;