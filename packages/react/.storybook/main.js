const TsChecker = require("vite-plugin-ts-checker").default;

module.exports = {
    stories: [
        "../src/**/*.stories.mdx",
        "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "storybook-dark-mode/register",
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
        config.server.fs.strict = false;
        config.server.hmr.port = 443;
        config.server.hmr.host = "6006-emerald-beaver-vrw27llg.ws-us11.gitpod.io";
        return config;
    },
};
