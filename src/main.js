import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";


import "./assets/style/main.scss";
// import Vuetify from "vuetify";
// import store from './store'


const app = createApp(App);

// app.use(Vuetify);
// app.use(store)
app.use(router);

// app.component('base-button', BaseButton)

app.mount("#app");
