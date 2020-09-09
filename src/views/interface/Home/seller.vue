<template>
  <div class="sellers">
    <ul class="sellerss">
      <li>X50 Pro+</li>
      <li>iQOO Z1x</li>
      <li>vivo S7</li>
      <li>iQOO Neo 3</li>
      <li>胶囊数据线</li>
      <li>原装耳机</li>
      <li>免费制定</li>
      <li>碎屏保</li>
    </ul>

    <ul class="cellersa">
        <li>
            <h3>热门链接</h3>
            <span>+</span>
        </li>
         <li>
            <h3>在线购买</h3>
            <span>+</span>
        </li>
         <li>
            <h3>服务支持</h3>
            <span>+</span>
        </li>
         <li>
            <h3>VIVO社区</h3>
            <span>+</span>
        </li>
         <li>
            <h3>关于VIVO</h3>
            <span>+</span>
        </li>
         <li>
            <h3>热门链接</h3>
            <span>+</span>
        </li>
        <li>
            <h3>在线客服</h3>
        </li>
         <li>
            <h3>400-678-9688<br>全国客户服务热线 7*24小时</h3>
        </li>
         <li>
            <h3>400-679-9688<br>NEX 专属服务热线 7*24小时</h3>
        </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.sellers{
  display: flex;
  flex-direction: column;
}
.sellerss {
  width: 100%;
  height: 132px;
  display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   
}
.sellerss li {
  width: 70px;
  height: 29px;
  text-align: center;
  line-height: 29px;
  border-radius: 10px;
  font-size: 12px;
  border: 1px solid #ccc;
  margin: 5px 10px;
  
}
.cellersa{
    width: 100%;
  padding: 0 20px;
}
.cellersa li{
    width: 100%;
    height: 50px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   
}
.cellersa li h3{
font-size: 12px;
}
.cellersa li:nth-child(7) h3{
    color:#6DB4FB;
    font-size: 14px;
}
.cellersa li:nth-child(8) h3{
    color:#6DB4FB;
    font-size: 14px;
}
.cellersa li:nth-child(9) h3{
    color:#6DB4FB;
    font-size: 14px;
}
</style>