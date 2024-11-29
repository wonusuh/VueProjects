// 라이브러리(vue-router)를 임포트 합니다.
import { createWebHistory, createRouter } from "vue-router";
import BlogHome from "./components/BlogHome.vue";
import BlogList from "./components/BlogList.vue";
import BlogDetail from "./components/BlogDetail.vue";

const routes = [
  {
    path: "/",
    component: BlogHome,
  },
  {
    path: "/list",
    component: BlogList,
  },
  {
    path: "/detail",
    component: BlogDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
