<template>
  <div class="Homes">
    <!-- nav头部 -->
    <div class="HomeTop">
      <van-nav-bar title="VIVO">
        <template #left>
          <van-icon name="wap-nav" size="28" @click='btns' />
        </template>
        <template #right>
          <van-icon name="search" size="28" />
        </template>
      </van-nav-bar>
    </div>
    <!-- 主体内容 -->
    <div class="HomeCenter">
      <Swipe></Swipe>
      <!-- 列表分类 -->
      <div class="mianCenter">
        <ul class="mianCente" route>
          <li @click="to">
            <img 
              src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20180702/20180702200727214479_original.png"
              alt
            />
          </li>
          <li>
            <img
              src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20180702/201807022008414677_original.png"
              alt
            />
          </li>
          <li>
            <img
              src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20180702/20180702200936862132_original.png"
              alt
            />
          </li>
          <li>
            <img
              src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20180702/20180702201232196764_original.png"
              alt
            />
          </li>
          <li>
            <img
              src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20200628/20200628105215263196_original.png.webp"
              alt
            />
          </li>
          <li>
            <img
              src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20200826/20200826165958839683_original.png.webp"
              alt
            />
          </li>
          <li>
            <img
              src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20200826/20200826170037395627_original.png.webp"
              alt
            />
          </li>
          <li>
            <img
              src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20180702/2018070220141024770_original.png"
              alt
            />
          </li>
        </ul>
      </div>
      <!-- 抢购区 -->
      <div class="purchase">
        <div class="purchases">
          <span>V抢购</span>
          <h3>距离本次结束</h3>
          <van-count-down :time="time">
            <template #default="timeData">
              <span class="block">{{ timeData.hours }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.minutes }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.seconds }}</span>
            </template>
          </van-count-down>
        </div>
        <span>更多场次></span>
      </div>
      <!-- 抢购区展示 -->
  <indexMain />
<!-- 精品手机区展示 -->
<van-divider
  :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
>
  精品手机
</van-divider>
<Mians></Mians>

<van-divider
  :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
>
  热卖推荐
</van-divider>

<seller></seller>

    </div>
    
  </div>
</template>

<script>
import Swipe from "./Home/Swipe";
import indexMain from './Home/mian';
// import Mian from './Home/main';
import Mians from './Home/Mians'
import seller from './Home/seller'
export default {


   data() {
    return {
      time: 30 * 60 * 60 * 1000,
    };
  },
  components: {
    Swipe,
    indexMain,
    Mians,
    seller,
  },
  methods:{
    to(){
      this.$router.push({name:"PhoneList"})
    },
    btns(){
      this.$router.push({name:"ListPos"})
    }
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}

.HomeTop {
  position: fixed;
  width: 100%;
  height: 0.23rem;
  top: 0;
  left: 0;
  right: 0;
  background: #ccc;
  z-index: 6;
}
.HomeCenter {
  width: 100%;
  height: 100%;
  padding: 50px 0px 50px 0px;
  overflow: auto;
}
.van-nav-bar__title {
  font-size: 26px;
}
.mianCenter {
  width: 100%;
  height: 148px;
}
.mianCenter .mianCente {
  width: 100%;
  height: 130px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.mianCenter .mianCente li {
  width: 93px;
  height: 67px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mianCenter .mianCente li img {
  width: 54px;
  height: 54px;
}
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
}
.purchase {
  width: 100%;
  height: 50px;
  display: flex;
  font-size: 12px;
  justify-content: space-around;
  align-items: center;
}
.purchases {
  width: 212px;
  height: 50px;
  font-size: 14px;
  display: flex;
  align-items: center;
}
.purchases h3 {
  font-size: 12px;
  margin: 0 5px;
}
</style>