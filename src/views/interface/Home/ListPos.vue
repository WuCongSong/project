<template>
  <div class="postn">
    <div class="postnd">
      <van-nav-bar title="VIVO">
        <template #left>
          <van-icon name="cross" size="28" @click="tacej" />
        </template>
        <template #right>
          <van-icon name="search" size="28" />
        </template>
      </van-nav-bar>
    </div>
    <div class="ferdns">
      <van-collapse v-model="activeName" accordion >
        <van-collapse-item title="NEX系列" name="1" ><nexs /></van-collapse-item>
        <van-collapse-item title="X系列" name="2"><nexspo /></van-collapse-item>
        <van-collapse-item title="S系列" name="3"><nexspos /></van-collapse-item>
          <van-collapse-item title="Y系列" name="4"></van-collapse-item>
        <van-collapse-item title="Z系列" name="5"></van-collapse-item>
        <van-collapse-item title="U系列" name="6"></van-collapse-item>
        <van-collapse-item title="硬件智能" name="7"></van-collapse-item>
        <van-collapse-item title="商城" name="8"></van-collapse-item>
        <van-collapse-item title="服务" name="9"></van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script>
import nexs from '../listpoda/nexs'
import nexspo from '../listpoda/nexspo'
import nexspos from '../listpoda/nexspos'
export default {
    data() {
    return {
      activeName: '0',
    };
  },
  components:{
     nexs,
     nexspo,
     nexspos,
  },
  methods: {
    tacej() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style>
.postnd{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
   z-index: 6;
}
.ferdns{
 margin: 46px 0 0 0;
}
</style>