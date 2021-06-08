import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

/**
 * @type {import('vite').UserConfig}
*/
export default defineConfig({
    plugins: [vue()],
    root: "src/vue/local",
});
