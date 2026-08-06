import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import "./assets/css/reset.css";
import "./assets/css/variables.css";
import "./assets/css/global.css";
import "./assets/css/utilities.css";
import "./assets/css/animation.css";
createApp(App).use(router).mount("#app");
