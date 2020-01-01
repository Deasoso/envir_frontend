<template>
  <div class="demo-page">
    {{title}}
    <mt-button type="primary" @click="changename('新名字')">更改导航栏名字</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'MoBan',
      value: [20, 50],
    }
  },
  methods:{
    changename(inputname){
      // this.$store.dispatch("settitle", {'name': inputname}); // 异步
      this.$store.commit("settitle", {'name': inputname}); // 同步
    }
  }
}
</script>

<style scoped>
.demo-page{
  margin-left: 20px;
}
</style>
