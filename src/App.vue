<template>
  <div id="app">
    <router-view class="mianHome" />
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home" :to="{name:'Home'}">首页</van-tabbar-item>
      <van-tabbar-item icon="point-gift" :to="{name:'Order'}">热卖</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart" :to="{name:'Personal'}">购物车</van-tabbar-item>
      <van-tabbar-item icon="friends" :to="{name:'Shopping'}">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.mianHome {
  flex: 1;
  overflow: auto;
}
</style>
