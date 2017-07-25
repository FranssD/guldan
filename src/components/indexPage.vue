<template>
  <div class="content">
    <div class="main">
      <banner></banner>
      <trave class="index-Plate"></trave>
      <works class="index-Plate"></works>
  
      <footers></footers>
    </div>
  </div>
</template>

<script>
import banner from './BannerPlate.vue'
import dowBtn from './dowBtn.vue'
import trave from './travelPlate.vue'
import works from './worksPlate.vue'
import footers from './footerPlate.vue'

export default {
  mounted() {

  },
  data() {
    return {

    }
  },
  components: { banner, dowBtn, trave, works, footers },
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
}

.index-Plate {
  max-width: 1300px;
  margin: 0 auto 10rem;
  padding-bottom: 3.2rem;
  overflow: hidden;
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
  .title-plate a{display: none}
  .index-Plate{padding: 0 15px}
  .travel .Travel-list .Travel{margin-bottom: 5rem}
}
</style>
