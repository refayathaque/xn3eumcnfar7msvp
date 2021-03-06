import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // https://travishorn.com/adding-bootstrap-to-a-vue-cli-project-98c2a30e0ed0
import "./reset.css"; // https://redonion.se/en/adding-css-to-a-vue-js-project-2/

const app = createApp(App);

app.use(router);

app.mount("#app");