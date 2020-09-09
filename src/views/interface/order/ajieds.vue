<template>
  <div class="liejfd">
       <div class="sellerc">
      
        <ul class="selleraa">
          <li v-for="item in list" :key="item._id">
            <img :src="item.coverImg" alt="">
            <h3>{{item.name}}</h3>
            <p>{{item.descriptions}}</p>
            <span>¥{{item.price}}</span>
          </li>
        </ul>
      </div>
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
    getData(1, 16).then((res) => {
      this.list = res.data.products;
    });
  },
  methods:{
    set(){
      this.$router.push({name:'OrderList'})
    }
  }
};
</script>

<style>
.liejfd{
flex: 1;

}
.selleraa{
  display: flex;
  flex: 1;
   flex-wrap: wrap;
   margin-top: 10px;
}
.selleraa li{
  width:150px;
  height: 210px;
}
.sell{
  width:310px;
 
}
.sellerc{
  width: 100%;
  height: 100%;
  overflow: auto;
}
.selleraa li img{
  width: 120px;
  height: 120px;
  margin: auto;
}
.selleraa li h3{
width: 100%;
height: 16px;
text-align: center;
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
font-size: 12px;
padding: 0 6px;
}
.selleraa li p{
width: 100%;
height:36px;
font-size: 12px;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 1;
padding: 5px 6px;
overflow: hidden;
}
.selleraa li span{
font-size: 12px;
padding-top: 5px;
display: block;
text-align: center;
}
.my-swipes .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
.my-swipes img{
  width: 100%;
  height: 100%;
}

</style>
