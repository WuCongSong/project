<template>
  <div class="main">
    <div class="header">
      <router-link :to="{ name: 'Personal' }" class="bag">
        <van-icon name="arrow-left" />
      </router-link>
      <div class="result">结算</div>
      <router-link :to="{ name: 'Home' }" class="bag">
        <van-icon name="weapp-nav" />
      </router-link>
    </div>
    <div class="addlist">
      <div class="add" @click="address">
        <p style="margin:0;">收货人：<b>张三</b> <b>136****808</b></p>
        <i style="margin:0;font-size:10px;"
          >浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室</i
        >
      </div>

      <div class="xiao"><van-icon name="arrow" @click="addresslist" /></div>
    </div>
    <p style="font-size:12px;padding-left:10px;">商品清单</p>
    <ul class="content">
      <li v-for="(item, index) in list" :key="index">
        <van-card
          class="v-cart"
          :num="item.quantity"
          :price="item.product.price"
          :title="item.product.name"
          :thumb="item.product.coverImg"
        >
        </van-card>
      </li>
    </ul>
    <!-- 优惠券单元格 -->
    <van-coupon-cell
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      @click="showList = true"
    />
    <!-- 优惠券列表 -->
    <van-popup
      v-model="showList"
      round
      position="bottom"
      style="height: 90%; padding-top: 4px;"
    >
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
    <van-submit-bar :price="sumprice * 100" button-text="提交订单" />
  </div>
</template>

<script>
import Vue from "vue";
import { CouponCell, CouponList } from "vant";
import { loadCarts } from "../../serivces/cart";

Vue.use(CouponCell);
Vue.use(CouponList);

const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150 * 100,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元",
};

export default {
  data() {
    return {
      showList: false,
      list: [],
      arr: [],
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
    };
  },
  created() {
    loadCarts().then((res) => {
      res.data.forEach((v) => {
        v.checked = true;
      });
      this.list = res.data;
      console.log(res.data[0].product);
    });
  },
  computed: {
    sumprice() {
      return (
        this.list
          .filter((item) => item.checked)
          //聚合运算
          .reduce((pre, cur) => {
            return pre + cur.product.price * cur.quantity;
          }, 0)
      );
    },
  },
  methods: {
    address() {
      this.$router.push({ path: "/address" });
    },
    addresslist() {
      this.$router.push({ path: "/address-list" });
    },
    // 优惠劵列表
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange() {
      this.coupons.push(coupon);
    },
  },
};
</script>
<style scoped>
.main {
  min-height: 100px;
  width: 100%;
  overflow: hidden;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  height: 56px;
}
.bag {
  width: 30px;
  height: 56px;
  display: block;
  float: left;
  color: #000;
  line-height: 56px;
  font-size: 0.2rem;
}
.result {
  width: 80%;
  height: 56px;
  overflow: hidden;
  text-align: center;
  line-height: 56px;
  float: left;
  font-size: 22px;
}
.addlist {
  width: 100%;
  height: 40px;
}
.add {
  float: left;
  margin-left: 0.1rem;
}
.xiao {
  float: right;
  margin-right: 0.1rem;
  color: #e9e7ef;
}
.content {
  min-height: 100px;
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.content li {
  width: 90%;
  margin-left: 0.8rem;
}
</style>
