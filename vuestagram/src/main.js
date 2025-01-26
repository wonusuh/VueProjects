import { createApp } from "vue";
import App from "./App.vue";
import mitt from "mitt";
import store from "./store.js";
import './registerServiceWorker'

const emitter = mitt();
const app = createApp(App);

/** 글로벌 변수들 선언 */
app.config.globalProperties.emitter = emitter; // 조부모컴포넌트나 형제컴포넌트에 emit 라이브러리
app.use(store).mount("#app");
