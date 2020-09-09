<template>
  <div class="Mianfooter">
    <div class="footerImg">
      <img
        src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20200807/2020080717574765483_original.jpg.webp"
        alt
      />
    </div>
    <ul class="footerns">
      <li v-for="item in list" :key="item._id">
        <img
          :src="item.coverImg"
          alt
        />
        <h3>{{item.name}}</h3>
        <p>{{item.descriptions}}</p>
        <h4>¥{{item.price}}</h4>
      </li>
    </ul>
  </div>
</template>

<script>
import { getData } from '../../../serivces/musik'
export default {
    data(){
        return {
            list:[],
        }
    },
     created() {
    getData(1, 12).then((res) => {
      console.log(res.data.products);
      this.list = res.data.products;
      
    });
  },
};
</script>

<style>
.footerImg {
  width: 100%;
  height: 151px;
}
.footerImg img {
  width: 100%;
  height: 100%;
}
.footerns {
  width: 100%;
  display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.footerns li {
  width: 186px;
  height: 268px;
  text-align: center;
  padding: 20px 0;
}
.footerns li img {
  width: 107px;
  height: 107px;
  margin: auto;
}
.footerns li h3 {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 16px;
  margin-top: 20px;
  padding: 0 6px;
  
}
.footerns li p {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 12px;
  margin: 10px 0;
  padding: 0 6px;
}
.footerns li h4{
    font-size: 14px;
    color: red;
    margin-top: 20px;
}
</style>