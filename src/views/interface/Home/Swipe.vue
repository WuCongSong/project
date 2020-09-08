<template>
  <div class="Swipes">
      <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20200821/2020082116420361052_original.jpg"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20200808/20200808172458196499_original.jpg"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20200622/20200622144511741111_original.jpg"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20200709/2020070911052762327_original.jpg"
          alt
        />
      </van-swipe-item>
    </van-swipe>

 
  </div>
</template>

<script>
export default {};
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 256px;
  text-align: center;
  background-color: #39a9ed;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 100%;
}

</style>