import Vue from "vue";
import VueRouter from "vue-router";


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
];

const router = new VueRouter({
  routes,
});

export default router;
