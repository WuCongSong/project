<template>
  <div id="app">
    <router-view class="mianHome" />
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home" :to="{ name: 'Home' }"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="point-gift" :to="{ name: 'Ordere' }"
        >热卖</van-tabbar-item
      >
      <van-tabbar-item icon="shopping-cart" :to="{ name: 'Personal' }"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="friends" :to="{ name: 'Shopping' }"
        >个人中心</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
// import { loadCarts } from "./services/cart";
// import { isLogined } from "./utils/auth";

export default {
  data() {
    return {
      active: 0,
      a: 0,
    };
  },
  // created() {
  //   if (isLogined()) {
  //     loadCarts().then((res) => {
  //       res.data.forEach((v) => {
  //         v.checked = true;
  //         this.a += v.quantity;
  //       });
  //       console.log(this.a);
  //       this.$store.commit("buy", this.a);
  //     });
  //   }
  // },
};
</script>

<style>
html {
  font-size: 26.67vw;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#app .mianHome {
  flex: 1;
  overflow: auto;
}
</style>
