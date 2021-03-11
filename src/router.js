import { createRouter, createWebHistory } from "vue-router";

import BlogPost from "./pages/BlogPost.vue";
import TheHomePage from "./pages/TheHomePage.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: TheHomePage },
    {
      path: "/blog/:id",
      component: BlogPost,
      props: true,
    },
  ],
});
