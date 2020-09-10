<template>
  <div class="main">
    <div class="header">
      <router-link :to="{ name: 'Result' }" class="bag_1">
        <van-icon name="arrow-left" />
      </router-link>
      <router-link :to="{ name: 'Home' }" class="bag">
        <van-icon name="weapp-nav" />
      </router-link>
    </div>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave()"
      @delete="onDelete"
      @change-detail="onChangeDetail"
      ref="AddressEdit"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
import { addressAdd } from "../../serivces/address";
import areaList from "@/utils/address.js";

export default {
  data() {
    return {
      searchResult: [],
      areaList,
    };
  },
  methods: {
    async onSave() {
      console.log(this.$refs.AddressEdit._data.data);
      await addressAdd();

      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail() {
      this.searchResult = [];
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
  /* margin-left: 0.2rem; */
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
