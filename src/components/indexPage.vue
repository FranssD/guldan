<template>
  <div class="content">
  
    <div class="main">
      <banner></banner>
      <trave class="index-Plate"></trave>
      <game class="index-Plate"></game>
      <footers></footers>
    </div>
  </div>
</template>

<script>
import banner from './BannerPlate.vue'
import dowBtn from './dowBtn.vue'
import trave from './travelPlate.vue'
import game from './gamePlate.vue'
import footers from './footerPlate.vue'


import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: { banner, dowBtn, trave, game, footers },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
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
  padding-bottom: 3.2rem
}
</style>
