<template>
    <div class=" travel">
        <div class="title-plate">
            旅行
             <router-link to='/travelPage'>更多
                <Icon type="ios-arrow-right"></Icon>
            </router-link> 
        </div>
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
</template>
<script>
export default {
    data() {
        return {
            listBox: [
                { url: require('../assets/image/tourism/20161016/wKgBs1f-NfSANV_ZAAm1ZbdjPBk88.jpg'), title: "斯里兰卡",href:"http://www.mafengwo.cn/i/6205874.html?static_url=true" },
                { url: require('../assets/image/tourism/20170604/wKgBZ1kucHGAcNs-AAazxmN_w7I73.jpg'), title: "西藏",href:"http://www.mafengwo.cn/i/7078706.html?static_url=true"}
            ]
        }
    }
}
</script>

<style>
.travel {
    position: relative
}

.travel .Travel .Travel-box {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.12);
    overflow: hidden;
    background: #fff
}

.travel .Travel .Travel-image {
    overflow: hidden;
    position: relative
}

.travel .Travel .CoverPhoto {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: ease-in-out .8s;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.travel .Travel .CoverPhoto:hover {
    transform: scale(1.1)
}

.travel .Travel-list {
    position: relative
}

.travel .Travel-list .Travel {}

.travel .image-Travel {
    width: 100%;
    display: block;
}

.travel .Travel-text {
    padding: 35px;
    height: 136px;
    overflow: hidden;
}

.travel .Travel-text h3 {
    font-weight: 100;
    font-size: 2.2rem;
    color: #495060;
}

@media only screen and (max-width:1300px) {
    .travel .Travel .Travel-box {
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.12);
    }
}
</style>
