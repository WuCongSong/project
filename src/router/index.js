import Vue from "vue";
import VueRouter from "vue-router";
import { isLogined } from "../utils/auth";

Vue.use(VueRouter);
const routes = [
  // 首页
  {
    path: "/",
    name: "Home",
    component: () => import("../views/interface/Home.vue"),
  },
  // 首页左上角列表页
  {
    path: "/listpos",
    name: "ListPos",
    component: () => import("../views/interface/Home/ListPos.vue"),
  },
  // 热卖
  {
    path: "/order",
    name: "Order",
    component: () => import("../views/interface/order.vue"),
    // 热卖中的子路由
    children: [
      {
        path: "/ordere",
        name: "Ordere",
        component: () => import("../views/interface/order/ordere.vue"),
      },
      {
        path: "/orderList",
        name: "OrderList",
        component: () => import("../views/interface/order/orderList.vue"),
      },
      {
        path: "/fief",
        name: "Fief",
        component: () => import("../views/interface/order/fief.vue"),
      },

      {
        path: "/loed",
        name: "Loed",
        component: () => import("../views/interface/order/loed.vue"),
      },
      {
        path: "/keidj",
        name: "Keidj",
        component: () => import("../views/interface/order/keidj.vue"),
      },

      {
        path: "/iejde",
        name: "Lejde",
        component: () => import("../views/interface/order/iejde.vue"),
      },
      {
        path: "/hiefd",
        name: "Hiefd",
        component: () => import("../views/interface/order/hiefd.vue"),
      },
      {
        path: "/diae",
        name: "Diae",
        component: () => import("../views/interface/order/diae.vue"),
      },
      {
        path: "/ajieds",
        name: "ajieds",
        component: () => import("../views/interface/order/ajieds.vue"),
      },
    ],
  },
  // 购物车
  {
    path: "/personal",
    name: "Personal",
    component: () => import("../views/interface/personal.vue"),
  },
  // 个人中心
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
