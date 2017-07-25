<template>
  <div class="gamePage travel">
    <div class="min-banner TbannerH gamePage-banner">
      <div class="minbanner-text">探索每一天</div>
    </div>
    <div class="ListPage index-Plate">
      <h2 class="title">大杂烩</h2>
      <hr>
      <Row type="flex" class="code-row-bg Travel-list" :gutter="30">
        <Col class="Travel" :xs="24" :sm="12" :md="8" v-for="(place,index) in listBox">
        <div class="Travel-box">
          <router-link :to="{ path:place.href }">
            <div class="Travel-image">
              <div class="CoverPhoto" :style="{backgroundImage:'url('+place.url+')'}" :key="index"></div>
              <img src="../assets/image/tourism/Mask_430.png" alt="" class="image-Travel">
            </div>
            <div class="Travel-text">
              <h3>{{place.title}}</h3>
            </div>
          </router-link>
        </div>
        </Col>
      </Row>
    </div>
    <footers></footers>
  </div>
</template>

<script>
import footers from './footerPlate.vue'
export default {
  data() {
    return {
      isColor: false,
      listBox: [
        { url: require('../assets/image/game/001.jpg'), title: "svg 滑动动画", href: "svgRoll" },
        { url: require('../assets/image/game/002.jpg'), title: "svg 瞅你咋地", href: "LooKatYou" },
        { url: require('../assets/image/game/003.jpg'), title: "svg 点线动画", href: "PointAndLine" },
        { url: require('../assets/image/game/004.jpg'), title: "Three 波浪", href: "wave" },
        //{ url: require('../assets/image/game/005.jpg'), title: "延时 九曲第一湾", href: "wave" },
      ]
    }
  },
  components: { footers },
}
</script>

<style>
.gamePage-banner {
  background-image: url(../assets/image/tourism/min-banner/HNCK4500.jpg);
  background-size: cover;
  background-position: center center;
}
</style>
