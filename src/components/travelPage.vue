<template>
  <div class="travelPage travel">
    <div class="min-banner TbannerH travelPage-banner">
      <div class="minbanner-text">探索每一天</div>
    </div>
    <div class="ListPage index-Plate">
      <h2 class="title">旅行</h2>
      <hr>
      <Row type="flex" class="code-row-bg Travel-list" :gutter="30">
        <Col class="Travel" :xs="24" :sm="12" :md="8" v-for="(place,index) in listBox">
        <a :href="place.href" target="_blank">
        <div class="Travel-box">
          <div class="Travel-image">
            <div class="CoverPhoto" :style="{backgroundImage:'url('+place.url+')'}" :key="index"></div>
            <img src="../assets/image/tourism/Mask_430.png" alt="" class="image-Travel">
          </div>
          <div class="Travel-text">
            <h3>{{place.title}}</h3>
          </div>
        </div>
        </a>
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
      listBox: [
       { url: require('../assets/image/tourism/20161016/wKgBs1f-NfSANV_ZAAm1ZbdjPBk88.jpg'), title: "斯里兰卡",href:"http://www.mafengwo.cn/i/6205874.html?static_url=true" },
        { url: require('../assets/image/tourism/20170604/wKgBZ1kucHGAcNs-AAazxmN_w7I73.jpg'), title: "西藏",href:"http://www.mafengwo.cn/i/7078706.html?static_url=true"}
      ]
    }
  },
   components: { footers },
}
</script>

<style>
.travelPage {}

.min-banner {
  height: 80vh;
  position: relative;
  margin-bottom: 8em;
}

.minbanner-text {
  position: absolute;
  color: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  width: 100%;
  text-align: center;
  background: rgba(0, 0, 0, 0.36);
  padding: 2rem 0
}

.travelPage-banner {
  background-image: url(../assets/image/tourism/min-banner/a76c8a986d9b164a08697e8685ffadbd9a00shashanksahay305123jpg.jpg);
  background-size: cover;
  background-position: center center;
}

.ListPage {}

.ListPage .title {
  margin: 0px 0px 16px;
  font-size: 3rem;
  font-weight: 300;
  color: rgb(44, 54, 67);
  text-align: center
}

.ListPage hr {
  width: 30px;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 32px;
  border-color: rgb(220, 34, 26);
  margin: 0 auto
}

.ListPage .Travel {
  margin-bottom: 5rem
}

.ListPage .Travel-list {
  margin-top: 5rem
}
@media screen and (max-width:1300px){
.min-banner{height: 50vh}
}
</style>
