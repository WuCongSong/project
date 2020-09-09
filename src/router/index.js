import Vue from "vue";
import VueRouter from "vue-router";
import { isLogined } from "../utils/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/interface/Home.vue"),
  },
  {
    path: "/order",
    name: "Order",
    component: () => import("../views/interface/order.vue"),
  },
  {
    path: "/personal",
    name: "Personal",
    component: () => import("../views/interface/personal.vue"),
  },
  {
    path: "/shopping",
    name: "Shopping",
    component: () => import("../views/interface/shopping.vue"),
  },
  {
    path: "/result",
    name: "Result",
    component: () => import("../views/interface/Result.vue"),
  },
  {
    path: "/address",
    name: "Address",
    component: () => import("../views/interface/Address.vue"),
  },
  {
    path: "/address-list",
    name: "AddressList",
    component: () => import("../views/interface/AddressList.vue"),
  },
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    if (isLogined()) {
      next();
    } else {
      next({
        name: "Login",
      });
    }
  } else {
    next();
  }
});
export default router;
