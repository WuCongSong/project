<template>
  <div class="nutr">
    <ul class="nutra">
      <li v-for="item in list" :key="item._id">
        <img :src="item.coverImg" alt />
        <p>{{item.name}}</p>
      </li>
      <li class="nutrsa">
        <span>
          <i class="fa fa-th-large"></i>
          <strong>全部机型</strong>
        </span>
        <span>
          <i class="fa fa-tablet"></i>
          <strong>全部机型</strong>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { getData } from "../../../serivces/musik";
export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    getData(1, 5).then((res) => {
      this.list = res.data.products;
    });
  },
};
</script>

<style>
.nutr {
  width: 100%;
  padding: 0 30px;

}
.nutra {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.nutra li {
  width: 146px;
  height: 193px;
  text-align: center;
  padding: 20px 0;
  margin: 5px 0;
}
.nutra li img {
  width: 111px;
  height: 111px;
  margin: auto;
}
.nutra li p {
  margin: 10px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 0 16px;
}
.nutrsa {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nutrsa span {
  display: block;
  width: 130px;
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  border-radius: 30px;
  margin: 10px 0;
  background: #F1F1F1;
}
.nutrsa span strong {
  margin: 0 5px;
}
</style>