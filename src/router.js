import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home.vue";
import Posts from "./pages/Posts.vue";
import E404 from "./pages/E404.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/posts",
      name: "posts",
      component: Posts,
    },
    {
      path: "*",
      component: E404,
    },
  ],
  mode: "history",
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        // , offset: { x: 0, y: 10 }
      };
    } else {
      return { x: 0, y: 0 };
    }
  },
});
