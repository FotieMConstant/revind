import { createRouter, createWebHistory } from "vue-router";
import Home from "../Home.vue";
import ButtonComp from "../internals/_Button.vue";
import ButtonGroupComp from "../internals/_ButtonGroup.vue";
import ContainerComp from "../internals/_Container.vue";
import FlexComp from "../internals/_Flex.vue";
import HiddenComp from "../internals/_Hidden.vue";
import TextComp from "../internals/_Text.vue";

export const routes = [
    { path: "/flex", component: FlexComp },
    { path: "/container", component: ContainerComp },
    { path: "/hidden", component: HiddenComp },
    { path: "/buttons", component: ButtonComp },
    { path: "/button-group", component: ButtonGroupComp },
    { path: "/text", component: TextComp },
];
const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: "/", component: Home }, ...routes],
});

export default router;
