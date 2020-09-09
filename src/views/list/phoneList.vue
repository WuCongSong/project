<template>
  <div class="Lists">
      <div class="Listsa">
         <van-nav-bar title="VIVO" >
        <template #left >
          <van-icon name="arrow-left" size="28" @click="tace"/>
        </template>
        <template #right>
          <van-icon name="search" size="28" />
        </template>
      </van-nav-bar>
      </div>
      <van-tabs v-model="active" class="nture">
  <van-tab title="全部"><actives /></van-tab>
  <van-tab title="IQOO"><psindt /></van-tab>
  <van-tab title="NEX系列"><diest /></van-tab>
  <van-tab title="X系列"><pdefd /></van-tab>
  <van-tab title="S系列"><faxe /></van-tab>
  <van-tab title="Y系列"><xied /></van-tab>
  <van-tab title="Z系列"><ecadj /></van-tab>
  <van-tab title="U系列"><qude /></van-tab>
</van-tabs>
  </div>
</template>

<script>
import actives from './lists/actives'
import psindt from './lists/psindt'
import diest from './lists/diest'
import pdefd from './lists/pdefd'
import faxe from './lists/faxe'
import xied from './lists/xied'
import ecadj from './lists/ecadj'
import qude from './lists/qude'
export default {
  data() {
    return {
      active: 0,
    };
  },
  components:{
    actives,
    psindt,
    diest,
    pdefd,
    faxe,
    xied,
    ecadj,
    qude,
  },
  methods: {
    tace() {
      this.$router.push({ name: 'Home' })
    }
  },
}
</script>

<style>
html,body{
  height: 100%;
}
.nture{
  margin: 0 20px;
  padding: 46px 0 50px 0;
}
.Listsa{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 8;
}
</style>