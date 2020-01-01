<template>
  <div class="footer">
    <mt-tabbar v-model="selected"
    :fixed="true">
      <mt-tab-item id="主页" @click.native="menuTab('/Home')">
        <img slot="icon" src="https://img.alicdn.com/imgextra/i4/29928842/O1CN01geMeSm2FBgaXX0rLs_!!0-saturn_solar.jpg_220x220.jpg_.webp">
        页面1
      </mt-tab-item>
      <mt-tab-item id="资产公告"  @click.native="menuTab('/page1')">
        <img slot="icon" src="https://img.alicdn.com/imgextra/i4/29928842/O1CN01geMeSm2FBgaXX0rLs_!!0-saturn_solar.jpg_220x220.jpg_.webp">
        页面2
      </mt-tab-item>
      <mt-tab-item id="个人中心" @click.native="menuTab('/personal')">
        <img slot="icon" src="https://img.alicdn.com/imgextra/i4/29928842/O1CN01geMeSm2FBgaXX0rLs_!!0-saturn_solar.jpg_220x220.jpg_.webp">
        个人中心
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import {Toast} from "mint-ui"
export default {
  name: "NavigateTabBar",
  data: () => ({
    selected: 0
  }),
  component:{
      Toast
  },
  methods: {
    menuTab(name) {
      this.$router.push(name);
    }
  }
};
</script>
