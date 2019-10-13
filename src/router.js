import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Auth from "./services/auth.service";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/our-products",
      name: "products",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "products" */ "./views/Product-list.vue")
    },
    {
      path: "/our-products/:id",
      name: "products.details",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "products.details" */ "./views/Product-single.vue"
        )
    },
    {
      path: "/sign-up",
      name: "signup",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "signup" */ "./views/Sign-up.vue")
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Login.vue"),
      beforeEnter: (to, from, next) => {
        if (Auth.checkAuth()) next("/contracts");
        else next();
      }
    },
    {
      path: "/your-contracts",
      name: "contracts",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Contract-list.vue"),
      beforeEnter: (to, from, next) => {
        if (!Auth.checkAuth()) next("/login");
        else next();
      }
    },
    {
      path: "/logout",
      name: "logout",
      beforeEnter: (to, from, next) => {
        Auth.logout();
        next("/");
      }
    }
  ]
});
