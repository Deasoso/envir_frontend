<template>
  <div class="demo-page">
<div >
  <mt-navbar v-model="selected">
  <mt-tab-item id="1" class="nav">全部订单</mt-tab-item>
  <mt-tab-item id="2" class="nav">已兑换</mt-tab-item>
  <mt-tab-item id="3" class="nav">待兑换</mt-tab-item>
  <mt-tab-item id="4" class="nav">售后/退款</mt-tab-item>
</mt-navbar>
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
      <div class="main auto">
                <div class="one">
                    <div class="left">
                        <a href="#">
                        <img class="left" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577290194&di=3eb91efb6db04457ca0549ebe984d018&imgtype=jpg&er=1&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180211%2F01%2F1518283100-rGuwWcThEz.jpg" alt="">
                        <div class="left">xxxxxxx店铺</div>
                        </a>
                    </div>
                    <div class="right">交易成功</div>
                </div>
                <div class="two">
                    <div class="left img">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577290194&di=3eb91efb6db04457ca0549ebe984d018&imgtype=jpg&er=1&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180211%2F01%2F1518283100-rGuwWcThEz.jpg" alt />
                    </div>
                    <div class="left text">
                        <h2>环保钥匙扣xxxxxxxxx</h2>
                        <h5>可爱环保钥匙扣哦可爱环保钥匙扣哦可爱环保钥匙扣哦可爱环保钥匙扣哦可爱环保钥匙扣哦可爱环保钥匙扣哦</h5>
                    </div>
                    <div class="right org">
                        100积分
                    </div>
                    </div>
                    <div class="three">
                        <div class="right"><mt-button @click.native="handleClick" class="btn">再次购买</mt-button></div>
                        <div class="right"><mt-button @click.native="handleClick" class="btn">评价订单</mt-button></div>
                        <div class="right"><mt-button @click.native="handleClick" class="btn">删除订单</mt-button></div>
                    </div>
            </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
  </mt-tab-container-item>
  <mt-tab-container-item id="4">
    
  </mt-tab-container-item>
</mt-tab-container>
</div>
</div>
</template>

<script>
module.exports = {
  data() {
    return {
      title: 'MoBan',
      value: [20, 50],
      selected: 2,
    }
  }
}
</script>

<style scoped>
.demo-page{
  background-color: rgb(225, 255, 196);
  height: 650px;
}
.left {
  float: left;
}
.right {
  float: right;
}
.auto {
  width: 95%;
  margin: auto;
}
.org{
  color: rgb(243, 92, 32);
}
.demo-page .nav{
   background-color: rgb(225, 255, 196);
   /* border: solid rgb(212, 206, 206) 1px; */
}
.header .auto {
  height: 70px;
}
.header .auto .left {
  font-size: 35px;
  padding-top: 10px;
  margin-right: 100px;
}
.header .auto .right {
  font-size: 35px;
  padding-top: 10px;
  margin-right: 20px;
}
.main {
  background-color: rgba(81, 255, 139, 0.5);
  border-radius: 10px;
  height: 300px;
  margin-bottom: 30px;
}
.main .one {
  height: 55px;
  border-bottom:solid rgb(173, 128, 128) 2px;
}
.main .one .left {
  padding-top: 10px;
  font-size: 20px;
  margin-right: 30px;
  margin-left: 10px;
}
.main .one .left img{
  width: 40px;
  height: 40px;
  border-radius: 10%;
}
.main .one .right {
  padding-top: 20px;
  font-size: 20px;
  margin-right: 10px;
}
.main .two {
  margin-top: 10px;
  height: 160px;
}
.main .two img {
  width: 150px;
  height: 150px;
  border-radius: 10px;
  margin-left: 20px;
}
.main .two .text {
  width: 25%;
  height: 150px;
  margin-left: 25px;
  font-size: 19px;
}
.main .two .right {
  width: 12%;
  height: 150px;
  font-size: 20px;
}
.mian .three {
  margin-top: 5px;
}
.btn{
  margin-right: 20px;
  width: 90%;
  height: 50px;
}
</style>
