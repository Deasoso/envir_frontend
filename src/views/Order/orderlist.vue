<template>
  <div class="demo-page">
    <div>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1" class="nav">全部订单</mt-tab-item>
        <mt-tab-item id="2" class="nav">已兑换</mt-tab-item>
        <mt-tab-item id="3" class="nav">待兑换</mt-tab-item>
        <mt-tab-item id="4" class="nav">售后/退款</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">

        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          
        </mt-tab-container-item>
        <mt-tab-container-item id="3">

        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <div class="main auto">
      <div class="one">
        <img class="leftimg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577290194&di=3eb91efb6db04457ca0549ebe984d018&imgtype=jpg&er=1&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180211%2F01%2F1518283100-rGuwWcThEz.jpg">
        <div class="left">xxxxxxx店铺</div>
        <div class="right">交易成功</div>
      </div>
      <div class="two">
        <img class="leftimg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577290194&di=3eb91efb6db04457ca0549ebe984d018&imgtype=jpg&er=1&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180211%2F01%2F1518283100-rGuwWcThEz.jpg"/>
        <div class="left text">
          <h2>环保钥匙扣</h2>
          <h5>颜色：绿</h5>
        </div>
        <div class="right org">
          100积分
        </div>
      </div>
      <div class="three">
        再次购买|评价订单|删除订单
      </div>
    </div>
    <div class="main auto">
      <div class="one">
        <img class="leftimg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577290194&di=3eb91efb6db04457ca0549ebe984d018&imgtype=jpg&er=1&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180211%2F01%2F1518283100-rGuwWcThEz.jpg">
        <div class="left">xxxxxxx店铺</div>
        <div class="right">交易成功</div>
      </div>
      <div class="two">
        <img class="leftimg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577290194&di=3eb91efb6db04457ca0549ebe984d018&imgtype=jpg&er=1&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180211%2F01%2F1518283100-rGuwWcThEz.jpg"/>
        <div class="left text">
          <h2>环保钥匙扣</h2>
          <h5>颜色：绿</h5>
        </div>
        <div class="right org">
          100积分
        </div>
      </div>
      <div class="three">
        再次购买|评价订单|删除订单
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "MoBan",
      value: [20, 50],
      selected: 1
    };
  }
};
// 批改：1、注意文件格式
//      2、一般订单这里不会显示简介，那么多文字看着不累吗
//      3、这种多个同行显示可以用inline-block，尽量不用float
//      4、非文字点击可以不用<a>，用@click
//      5、图片控制得好是可以和边框完全对齐的（如果你想追求这种效果的话），
//         目前效果只是做个示范，并不一定是最好看的
</script>

<style scoped>
.demo-page {
  background-color: rgb(225, 255, 196);
  height: 650px;
}
.auto {
  width: 95%;
  margin: auto;
}
.org {
  color: rgb(243, 92, 32);
}
.demo-page .nav {
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
  height: 160px;
  margin-bottom: 10px;
}
.main .one {
  height: 55px;
  border-bottom: solid rgb(173, 128, 128) 2px;
}
.main .one .left {
  padding-top: 26px;
  font-size: 20px;
  width: calc(70% - 20px - 20px - 40px);
  display: inline-block;
}
.main .one .right {
  padding-top:28px;
  margin-right: 20px;
  font-size: 16px;
  width: 30%;
  text-align: right;
  display: inline-block;
  vertical-align: top;
}
.main .one .leftimg {
  margin-top: 8px;
  margin-left: 20px;
  width: 40px;
  height: 40px;
  border-radius: 10%;
  display: inline-block;
  vertical-align: top;
}
.main .two {
  margin-top: 10px;
  height: 100px;
}
.main .two .leftimg {
  width: 95px;
  height: 95px;
  border-radius: 10px;
  display: inline-block;
}
.main .two .text {
  margin-left: 10px;
  width: calc(80% - 95px - 20px - 10px);
  font-size: 14px;
  vertical-align: top;
  text-align: left;
  display: inline-block;
}
.main .two .right {
  margin-top: 48px;
  width: 20%;
  margin-right: 20px;
  font-size: 16px;
  text-align: right;
  vertical-align: top;
  display: inline-block;
}
.main .three {
  margin-right: 20px;
  margin-top: -30px;
  text-align: right;
  font-size: 12px;
}
.btn {
  margin-left: 10px;
  display: inline-block;
}
</style>
