<template>
  <div class="demo-page">
    <mt-header fixed title="注册">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="inputs">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="账号" placeholder="请输入邮箱或手机号" type="email" v-model="email"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
      <mt-field label="验证码" v-model="captcha">
        <img src="https://profile.csdnimg.cn/8/6/A/1_yflook" height="45px" width="100px">
      </mt-field>
    </div>
    <div class="inputs">
      已有账号？<a href="http://localhost:8080/#/login">登陆<span style="color=#3399ff;"></span></a>
    </div>
    <div class="inputs">
      注册即代表您已阅读并同意《<a href="http://localhost:8080/#/login">使用协议</a>》
    </div>
    <mt-button size="large" type="primary">注册</mt-button>
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
</script>

<style scoped>
.demo-page{

}
.inputs{
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>