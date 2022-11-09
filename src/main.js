import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import TheNavigation from "./components/nav/TheNavigation.vue";
import TextareaInput from "./components/input/TextareaInput.vue";

import "./config/vee-validate/rules";
import "./config/vee-validate/messages";
import "./assets/main.css";

const pinia = createPinia();
const app = createApp(App);

app.component("the-navigation", TheNavigation);
app.component("textarea-input", TextareaInput);

app.use(pinia);
app.use(router);

app.mount("#app");
