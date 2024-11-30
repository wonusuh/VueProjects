// 라이브러리(vue-router)를 임포트 합니다.
import { createWebHistory, createRouter } from "vue-router";
import BlogHome from "./components/BlogHome.vue";
import BlogList from "./components/BlogList.vue";
import BlogDetail from "./components/BlogDetail.vue";
import BlogAuthor from "./components/BlogAuthor.vue";
import BlogComment from "./components/BlogComment.vue";

const routes = [
  {
    path: "/",
    component: BlogHome,
  },
  {
    path: "/list",
    component: BlogList,
    // beforeEnter: () => {
    //   alert(`test`);
    //   return "/";
    // },
  },
  {
    path: "/detail/:id",
    component: BlogDetail,
    children: [
      {
        path: "author",
        component: BlogAuthor,
      },
      {
        path: "comment",
        component: BlogComment,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
