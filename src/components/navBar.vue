<template>
    <div class="navBar" v-bind:class="{ active:isColor}">
        <ul>
            <li>
                <router-link to="/" >Hmoe</router-link>
            </li>
            <li>
                <router-link to="/travelPage" >Travel</router-link>
            </li>
            <li>
                <router-link to="/gamePage">Game</router-link>
            </li>
            <li>
                <router-link to="/ContactUs">Contact us</router-link>
            </li>
            <!--<li v-bind:class="{ active:isActive}" @click="activeF()">
                
            </li>-->
        </ul>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    data() {
        return {
          isActive:false,
          isColor: false
        }
    },
    methods: {
       activeF(){
           this.isActive=!this.isActive
       }
    },
    mounted(){
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
.navBar.active a{color: #495060}
.navBar.active a::after{background: #495060}
.ivu-menu-light{background:inherit!important}
.ivu-menu-horizontal.ivu-menu-light:after{display: none!important}
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
</style>
