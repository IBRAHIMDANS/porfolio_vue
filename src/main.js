import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";


import "./assets/style/main.scss";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

// import { MdButton, MdContent, MdTabs } from "vue-material";


const app = createApp(App);

// app.use(MdButton);
// app.use(MdContent);
// app.use(MdTabs);

app.use(router);

// app.component('base-button', BaseButton)

app.mount("#app");
