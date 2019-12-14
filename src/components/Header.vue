<template>
  <div class="header">
    <mt-header :title="$store.state.title">
      <router-link to="/" slot="left">
        <mt-button icon="back">back</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>
<script>

export default {
  data: () =>{
     return{
       name: '首页'
     }
  },
  // methods:{
  //   changename(input){
  //     this.name = inputname;
  //   }
  // }
}
</script>