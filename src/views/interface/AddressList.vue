<template>
  <div class="main">
    <div class="header">
      <router-link :to="{ name: 'Result' }" class="bag_1">
        <van-icon name="arrow-left" />
      </router-link>
      <a href="" class="bag"><van-icon name="weapp-nav"/></a>
    </div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import Vue from "vue";
import { AddressList } from "vant";
import { Toast } from "vant";
// import { addressList } from '../services/address'

Vue.use(AddressList);
export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true,
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号",
        },
      ],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号",
        },
      ],
    };
  },
  // created(){
  //   axios.get('http://localhost:3009/api/v1/addresses')
  //   .then(res=>{
  //     this.list=res
  //   })
  // },
  methods: {
    onAdd() {
      Toast("新增地址");
      this.$router.push({ path: "/address" });
    },
    onEdit(item, index) {
      Toast("编辑地址:" + index);
    },
  },
};
</script>

<style scoped>
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
  font-size: 0.2rem;
}
.bag {
  line-height: 56px;
  width: 30px;
  height: 56px;
  display: block;
  float: right;
  color: #000;
  margin-left: 1.5rem;
  font-size: 0.2rem;
}
</style>
