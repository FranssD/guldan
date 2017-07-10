<template>
    <div class="banner swiper-container TbannerH">
        <div class="banner-list swiper-wrapper">
          <div class="image-box-before swiper-slide" v-for="(strText,index) in listImg">
            <div class="image-box" :style="{backgroundImage:'url('+strText.url+')'}" :key="index">
              <div class="image-box-fade"></div>
              <router-link to="/detailPage">
                <div class="text-title">{{strText.describe}}</div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
    data() {
        return {
            listImg: [
                { url: require('../assets/image/tourism/banner/IMG_7179.jpg'), describe: "Third pole - my other starting point" },
                { url: require('../assets/image/tourism/banner/IMG_5568.jpg'), describe: "A tear on the Indian Ocean" }
            ],
            isSplit: false
        }
    },
    mounted() {
        console.log('mounted', this)
        var swiper = new Swiper('.banner', {
           // pagination: '.swiper-pagination',
            paginationClickable: true,
            loop: true,
            speed: 600,
            autoplay: 4000,
            onTouchEnd: function () {
                swiper.startAutoplay()
            }
        });
    }
}
</script>

<style >
.banner{height: 100vh;margin-bottom: 80px;}
.image-box-before {
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: block;
  transition: 0.6s ease-in-out;
  float: left;
  width: 100%;
}

.image-box-before .image-box {
  width: 101%;
  height: 101%;
  top: 0;
  left: 0;
  position: absolute;
  display: inline-block;
  background-size: cover;
  background-position: center center;
}

.image-box-before .text-title {
  position: absolute;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 2rem;
  text-shadow: -4px 2px 17px #000;
  text-align: center;
  font-size: 100;
}


@media only screen and (min-width:1200px) {
  .main.split .image-box-before {
    width: 25%;
    height: 50vh
  }
  .main.split .image-box-before .text-title {
    font-size: 1.4rem;
    width: 80%
  }
}
@media only screen and (max-width:768px) {
  .image-box-before {
    height: 50vh
  }
}
</style>