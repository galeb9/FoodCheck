import { createApp } from "vue";
import App from "./App.vue";
import router from "@/scripts/router.js";
// import '@/scripts/fontawsome.js'
import "@/scripts/fontawesome";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.mount("#app");
