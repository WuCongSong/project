import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
// 引入自定义样式
import Index from "./assets/css/index.css";
Vue.use(Index);
// 导入全局路由
import router from "./router";
// 导入vantUi组件
import Vant from "vant";
import "vant/lib/index.css";
import { AddressEdit, Area, Icon } from "vant";

Vue.use(Icon);
Vue.use(AddressEdit);
Vue.use(Area);
Vue.use(Vant);
Vue.use(Vuex);
Vue.config.productionTip = false;
//照片没有出来是因为前缀不对，因此应该加一个过滤器
Vue.filter("dalImg", (img) => {
  if (img && img.startsWith("http")) {
    return img;
  }
  return "http://localhost:3009" + img;
});
const store = new Vuex.Store({
  state: {
    mount: 0,
  },
  mutations: {
    buy(state, step) {
      state.mount = step;
    },
  },
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
