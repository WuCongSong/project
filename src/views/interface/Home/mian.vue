<template>
  <div class="SwipeCenter">
    <ul class="SwipeCenters">
      <li v-for="item in list" :key="item._id">
        <img :src="item.coverImg" alt />
        <p>{{ item.name }}</p>
        <div class="SwipeCentera">
          <strong>￥{{ item.price }}</strong>
          <span>¥669</span>
        </div>
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
    getData(1, 20).then((res) => {
      this.list = res.data.products;
    });
  },
};
</script>

<style>
.SwipeCenter {
  width: 95%;
  height: 172px;
  padding: 0 2px;
  overflow: hidden;
  margin-left: 15px;
}
.SwipeCenters {
  width: 100%;
  height: 182px;
  display: flex;
  justify-content: center;
  overflow: auto;
  overflow: scroll;
}
.SwipeCenters li {
  width: 96px;
  height: 100%;
  font-size: 12px;
}
.SwipeCenters li p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  padding: 0 5px;
}
.SwipeCenters li img {
  width: 96px;
  height: 102px;
}
.SwipeCenters li .SwipeCentera {
  text-align: center;
  
}
.SwipeCenters li .SwipeCentera strong {
  text-align: center;
  margin-right: 3px;
  color: red;
}
.SwipeCenters li .SwipeCentera span {
  text-decoration: line-through;
}
</style>