import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";
import Index from "@/admin/pages/Home.vue";
import Login from "@/admin/pages/auth/Login.vue";

const routes = [
  {
    path: "/home",
    name: "index",
    component: Index,
    meta: { title: "Home" },
  },
  {
    path: "/",
    name: "login",
    component: Login,
    meta: { title: "Login" },
  },
  

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0, behavior: "smooth" };
  },
});

const default_title = "404";
// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title || default_title;
//   NProgress.start();
//   // check user loggedin
//   const loggedIn = useAuth();
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!loggedIn.user.meta) {
//       next({ name: "user.login" });
//     } else {
//       next();
//     }
//   } else if (to.matched.some((record) => record.meta.guest)) {
//     if (loggedIn.user.meta) {
//       next({ name: "user.profile" });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

router.afterEach(() => {
  NProgress.done();
});

export default router;
