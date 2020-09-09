<template>
  <div class="min">
    <div style="background:#ffefef;">
      <div class="header">
        <router-link :to="{ name: 'Cart-updata' }" class="bag_1">
          <van-icon name="arrow-left" />
        </router-link>
        <router-link :to="{ name: 'Cart-updata' }" class="bag">
          <van-icon name="weapp-nav" />
        </router-link>
      </div>
      <div class="min-cart">
        <div class="tou">
          <van-icon name="smile-o" class="pic" size="60" />
        </div>
        <div class="tou-name">
          <div class="p" style="font-size:24px;margin-top: 20px;">
            vivo47621...
          </div>
          <i><van-icon name="vip-card" />黄金会员</i>
        </div>
        <div class="gift">
          礼包广场
        </div>
      </div>
    </div>
    <ul class="headlist">
      <li>
        <p class="p1">0</p>
        <i style="font-style: normal;font-size:14px;">优惠劵</i>
      </li>
      <i style="margin-top:16px">|</i>
      <li>
        <p class="p2">0</p>
        <i style="font-style: normal; font-size:14px;">换新鼓励金</i>
      </li>
      <i style="margin-top:16px">|</i>
      <li>
        <p class="p3">20</p>
        <i style="font-style: normal;font-size:14px;">积分</i>
      </li>
    </ul>
    <p style="margin:16px 0">
      <i style="font-style: normal;margin-left:18px;">我的订单</i>
      <i style="font-style: normal;font-size:13px;float: right;"
        >更多<van-icon name="arrow"
      /></i>
    </p>
    <ul class="headlist">
      <li>
        <van-icon name="debit-pay" style="font-size:20px;margin-left:12px;" />
        <p>代付款</p>
      </li>
      <li>
        <van-icon
          name="cash-on-deliver"
          style="font-size:20px;margin-left:12px;"
        />
        <p>代收货</p>
      </li>
      <li>
        <van-icon name="other-pay" style="font-size:20px;margin-left:12px;" />
        <p>代评价</p>
      </li>
      <li>
        <van-icon name="tosend" style="font-size:20px;margin-left:24px;" />
        <p>退货/退款</p>
      </li>
    </ul>
    <ul class="content">
      <li>
        <van-icon name="notes-o" style="float:left;margin:18px" />我的回执单<i
          ><van-icon name="arrow"
        /></i>
      </li>
      <li>
        <van-icon name="point-gift-o" style="float:left;margin:18px" />我的奖品
        <i><van-icon name="arrow"/></i>
      </li>
      <li>
        <van-icon
          name="goods-collect-o"
          style="float:left;margin:18px"
        />我的收藏<i><van-icon name="arrow"/></i>
      </li>
      <li>
        <van-icon name="chat-o" style="float:left;margin:18px" />我的评价<i
          ><van-icon name="arrow"
        /></i>
      </li>
      <li>
        <van-icon name="bullhorn-o" style="float:left;margin:18px" />我的问答<i
          ><van-icon name="arrow"
        /></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
html,
body {
  font-size: 16px;
}
.main {
  padding: 0;
}
.header {
  width: 100%;
  height: 56px;
}
.bag_1 {
  width: 30px;
  height: 56px;
  line-height: 56px;
  display: block;
  float: left;
  color: #000;
  margin-left: 0.2rem;
  font-size: 1.2rem;
}
.bag {
  line-height: 56px;
  width: 30px;
  height: 56px;
  display: block;
  float: right;
  color: #000;
  margin-left: 1.5rem;
  font-size: 1.2rem;
}
.min-cart {
  height: 112px;
  width: 100%;
}
.tou {
  height: 112px;
  width: 112px;
  float: left;
  font-size: 60px;
  line-height: 112px;
  text-align: center;
}
.tou-name {
  height: 112px;
  width: 112px;
  float: left;
}
.tou .p {
  width: 100%;
  height: 20px;
}
.tou i {
  font-size: 22px;
}
.gift {
  float: right;
  background-color: red;
  color: #fff;
  margin-top: 40px;
  width: 77px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  border-top-left-radius: 0.7rem;
  border-bottom-left-radius: 0.7rem;
}
.headlist {
  display: flex;
  justify-content: space-around;
  flex: 1;
  overflow: hidden;
}
.p1 {
  font-size: 1.4rem;
  height: 0.39rem;
  line-height: 0.39rem;
  margin-top: 0.55rem;
  vertical-align: top;
  color: #000;
  font-weight: 700;
  padding-left: 18px;
  margin-bottom: 20px;
}
.p2 {
  font-size: 1.4rem;
  height: 0.39rem;
  line-height: 0.39rem;
  margin-top: 0.55rem;
  margin-bottom: 20px;
  vertical-align: top;
  color: #000;
  font-weight: 700;
  padding-left: 28px;
}
.p3 {
  font-size: 1.4rem;
  height: 0.39rem;
  line-height: 0.39rem;
  margin-top: 0.55rem;
  vertical-align: top;
  color: #000;
  font-weight: 700;
  padding-left: 6px;
  margin-bottom: 20px;
}
.content {
  min-height: 100px;
  width: 100%;
}
.content > li {
  width: 100%;
  height: 56px;
  line-height: 56px;
  font-size: 18px;
}
.content > li i {
  float: right;
  margin-top: 10px;
  margin-right: 10px;
}
</style>
