<template>
    <div class="">
        <div class="navBar" v-bind:class="{ active:isColor}">
            <ul>
                <li>
                    <router-link to="/">首页</router-link>
                </li>
                <li>
                    <router-link to="/travelPage">旅行</router-link>
                </li>
                <li>
                    <router-link to="/worksPage">作品</router-link>
                </li>
                <li>
                    <router-link to="/ContactUsPage">联系我</router-link>
                    <!-- <a href="javascript:void(0);" @click="custom">联系我</a> -->
                </li>
                <!--<li v-bind:class="{ active:isActive}" @click="activeF()">  </li>-->
            </ul>
        </div>
        <div id="navToggle" v-bind:class="{active:isActive}" @click="activeF()">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script>
import jquery from 'jquery'
window.$ = jquery
export default {
    data() {
        return {
            isActive: false,
            isColor: false,
        }
    },
    methods: {
        activeF() {
            this.isActive = !this.isActive
        },
    },
    mounted() {
        $(window).on('scroll', () => {
            if ($(window).scrollTop() > $(".TbannerH").height()) {
                this.isColor = true
            } else {
                this.isColor = false
            }
        })
    }
}
</script>

<style>
.navBar {
    position: fixed;
    top: 46px;
    right: 84px;
    z-index: 50;
}

.navBar.active a {
    color: #495060
}

.navBar.active a::after {
    background: #495060
}

.ivu-menu-light {
    background: inherit!important
}

.ivu-menu-horizontal.ivu-menu-light:after {
    display: none!important
}

.navBar li {
    float: left;
    margin-left: 20px;
    position: relative;
}

.navBar li a::after {
    content: '';
    position: absolute;
    width: 0%;
    bottom: 0;
    height: 1px;
    left: 0;
    transition: ease-in .5s;
    background: #fff
}

.navBar li:hover a::after {
    width: 100%
}

.navBar li a.router-link-exact-active::after {
    width: 100%
}

.navBar li a {
    position: relative;
    line-height: 1.8em;
    font-weight: normal;
    color: #fff;
    font-size: 1.4rem;
    display: block;
}

.ivu-modal-mask {
    background-color: rgba(255, 255, 255, 0.6)!important
}

.ivu-modal {
    border: 1px solid #ccc!important;
}

.ivu-modal-content {
    border-radius: 0!important
}

#navToggle {
    position: fixed;
    z-index: 101;
    top: 28px;
    right: 10px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    -webkit-transition: all ease 0.3s;
    transition: all ease 0.3s;
    display: none;
}

#navToggle span {
    position: absolute;
    top: 0;
    display: block;
    width: 30px;
    height: 2px;
    left: 0;
    border: 0px solid #C82126;
    background-color: #fff;
    -webkit-transition: top 0.2s 0.2s, background 0.2s, opacity 0s 0.2s, -webkit-transform 0.2s;
    transition: top 0.2s 0.2s, background 0.2s, opacity 0s 0.2s, -webkit-transform 0.2s;
    transition: top 0.2s 0.2s, transform 0.2s, background 0.2s, opacity 0s 0.2s;
    transition: top 0.2s 0.2s, transform 0.2s, background 0.2s, opacity 0s 0.2s, -webkit-transform 0.2s;
}

#navToggle span:nth-of-type(2) {
    top: 15px;
}

#navToggle span:nth-of-type(3) {
    top: auto;
    bottom: 0;
    -webkit-transition: bottom 0.2s 0.2s, background 0.2s, -webkit-transform 0.2s;
    transition: bottom 0.2s 0.2s, background 0.2s, -webkit-transform 0.2s;
    transition: bottom 0.2s 0.2s, transform 0.2s, background 0.2s;
    transition: bottom 0.2s 0.2s, transform 0.2s, background 0.2s, -webkit-transform 0.2s;
}

#navToggle.active:hover {
    border-color: #fff;
}

#navToggle.active {
    border-color: #aaa;
}

#navToggle.active:hover span {
    transform: scale(0.9);
}

#navToggle.active span:nth-of-type(1) {
    top: 15px;
    transform: rotate(45deg);
    transition: top 0.2s, transform 0.2s 0.2s, background 0.2s;
    -webkit-transform: rotate(45deg);
    -webkit-transition: top 0.2s, -webkit-transform 0.2s 0.2s, background 0.2s
}

#navToggle.active span:nth-of-type(2) {
    opacity: 0;
    transition: opacity 0.2s;
    -webkit-transition: opacity 0.2s;
}

#navToggle.active span:nth-of-type(3) {
    bottom: 14px;
    transform: rotate(-45deg);
    transition: bottom 0.2s, transform 0.2s 0.2s, background 0.2s;
    -webkit-transform: rotate(-45deg);
    -webkit-transition: bottom 0.2s, -webkit-transform 0.2s 0.2s, background 0.2s
}

@media screen and (max-width:1300px) {
    .navBar {
        display: none;
    }
    #navToggle {
        display: block
    }
}
</style>
