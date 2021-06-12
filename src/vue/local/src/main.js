import { createApp } from "vue";
import "../../../index.css";
import App from "./App.vue";
import routes from "./routes";

createApp(App).use(routes).mount("#app");
