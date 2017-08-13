<template>
  <div class="content">
    <div class="main">
      <banner></banner>
      <div class="weatherBg">
        <trave class="index-Plate" style="padding-top: 80px;"></trave>
        <works class="index-Plate"></works>
        <footers></footers>
        <!-- <div class="st" style="height:40px;width:40px;background:red" @click="loadData"></div> -->
        <weather></weather>
      </div>
      <div class="" style="display:none">
        <div class="list" v-if="articleContent.length !== 0">
          <ul>
            <li v-for="(strText,index) in articleContent.data.news_list">
              <div class="title">{{strText.title}}</div>
              <div class="content" v-html="strText.abstract">{{strText.abstract}}</div>
            </li>
          </ul>
        </div>
      </div>
      <!--以上是测试用的  -->
  
    </div>
  </div>
</template>

<script>
import banner from './BannerPlate.vue'
import dowBtn from './dowBtn.vue'
import trave from './travelPlate.vue'
import works from './worksPlate.vue'
import footers from './footerPlate.vue'
import weather from './weatherPlate.vue'
export default {
  data() {
    return {
      articleContent: '',
    }
  },
  mounted() {
    
  },
  methods: {

  },
  created() {
   
  },
  components: { banner, dowBtn, trave, works, footers, weather },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.title-plate {
  font-size: 3rem;
  line-height: 1.5;
  font-weight: 100;
  margin-bottom: 19px;
}

.title-plate a {
  font-size: 1.4rem;
  float: right;
  line-height: 1.5;
  display: inline-block;
  margin-top: 15px;
  color: #000
}

.index-Plate {
  max-width: 1300px;
  margin: 0 auto 10rem;
  padding-bottom: 3.2rem;
  overflow: hidden;
}

.weatherBg {
  position: relative
}

@media screen and (max-width:1300px) {
  .index-Plate {
    max-width: 800px;
    margin: 0 auto 5rem;
  }
}

@media screen and (max-width:768px) {
  .title-plate {
    text-align: center;
  }
  .title-plate a {
    display: none
  }
  .index-Plate {
    padding: 0 15px
  }
  .travel .Travel-list .Travel {
    margin-bottom: 5rem
  }
}
</style>
