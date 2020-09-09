<template>
  <div class="main">
    <div class="header">
      <b>购物车</b>
      <p @click="isShow = !isShow">
        {{ isShow ? "编辑" : "完成" }}
      </p>
    </div>
    <ul class="content">
      <li v-for="(item, index) in list" :key="index">
        <div class="cek">
          <input v-model="item.checked" type="checkbox" />
        </div>
        <div class="cart-list">
          <van-card
            class="v-cart"
            :price="item.product.price"
            :title="item.product.name"
            :thumb="item.product.coverImg"
          >
            <template #footer>
              <van-button
                v-show="!isShow"
                @click="remove(item)"
                type="danger"
                size="mini"
                >删除</van-button
              >
              <van-stepper v-model="item.quantity" v-show="isShow" />
            </template>
          </van-card>
        </div>
      </li>
    </ul>
    <!-- 全选 -->
    <div>
      <van-submit-bar
        :price="sumprice * 100"
        button-text="去结算"
        @submit="onSubmit"
        class="pri"
      >
        <van-checkbox v-model="checkAll">全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { Remove } from "../../serivces/delete";
import { loadCarts } from "../../serivces/cart";

export default {
  data() {
    return {
      list: [],
      isShow: true, //显示
      a: 0,
    };
  },
  created() {
    loadCarts().then((res) => {
      // 给商品添加一个checked属性
      let num = 0;
      res.data.forEach((v) => {
        v.checked = true;
        this.a += v.quantity;
        // if (v.checked) {
        //   arr.push(v);
        // }
        // console.log(arr);
        num++;
      });
      // console.log(num);
      localStorage.setItem("num", num);
      this.$store.commit("buy", this.a);
      this.list = res.data;
      // console.log(res.data[0].product);
    });
  },
  computed: {
    checkAll: {
      get() {
        return this.list.every((item) => item.checked);
      },
      set(v) {
        this.list.forEach((item) => (item.checked = v));
      },
    },
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
    onSubmit() {
      // setToken ({

      // })
      this.$router.push({ path: "/result" });
    },
    async remove(item) {
      const res = await Remove(item._id);
      console.log(res);
      Toast.success("删除成功");
      history.go(0);
    },
  },
};
</script>

<style scoped>
.main {
  padding: 0;
}
.header {
  height: 60px;
  width: 100%;
  background-color: #f00056;
  position: fixed;
  z-index: 9;
}
.header b {
  display: block;
  float: left;
  line-height: 60px;
  font-size: 20px;
  width: 80px;
  height: 60px;
  margin-left: 160px;
  font-family: "宋体";
}
.header p {
  display: block;
  float: right;
  margin-top: 5px;
  margin-right: 5px;
  font-family: "楷体";
}
.content {
  margin-bottom: 60px;
  margin-top: 60px;
}
.content li {
  height: 132px;
  width: 100%;
}
.cek {
  height: 5px;
  width: 3%;
  float: left;
  margin-top: 40px;
  margin-left: 2px;
}
.cart-list {
  height: 132px;
  width: 94%;
  float: right;
}
.pri {
  margin-bottom: 50px;
}
</style>
