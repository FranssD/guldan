<template>
    <div class="content travel">
        <div class="main">
            <Row type="flex" class="code-row-bg Travel-list">
                <Col class="Travel" :xs="24" :sm="12" :md="8" v-for="(place,index) in listBox">
                    <div class="Travel-box">
                        <div class="Travel-image">
                            <div class="CoverPhoto" :style="{backgroundImage:'url('+place.url+')'}" :key="index"></div>
                            <img src="../assets/image/tourism/Mask_430.png" alt="" class="image-Travel">
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
            active_item: this.$route.query.id,
            listBox: [
                { url: require('../assets/image/tourism/20161016/wKgBs1f_hpCAHDtGAAW6MUHzXuM20.jpg')},
                { url: require('../assets/image/tourism/20161016/wKgBs1f_i0OAHd1kAAUGsfVjjFc32.jpg')},
                { url: require('../assets/image/tourism/20161016/wKgBs1f_i1GAQVbmAARkm0gJUkg68.jpg')},
                { url: require('../assets/image/tourism/20161016/wKgBs1f_iciAOXsfAAJhSSVXjww31.jpg')},
                { url: require('../assets/image/tourism/20161016/wKgBs1f_icmAaiEnAADzgNqqVuU97.jpg')},
                { url: require('../assets/image/tourism/20161016/wKgBs1f_ih6AdImfAA3Mi2p_18E09.jpg')},
                { url: require('../assets/image/tourism/20161016/wKgBs1f_j7-ADkHuAAEteNv0ars06.jpg')},
                { url: require('../assets/image/tourism/20161016/wKgBs1f_j7-AdpYXAAIjgWP-SW438.jpg')},
                { url: require('../assets/image/tourism/20161016/wKgBs1f_j7yATBd1AAEdNd_VJTg55.jpg')},
                { url: require('../assets/image/tourism/20161016/wKgBs1f_j8GAatKvAADmvU3cSII71.jpg')},
                { url: require('../assets/image/tourism/20161016/wKgBs1f_j72APsLNAAJ5P4bpZHI35.jpg')},
                { url: require('../assets/image/tourism/20161016/wKgBs1f_j76ADeDoAAIcIm54w2Y65.jpg')},
                { url: require('../assets/image/tourism/20161016/wKgBs1f_jJSAWGBHAAic3t4QgQM81.jpg')},
                { url: require('../assets/image/tourism/20161016/wKgBs1f_jriAfW6TAAfPm3GLrZc00.jpg')},
                { url: require('../assets/image/tourism/20161016/wKgBs1f_lbCABGcPAAGCkwrGW1A31.jpg')},
                { url: require('../assets/image/tourism/20161016/wKgBs1f_lbGARfKyAAFUilFmodE46.jpg')},
                { url: require('../assets/image/tourism/20161016/wKgBs1f_lpuAEbaEABKm39Vg1c479.jpg')},
                { url: require('../assets/image/tourism/20161016/wKgBs1f_lqeAZTACABEeBUb6I5I11.jpg')},
                { url: require('../assets/image/tourism/20161016/wKgBs1f-NfSANV_ZAAm1ZbdjPBk88.jpg')},
                { url: require('../assets/image/tourism/20161016/wKgBs1f-NrOAOmRuAAZX63RukYg60.jpg')},
                { url: require('../assets/image/tourism/20161016/wKgBs1f-YlWAeRouAAGQqCL8lOM27.jpg')}
            ]
        }
    }
}
</script>

<style>

</style>
