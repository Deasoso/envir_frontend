<template>
  <div class="rank-page">
    <mt-navbar v-model="selected">
    <mt-tab-item id="week">周排行榜</mt-tab-item>
    <mt-tab-item id="total">总排行榜</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
        <mt-tab-container-item id="week">
            <p v-for="(item,i) in list" :key="i">
                <mt-cell title="weekusername[i]">
                <span>weekscore[i]</span>
                <img slot="icon" src="https://img2.woyaogexing.com/2019/11/08/611ab8ae1e9f460d99b2bcf2be9c7db5!400x400.jpeg" width="24" height="24">
                </mt-cell>               
            </p>
        </mt-tab-container-item>
        
        <mt-tab-container-item id="total">
            <p v-for="(item,i) in list" :key="i">
                <mt-cell title="totalusername[i]">
                <span>weekscore[i]</span>
                <img slot="icon" src="https://img2.woyaogexing.com/2019/10/22/d52c783a5ab44ff280acc5e5c635fcde!400x400.jpeg" width="24" height="24">
                </mt-cell>               
            </p>            
        </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
        list:[1,2,3,4,5,6,7,8,9,10],
        weekpic:['https://img2.woyaogexing.com/2019/11/08/611ab8ae1e9f460d99b2bcf2be9c7db5!400x400.jpeg',
        'https://img2.woyaogexing.com/2019/10/22/d52c783a5ab44ff280acc5e5c635fcde!400x400.jpeg',
        'https://img2.woyaogexing.com/2019/11/02/9ea0b3f58ba44b31ae6ad99b0bfb1f5f!400x400.jpeg',
        'https://img2.woyaogexing.com/2019/11/18/62344ed24b4e4caa8aa6499a30c6d750!400x400.jpeg',
        'https://img2.woyaogexing.com/2019/10/29/13952d94a6c547f7bb6f9059b6f9dd70!400x400.jpeg',
        'https://img2.woyaogexing.com/2019/11/08/2bb6ca14e6deed1f!400x400_big.jpg',
        'https://img2.woyaogexing.com/2019/11/13/9b4b8dd18e644c7585108af79ff6c691!400x400.jpeg',
        'https://img2.woyaogexing.com/2019/11/13/c1ad9bdb25f045b6b99ea766b84e15be!400x400.jpeg',
        'https://img2.woyaogexing.com/2019/11/02/923978721afd42ac8cafe930caf337d5!400x400.jpeg',
        'https://img2.woyaogexing.com/2019/10/22/cb2aa0a375ca46cdb1b98d61b2c8e9be!400x400.jpeg'
        ],
        totalpic:['https://img2.woyaogexing.com/2019/11/08/611ab8ae1e9f460d99b2bcf2be9c7db5!400x400.jpeg',
        'https://img2.woyaogexing.com/2019/11/18/62344ed24b4e4caa8aa6499a30c6d750!400x400.jpeg',
        'https://img2.woyaogexing.com/2019/10/23/d990c4906da8476a841aeef3ff9384da!400x400.jpeg',
        'https://img2.woyaogexing.com/2019/11/13/9b4b8dd18e644c7585108af79ff6c691!400x400.jpeg',
        'https://img2.woyaogexing.com/2019/10/22/d52c783a5ab44ff280acc5e5c635fcde!400x400.jpeg',
        'https://img2.woyaogexing.com/2019/11/02/923978721afd42ac8cafe930caf337d5!400x400.jpeg',
        'https://img2.woyaogexing.com/2019/11/17/2937c876b5a54e5a9311794eb65b2e5c!400x400.jpeg',
        'https://img2.woyaogexing.com/2019/11/02/9ea0b3f58ba44b31ae6ad99b0bfb1f5f!400x400.jpeg',
        'https://img2.woyaogexing.com/2019/11/13/33d12363b87349a6a6fc08c662677241!400x400.jpeg',
        'https://img2.woyaogexing.com/2019/11/13/c1ad9bdb25f045b6b99ea766b84e15be!400x400.jpeg'   
        ],
        weekusername:['北风','SIN_KAMCHUI','张天皿','凌冰','卿','PGL','嘿三岁半','Asiye','Ryyyyyt','小开开'],
        totalusername:['北风','凌冰','娃子瓦子娃子','嘿三岁半','SIN_KAMCHUI','Ryyyyyt','伊兰迪尔','张天皿','阿拉蕾','Asiye'],
        weekscore:['3.7k','1.3k','1.2k','1.2k','851','520','517','501','439','431'],
        totalscore:['482.5k','261.3k','220.7k','157.8k','118.3k','96.3k','95.3k','89.9k','88.0k','83.9k'],

    }
  }
}
</script>

<style scoped>
.rank-page{
  margin-left: 20px;
  font-family:"Microsoft YaHei";
}
</style>
