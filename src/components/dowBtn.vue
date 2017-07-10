<template>
  <div id="down" v-show="isShow">
    <Icon type="ios-arrow-thin-down"></Icon>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  data() {
    return {
      isShow: true
    }
  },
  mounted() {
    $(window).on('scroll', () => {
      if ($(window).scrollTop() > 100) {
        this.isShow = false
      } else {
        this.isShow = true
      }
    })
  }
}
</script>
<style>
#down {
  margin: -98px auto 0;
  padding: 0;
  height: 148px;
  width: 17px;
  background: url(/assets/img/common/t_arrow.png) no-repeat bottom center;
  position: fixed;
  z-index: 2;
  overflow: hidden;
}

#down::before {
  content: '';
  display: block;
  width: 1px;
  height: 100%;
  background: #ACACAC;
  margin: 0 auto;
  padding: 0;
}

#down::after {
  content: '';
  display: block;
  padding: 0;
  width: 1px;
  height: 100%;
  background: #fff;
  margin: -148px auto 0;
  animation: top_arrow 2.2s cubic-bezier(0.42, 0, 0.58, 1) infinite;
}

@keyframes top_arrow {
  0%,
  6% {
    -webkit-transform: translateY(-148px);
    -ms-transform: translateY(-148px);
    transform: translateY(-148px);
  }
  33%,
  66% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  94%,
  100% {
    -webkit-transform: translateY(148px);
    -ms-transform: translateY(148px);
    transform: translateY(148px);
  }
}
</style>
