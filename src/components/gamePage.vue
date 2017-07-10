<template>
  <div class="gamePage travel">
    <div class="min-banner TbannerH gamePage-banner">
      <div class="minbanner-text">explore every day</div>
    </div>
    <div class="ListPage index-Plate">
      <h2 class="title">Game</h2>
      <hr>
      <Row type="flex" class="code-row-bg Travel-list" :gutter="30">
        <Col class="Travel" :xs="24" :sm="12" :md="8" v-for="(place,index) in listBox">
        <div class="Travel-box">
          <div class="Travel-image">
            <div class="CoverPhoto" :style="{backgroundImage:'url('+place.url+')'}" :key="index"></div>
            <img src="../assets/image/tourism/Mask_430.png" alt="" class="image-Travel">
          </div>
          <div class="Travel-text">
            <h3>{{place.title}}</h3>
          </div>
        </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isColor: false,
      listBox: [
        { url: require('../assets/image/tourism/20161016/wKgBs1f-NfSANV_ZAAm1ZbdjPBk88.jpg'), title: "Sri Lanka" },
        { url: require('../assets/image/tourism/20170604/wKgBZ1kucHGAcNs-AAazxmN_w7I73.jpg'), title: "Tibet" },
        { url: require('../assets/image/tourism/20170604/wKgBZ1kucHGAcNs-AAazxmN_w7I73.jpg'), title: "Tibet" },
        { url: require('../assets/image/tourism/20170604/wKgBZ1kucHGAcNs-AAazxmN_w7I73.jpg'), title: "Tibet" },
        { url: require('../assets/image/tourism/20170604/wKgBZ1kucHGAcNs-AAazxmN_w7I73.jpg'), title: "Tibet" },
        { url: require('../assets/image/tourism/20170604/wKgBZ1kucHGAcNs-AAazxmN_w7I73.jpg'), title: "Tibet" },
        { url: require('../assets/image/tourism/20170604/wKgBZ1kucHGAcNs-AAazxmN_w7I73.jpg'), title: "Tibet" },
      ]
    }
  }
}
</script>

<style>
.gamePage-banner {
  background-image: url(../assets/image/tourism/min-banner/HNCK4500.jpg);
  background-size: cover;
  background-position: center center;
}
</style>
