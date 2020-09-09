<template>
  <div class="actives">
    <ul class="actika">
      <li v-for="item in list" :key="item._id">
        <img :src="item.coverImg" alt />
        <h3>{{item.name}}</h3>
        <p>{{item.descriptions}}</p>
        <span>¥{{item.price}}</span>
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
    getData(5,4).then((res) => {
      console.log(res.data.products);
      this.list = res.data.products;
    });
  },
};
</script>

<style>
.actika {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: auto;
}
.actika li {
  width: 160px;
  height: 298px;
  padding: 10px 10px 0 10px;
  margin-bottom: 5px;
}
.actika li img {
  width: 130px;
  height: 130px;
  margin: auto;
}
.actika li h3 {
  width: 100%;
  height: 16px;
  font-size: 13px;
  margin: 20px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 0 6px;
}
.actika li p {
  width: 100%;
  height: 36px;
  font-size: 13px;
  margin: 20px 0;
  padding: 0 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.actika li span {
  display: block;
  width: 100%;
  height: 20px;
  text-align: center;
}
</style>