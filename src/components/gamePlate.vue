<template>
    <div class="travel ">
        <div class="title-plate">
            Game
            <router-link to='/gamePage'>View more
                <Icon type="ios-arrow-right"></Icon>
            </router-link>
        </div>
        <!--<div class="game-swiper swiper-container">
            <div class="code-row-bg Game-list swiper-wrapper">
                <div class="game-slide swiper-slide" v-for="(place,index) in listBox">
                    <div class="Game-box ">
                        <div class="Game-image">
                            <div class="CoverPhoto" :style="{backgroundImage:'url('+place.url+')'}" :key="index"></div>
                            <img src="../assets/image/tourism/Mask_322.png" alt="" class="image-Game">
                        </div>
                        <div class="Game-text">
                            <h3>{{place.title}}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>-->
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
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
    data() {
        return {
            listBox: [
                { url: require('../assets/image/tourism/002.jpg'), title: "Anything is possible" },
                { url: require('../assets/image/tourism/002.jpg'), title: "Anything is possible" },
                { url: require('../assets/image/tourism/002.jpg'), title: "Anything is possible" }
            ]
        }
    },
    mounted() {
        //console.log('mounted', this)
        // var swiper = new Swiper('.game-swiper', {
        //     // pagination: '.swiper-pagination',
        //     paginationClickable: true,
        //     //loop: true,
        //     speed: 600,
        //     autoplay: 4000,
        //     slidesPerView: 4,
        //     onTouchEnd: function () {
        //         swiper.startAutoplay()
        //     }
        // });
    }
}
</script>

<style>
.game {
    position: relative;
}

.game-swiper {}

.game .Game-box {
    /*box-shadow: 0 12px 34px rgba(0, 0, 0, 0.12);*/
}

.game .Game-image {
    position: relative;
    overflow: hidden
}

.game .Game-image img {
    width: 100%;
    display: block
}

.game .CoverPhoto {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.game .game-slide {
    transition: ease-in-out .8s;
    position: relative
}

.game .game-slide:hover {
    z-index: 19;
    transform: scale(1.03);
    box-shadow: 0px 16px 81px -7px rgba(0, 0, 0, 0.44);
}

.game .Game-list {
    position: relative;
    padding-bottom: 95px
}

.game .Game-list .Game {}

.game .image-Game {
    width: 100%;
    display: block;
}

.game .Game-text {
    padding: 0 2rem;
    height: 72px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    z-index: 5;
    width: 100%;
}

.game .Game-text h3 {
    font-weight: 100;
    font-size: 1.6rem;
    color: #fff;
}

@media only screen and (min-width:1200px) {
    .game .Game-box {
        /*box-shadow: 0 0 20px rgba(0, 0, 0, 0.12);*/
    }
}
</style>
