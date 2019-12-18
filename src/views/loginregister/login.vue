
<template>
  <div class="demo-page">
      <mt-header fixed title="登录">
          <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
        <br>
        <mt-field label="账号" placeholder="请输入手机号码或邮箱" type="email" v-model="email"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <br>
<mt-button size="large" type="primary">登录</mt-button>
    <mt-checklist
        class="check"
        v-model="value"
        :options="['记住账号及密码']"> 
    </mt-checklist>
    <p class="bstyle"><a href="http://localhost:8080/#/register">忘记密码</a></p>
    <p class="cstyle">没有账号？<a href="http://localhost:8080/#/register">立即注册</a></p>
   
  </div>
</template>
<script>
module.exports = {
  data() {
    return {
      title: 'MoBan',
      value: [20, 50],
    }
  },
  methods:{
    changename(inputname){
       this.$store.commit("settitle", {'name': inputname});
    }
  }
}
</script>

<style scoped>
.demo-page{

}
</style>
