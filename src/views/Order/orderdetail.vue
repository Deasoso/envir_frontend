<template>
  <div class="demo-page">
     <div class="header blue">
        <div class="main auto">
            <div class="top">
                <za-nav-bar class="blue">
                    <div slot="left">
                        <mt-button @click.native="handleClick" class="left blue btn white">《</mt-button>
                    </div>
                    <div slot="title" class="white text">订单详情</div>
                </za-nav-bar>
            </div>
            <div class="mid">
                <div class="left text white">已成交</div>
                <a href="#" class="right"><div class="right white">详细</div></a>
            </div>
        </div>
    </div>
     <div class="nav auto">
        <div class="top">
            <div class="left">在线支付</div>
            <div class="left yell">积分10000xxx</div>
            <div class="right bluetext"> <a href="#">费用明细</a></div>
        </div>
        <div class="bottom">
             <mt-button @click.native="handleClick" class="left bluetext gray">修改订单</mt-button>
             <mt-button @click.native="handleClick" class="right bluetext gray">再次预定</mt-button>
             <mt-button @click.native="handleClick" class="center bluetext gray">取消订单</mt-button>
        </div>
    </div>
    <div class="green main1">
        <div class="main auto whiteg">
            <div class="top">
                <div class="left img"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577290194&di=3eb91efb6db04457ca0549ebe984d018&imgtype=jpg&er=1&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180211%2F01%2F1518283100-rGuwWcThEz.jpg" alt="">
                </div>
                <div class="left text ">小猪insxxxxxxx环保钥匙扣</div>
                <div class="right bluetext"> <a href="#">宝贝详情</a></div>
            </div>
            <div class="mid">
                <mt-button @click.native="handleClick" class="right bluetext whiteg">联系卖家</mt-button>
                <mt-button @click.native="handleClick" class="right bluetext whiteg">拨打电话</mt-button>
            </div>
            <div class="bottom">
                <div class="left big">
                    <div class="left grayt">商品总价</div>
                    <div class="right grayt">20$</div>
                </div>
                <div class="left big">
                    <div class="left grayt">运费</div>
                    <div class="right grayt">0$</div>
                </div>
                <div class="left big">
                    <div class="left text">积分抵扣</div>
                    <div class="right text">20$</div>
                </div>
                <div class="left big">
                    <div class="left text">实付款</div>
                    <div class="right text yell">0$</div>
                </div>
                <div class="left mid">
                    <div class="left">订单编号</div>
                    <div class="center">11222345678000000</div>
                </div>
                <div class="left mid">
                    <div class="left">创建时间</div>
                    <div class="center">2019-12-22-34</div>
                </div>
                <div class="left mid">
                    <div class="left">付款时间</div>
                    <div class="center">2019-11-22-23</div>
                </div>
            </div>
            <!-- <div class="footer">
                <div class="left">探索附近</div>
                <div class="left border"><a href="#">美食</a></div>
                <div class="left border"><a href="#">购物</a></div>
                <div class="left border"><a href="#">玩乐</a></div>
                <div class="left"><a href="#">攻略</a></div>
        </div> -->
        </div>
    </div>
    
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      title: 'MoBan',
      value: [20, 50],
    }
  }
}
// 改不动了，这个你自己改吧= =
</script>

<style scoped>
.auto{
    width: 95%;
    margin: auto;
}
.left{
    float: left;
}
.right{
    float: right;
}
.center{
    margin: auto;
}
.whiteg{
    background-color: white;
}
.white{
    color: white;
}
.blue{
    background-color: rgb(136, 136, 255);
}
.gray{
    background-color: rgb(212, 208, 208);
}
.grayt{
    color:  rgb(173, 166, 166);
}
.bluetext{
    color: rgb(88, 88, 255);
}
.yell{
    color: rgb(255, 150, 75);
}
.black{
    color: black;
}
.green{
  background-color: rgb(225, 255, 196);
}
.header .top{
    height: 50px;
}
a{
    display: inline-block;
}
.header .top .text{
    padding-top: 5px;
    font-size: 25px;
    text-align: center;
}
.header .mid{
    height: 50px;
}
.header .mid .text{
    font-size: 30px;
    margin-left: 20px;
}
.header .mid a .right{
    padding-top: 20px;
}
.demo-page .nav {
    padding-bottom: 10px;
}
.nav .top{
    height: 40px;
    margin-top: 10px;
}
.nav .top div{
    width: 20%;
    height: 30px;
    margin-left: 10px;
}
.nav .top .left{
    font-size: 20px;
}
.nav .bottom .gray{
    width: 33%;
    height: 50px;
    border: solid rgb(165, 163, 163) 1px;
}
.green{
    padding-top: 10px;
}
.green .top .img{
    width:31%; 
}
.green .main{
    padding-top: 10px;
    border-radius: 10px 10px 0 0;
}
.green .top{
    height: 160px;
}
.green .top img{
    width: 90%;
    margin-left: 20px;
    border-radius: 10px;
}
.green .top .right{
    margin:50px 50px 0 0;

}
.green .top .text{
    width: 40%;
    height: 160px;
    font-size: 28px;
    margin-left: 20px;
}
.green .mid{
    height: 50px;
}
.green .mid .right{
    font-size: 20px;
    width: 15%;
}
.green .bottom{
    height: 230px;
}
.green .bottom .big{
    width: 100%;
    height: 30px;
    padding: 0 60px 0 60px;
}
.green .bottom .big .grayt{
    font-size: 15px;
}
.green .bottom .text{
    font-size: 19px;
}
.green .bottom .mid{
    width: 100%;
    height: 30px;
    padding: 0 60px 0 60px;
    font-size: 15px;
}
/* .green .footer{
    margin-top: 2px;
    height: 30px;
}
.green .footer .left{
    width: 20%;
    height: 29px;
    text-align: center
}
.green .footer .border{
    border-right: solid rgb(230, 230, 230) 1px;
} */
</style>
