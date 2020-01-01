
<template>

  <div class="back1" >
    
  <mt-header title="65">
      
    <router-link to="/" slot="left">
        <mt-button icon="back">我的客服</mt-button>
    </router-link>
    <mt-button class="btn1"  icon="more" slot="right"><a href="##"></a></mt-button>
  </mt-header>
  <div class="back" >
 <div class="middle" >
<mt-cell class="mt-cell"  >
  <div class="txt">
  <h2 class="a"><font color="black">Hi, 小黑</font></h2>
 
  <span class="b"><font size='1px'><font color="gray">已为你定制如下内容</font></font></span>
  </div>
  <span><button class="button" value="订阅收藏" ><font color="white">订阅收藏</font></button></span>
  <img class="img" slot="icon" src="https://img.alicdn.com/tfscom/i2/760989943/TB2L.3WXssa61BjSszcXXacMpXa_!!760989943.jpg_360x360xzq90.jpg_.webp" width="80" height="80">
</mt-cell>
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
          <div v-for="n in titlelist">
            <mt-cell :title= "n.name + '' + n.age"></mt-cell>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
        	<!-- cell组件 -->
          <mt-cell v-for="n in 3" title="tab-container 2"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
        	<!-- cell组件 -->
          <mt-cell v-for="n in 3" title="tab-container 3"></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
<div class="more">
  <span class="left"><font size='5px'><font color='black'>猜你关心</font></font></span>
  <span class="right"><font size='2px'><a href="##"><font color='blue'>发现更多</font></a></font></span>
</div>
<div class="btnn">
  <div class="btnn1"><a href="##">
   <img class="img1"  src="https://img.alicdn.com/imgextra/i2/771330123/O1CN01XKkgmu1CmNIHTi0es_!!0-saturn_solar.jpg_220x220.jpg_.webp" width="40" height="40">
    <br>
   <span class="span1">订单及扣款</span></a></div>

   <div class="btnn2"><a href="##">
  <img class="img2"  src="https://img.alicdn.com/imgextra/i4/12749755/O1CN01NGmTro2LvqCJjvPPI_!!0-saturn_solar.jpg_220x220.jpg_.webp" width="40" height="40">
   <br>
  <span class="span2">修改手机</span></a></div>
  <div class="btnn3"><a href="##">
  <img class="img3"  src="https://img.alicdn.com/imgextra/i1/133543765/O1CN01SQwiRD1dgPlXFffpW_!!0-saturn_solar.jpg_220x220.jpg_.webp" width="40" height="40">
   <br>
  <span class="span3">银行卡管理</span></a></div>
  <div class="btnn4"><a href="##">
   <img class="img4"  src="https://img.alicdn.com/imgextra/i4/29928842/O1CN01geMeSm2FBgaXX0rLs_!!0-saturn_solar.jpg_220x220.jpg_.webp" width="40" height="40">
    <br>
    <span class="span4"><a>提现额度查询</a></span></a></div>
</div>

</div>
</div>
</div>
</template>

<script>
export default {
  name: 'page-tab-container',
  data() {
    return {
      active: 'tab-container1',

      titlelist: [{
      
        name: '点击',
        age: '进入，兑换会员好礼'
      },
      {
        name: '使用',
        age: '攻略'
      },
        {
        name: '加分',
        age: '小妙招'
      }]
    };
  },
  methods:{
    changeimgname(){

    }
  }
};
</script>

<style scoped>
.back1{
  background-color: antiquewhite;
}
.header{
width: 100%;
height:20%;
}
.btn1{
    width: 20%;
    height: auto;
    background:rgba(0,0,0,0.1)
} 
 Icon{
  background: #00cc66;
  float: left;

}
.back{
  width: 100%;
  height: 100%;
  

}
.middle{
  
 
  width: 95%;
  margin: 0 auto;
}
.img{
  
  float: left;
  margin: auto;
  
}
.txt{
  
 
  margin: auto ;

}
.txt .a{
  color: #000;
   

}
.button{
margin: auto;
background-color: rgb(48, 148, 214)
}
.nav{
 width:100%; 
}
.page1,.page2{
  border: none;
  background-color: white;
  padding: 10;
  width: 33%;
  float: left;
}
.page3{
  background-color: white;
  
 width:34%;
  
}
.page-tab-container{
  border-bottom-style: groove;
}

.more{
  overflow: hidden;
  width: auto;
  background-color: white;
  height: 20%;
}
.left{
  float: left;
  
}
.right{
 float:right;
 margin-top: 8px;
  
}
.btnn{
  border-top: 1px solid silver;
  border-right: 1px solid silver;
   border-left: 1px solid silver;
   overflow: hidden;
  width:100%;
    background-color: white;

  display:inline-block;
  padding: 0;
  
}
.btnn1,.btnn2,.btnn3,.btnn4{
  display: block;
  float: left;
 
  padding: 30px 30px 0px 30px;
  width: 25%;
}
.btnn1 a:hover,.btnn2 a:hover,.btnn3 a:hover,.btnn4 a:hover{
color: #00cc66
}
a:hover{
 color: #00cc66 
}
</style>
