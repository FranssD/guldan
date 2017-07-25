<template>
    <div class="content contactUs ">
        <div class="min-banner TbannerH contactUs-banner">
            <div class="minbanner-text">探索每一天</div>
        </div>
        <div class="index-Plate">
            <p>微信：a1313liangjingjing</p>
            <p>企鹅：602330491</p>
            <p>邮箱：602330491@qq.com</p>
        </div>
    <footers></footers>
    </div>
</template>

<script>
import footers from './footerPlate.vue'
export default {
  mounted() {
   
  },
  data() {
    return {
      
    }
  },
  components: { footers },
}
</script>

<style>
.contactUs-banner {
  background-image: url(../assets/image/tourism/min-banner/pexels-photo-297755.jpeg);
  background-size: cover;
  background-position: center center;
}
</style>