<template>
  <div class="seller">
    <div class="head">
      <van-nav-bar title="VIVO">
        <template #left>
          <van-icon name="shop" size="28" @click="tacea" />
        </template>
        <template #right>
          <van-icon name="search" size="28" dot />
        </template>
      </van-nav-bar>
    </div>
    <div class="container">
      <div class="left-nav">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="全部" dot @click="order" />
          <van-sidebar-item title="iQOO" @click="ordec" />
          <van-sidebar-item title="N系列" @click="ordel" />
          <van-sidebar-item title="X系列" @click="ordef" />
          <van-sidebar-item title="S系列" @click="ordeq" />
          <van-sidebar-item title="Y系列" @click="ordet" />
          <van-sidebar-item title="Z系列" @click="ordeb" />
          <van-sidebar-item title="U系列" @click="ordez" />
          <van-sidebar-item title="O系列" @click="ordek" />
        </van-sidebar>
      </div>
      <router-view class="top"></router-view>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: 0,
    };
  },
  methods: {
    order() {
      this.$router.push({ name: "Ordere" });
    },
    ordec() {
      this.$router.push({ name: "OrderList" });
    },
    ordel() {
      this.$router.push({ name: "Fief" });
    },
    ordef() {
      this.$router.push({ name: "Loed" });
    },
    ordeq() {
      this.$router.push({ name: "Keidj" });
    },
    ordet() {
      this.$router.push({ name: "Lejde" });
    },
    ordeb() {
      this.$router.push({ name: "Hiefd" });
    },
    ordez() {
      this.$router.push({ name: "Diae" });
    },
    ordek() {
      this.$router.push({ name: "ajieds" });
    },
     tacea() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
.top{
  margin-bottom: 75px;
}
#seller {
  font-size: 16px;
  padding-top: 2px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: darkblue;
}
.head{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.head .search {
  width: 320px;
  font-size: 16px;
  background-color: darkblue;
}
.container {
  position: fixed;
  margin: 46px 0 50px 0;
  flex: 1;
  height: 100%;
  overflow: auto;
  display: flex;
  background-color: #f7f8fa;
}
.left-nav {
  height: 100%;
  overflow: auto;
}

</style>