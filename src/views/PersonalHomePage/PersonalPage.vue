<template>
  <div class="PersonCenter">
    <div class="HeadTitle">
      <img class="HeadPortrait" src="http://www.520touxiang.com/uploads/allimg/201903211144/ta4bcfs141l.jpg"   />
    </div>
     
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      title: '个人中心',
      value: [20, 50],
    }
  }
}
</script>

<style scoped>
.PersonCenter{
  background:rgba(0, 153, 255, 0.767); color:rgba(24, 23, 23, 0.897)
}
.HeadPortrait{
  border-radius:50%;
  width:50px;
  height:50px;
}
</style>
