import Vue from "vue";
import Router from "vue-router";
import Index from "./views/index.vue";
import Login from "./views/login.vue";
import Register from "./views/register.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      redirect: "/chats",
      component: Index,
      children: [
        {
          path: "/chats",
          name: "chats",
          component: () => import("./views/chats.vue")
        },
        {
          path: "/contacts",
          name: "contacts",
          component: () => import("./views/contacts.vue")
        },
        {
          path: "/discover",
          name: "discover",
          component: () => import("./views/discover.vue")
        },
        {
          path: "/me",
          name: "me",
          component: () => import("./views/me.vue")
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    }
  ]
});

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.wxToken ? true : false;
  if (to.path == "/login" || to.path == "/register") {
    next();
  } else {
    isLogin ? next() : next("/login");
  }
});

export default router;
