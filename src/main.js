import Vue from "vue";
import App from "./App.vue";
// 引入自定义样式
import Index from "./assets/css/index.css";
Vue.use(Index);
// 导入全局路由
import router from "./router";
// 导入vantUi组件
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
