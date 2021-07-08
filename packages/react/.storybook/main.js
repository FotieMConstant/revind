const TsChecker = require("vite-plugin-ts-checker").default;

module.exports = {
    stories: [
        "../src/**/*.stories.mdx",
        "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        {
            name: "@storybook/addon-postcss",
            options: {
                postcssLoaderOptions: {
                    implementation: require("postcss"),
                },
            },
        },
    ],
    core: {
        builder: "storybook-builder-vite",
    },
    async viteFinal(config) {
        config.plugins.push(TsChecker({ checker: "tsc" }));
        config.server = { ...config.server, fs: { strict: false } };
        return config;
    },
};
