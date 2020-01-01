
<template>
  <div class="back1" >
    <!-- <mt-header title="65">
      <router-link to="/" slot="left">
          <mt-button icon="back">我的客服</mt-button>
      </router-link>
      <mt-button class="btn1"  icon="more" slot="right"><a href="##"></a></mt-button>
    </mt-header> -->
    <div class="back" >
      <!-- <div class="middle" >
        <mt-cell class="mt-cell" title="Hi, 小黑">
          <div class="txt">
            <div class="hitext"></div>
            <span class="dingzhitext">已为你定制如下内容</span>
          </div>
          <span><button class="button" value="订阅收藏">订阅收藏</button></span>
          <img class="avatarimg" slot="icon" src="https://img.alicdn.com/tfscom/i2/760989943/TB2L.3WXssa61BjSszcXXacMpXa_!!760989943.jpg_360x360xzq90.jpg_.webp">
        </mt-cell> -->
      <div class="top">
        <img class="top-avatar" :src="avatarurl" mode="aspectFit" alt=""/>
        <span>
          <div class="top-name">
            Hi，小黑
            <div class="top-num">
              已为你定制如下内容
            </div>
          </div>
          <div class="top-option">
            <button class="button top-option-button" value="订阅收藏">订阅收藏</button>
            <!-- <img class="top-option-icon" style="width: 12px;height: 18px;" :src="avatarurl"></img> -->
          </div>
        </span>
      </div>
      <div class="nav">
        <mt-button class="page1" @click.native.prevent="active = 'tab-container1'">管家提醒</mt-button>
        <mt-button class="page2" @click.native.prevent="active = 'tab-container2'">服务信息</mt-button>
        <mt-button class="page3"  @click.native.prevent="active = 'tab-container3'">福利&公益</mt-button>
      </div>
  <!-- tab-container -->
      <div class="page-tab-container">
        <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
          <mt-tab-container-item id="tab-container1">
            <!-- cell组件 -->
            <div v-for="n in titlelist" v-bind:key="n">
              <mt-cell :title="n.name + '' + n.age"></mt-cell>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container2">
            <mt-cell v-for="n in 3" v-bind:key="n" title="tab-container 2"></mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container3">
            <mt-cell v-for="n in 3" v-bind:key="n" title="tab-container 3"></mt-cell>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
      <div class="more">
        <span class="left">猜你关心</span>
        <span class="right"><a>发现更多</a></span>
      </div>
      <div class="btnn">
        <div class="btnn1"><a href="##">
          <img class="img1"  src="https://img.alicdn.com/imgextra/i2/771330123/O1CN01XKkgmu1CmNIHTi0es_!!0-saturn_solar.jpg_220x220.jpg_.webp" width="40" height="40">
          <div class="span1">订单及扣款</div></a>
        </div>
        <div class="btnn2"><a href="##">
          <img class="img2"  src="https://img.alicdn.com/imgextra/i4/12749755/O1CN01NGmTro2LvqCJjvPPI_!!0-saturn_solar.jpg_220x220.jpg_.webp" width="40" height="40">
          <div class="span2">修改手机</div></a>
        </div>
        <div class="btnn3"><a href="##">
          <img class="img3"  src="https://img.alicdn.com/imgextra/i1/133543765/O1CN01SQwiRD1dgPlXFffpW_!!0-saturn_solar.jpg_220x220.jpg_.webp" width="40" height="40">
          <div class="span3">银行卡管理</div></a>
        </div>
        <div class="btnn4"><a href="##">
          <img class="img4"  src="https://img.alicdn.com/imgextra/i4/29928842/O1CN01geMeSm2FBgaXX0rLs_!!0-saturn_solar.jpg_220x220.jpg_.webp" width="40" height="40">
          <div class="span4"><a>提现额度查询</a></div></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "page-tab-container",
  data() {
    return {
      active: "tab-container1",
      avatarurl: "https://img.alicdn.com/imgextra/i4/29928842/O1CN01geMeSm2FBgaXX0rLs_!!0-saturn_solar.jpg_220x220.jpg_.webp",
      titlelist: [
        {
          name: "点击",
          age: "进入，兑换会员好礼"
        },
        {
          name: "使用",
          age: "攻略"
        },
        {
          name: "加分",
          age: "小妙招"
        }
      ]
    };
  },
  methods: {
    changeimgname() {}
  }
};
// 批改：1、注意文件缩进格式
//      2、少用<br>，这个一般用于文字换行，在大多数
//         工程的设计稿中，一般会规定像素位置，此时
//         用padding或margin来定位置。
//      3、原本有header就不要定自己的header了
//      4、div最好换行中止，当然看你喜好
//      5、为啥用<font>，可以直接在css里规定字体样式
//      6、mt-cell有点辣鸡，似乎不能用来显示头像那一
//         行，我用inline-block重写了一下
//      7、犭青亻尔关心为什么这么大
</script>

<style lang="scss" scoped>
.back1 {
  background-color: antiquewhite;
}
.header {
  width: 100%;
  height: 20%;
}
.btn1 {
  width: 20%;
  height: auto;
  background: rgba(0, 0, 0, 0.1);
}
Icon {
  background: #00cc66;
  float: left;
}
.back {
  width: 100%;
  height: 100%;
}
.middle {
  width: 95%;
  margin: 0 auto;
}
.avatarimg {
  height: 86px;
  width: 86px;
  border-radius:50%;
  border: 3px solid white;
}
.txt {
  margin: auto;
}
.txt .hitext {
  text-align: center;
  color: #000;
}
.nav {
  width: 100%;
}
.page1,
.page2 {
  border: none;
  background-color: white;
  padding: 10;
  width: 33%;
  float: left;
}
.page3 {
  background-color: white;

  width: 34%;
}
.page-tab-container {
  border-bottom-style: groove;
}

.more {
  overflow: hidden;
  width: auto;
  background-color: white;
  height: 20%;
}
.left {
  float: left;
  margin-top: 10px;
  margin-left: 5px;
  font-size: 16px;
}
.right {
  float: right;
  margin-top: 14px;
  margin-right: 5px;
  font-size: 12px;
  color: blue;
  
}
.btnn {
  border-top: 1px solid silver;
  overflow: hidden;
  width: 100%;
  background-color: white;
  display: inline-block;
  padding: 0;
}
.btnn1,
.btnn2,
.btnn3,
.btnn4 {
  display: block;
  float: left;
  padding: 10px;
  width: 25%;
}
.btnn1 a:hover,
.btnn2 a:hover,
.btnn3 a:hover,
.btnn4 a:hover {
  color: #00cc66;
}
a:hover {
  color: #00cc66;
}
.top{
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #65c294;
  color: #ffffff;
  &-avatar{
    height: 86px;
    width: 86px;
    border-radius:50%;
    border: 3px solid white;
    vertical-align: top;
    display:inline-block;
  }
  &-name{
    width: calc(100% - 86px - 20px - 40px - 36px - 6px);
    display:inline-block;
    margin-left: 10px;
    margin-top: 20px;
    text-align: left;
  }
  &-num{
    font-size: 16px;
    margin-top: 5px;
    text-align: left;
  }
  &-option{
    display:inline-block;
    text-align: right;
    vertical-align: top;
    &-button{
      margin-top: 28px;
    }
  }
}
</style>

