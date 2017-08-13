<template>
  <div class="weather">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import jquery from 'jquery'
window.$ = jquery
export default {
  data() {
    return {
      WeatherConditions: ""
    }
  },
  mounted() {
    var now, n, nowDate = {
      settings: {
        weather: $(".weather"),
        dayOrNight: '',
        windDegree: '',
      },
      init: function () {
        n = this.settings
        now = new Date().getHours()
        nowDate.chooseDate(now)
      },
      chooseDate: function (now) {
        if (now > 7 && now < 19) {
          n.dayOrNight = 'daytime'
          n.weather.addClass("Day")
          n.weather.removeClass("night")
        } else {
          n.dayOrNight = 'nighttime'
          n.weather.removeClass("Day")
          n.weather.addClass("night")
        }
      }
    }
    var c, color_var, CanvasBackground = {
      settings: {
        weatherCanvas: $("#canvas")[0],
        weatherCTX: $("#canvas")[0].getContext("2d"),
        iconColor: {
          defaultWeather: '#9AD4E0',
          thunderstorm: '#717F8E',
          drizzle: '#63A6CC',
          rain: '#63A6CC',
          snow: '#B5B9BB',
          atmosphere: '#CED1DD',
          clouds: '#6AB7E3',
          extremeWeather: '#D3746B',
          clearsky: '#9AD4E0',
        },
        requestWeather: '',
      },
      init: function () {
        c = this.settings //全局可用settings
        CanvasBackground.setupCanvas()
        CanvasBackground.chooseBackground()
      },
      setupCanvas: function () {
        CanvasBackground.resizeBackground();
        window.addEventListener('resize', CanvasBackground.resizeBackground, false);
        window.addEventListener('orientationchange', CanvasBackground.resizeBackground, false);//移动端垂直，横屏
      },
      resizeBackground: function () {
        // console.log(c.weatherCanvas)
        c.weatherCanvas.width = $(".weather").width();
        c.weatherCanvas.height = $(".weather").height();
      },
      chooseBackground: function () {
        //CanvasBackground.clearAllCanvases();
        color_var = c.iconColor.clouds;
        CanvasBackground.animateClouds();
        cancelAnimationFrame(c.requestWeather);
      },
      animateClouds: function () {
        console.log(n.dayOrNight)
        var timeSvg, cloudSvg = '<svg width="100px" height="55px" viewBox="0 0 100 55" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><title>Group</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="cloud" sketch:type="MSLayerGroup" fill="' + color_var + '"><g id="Group" sketch:type="MSShapeGroup"><path d="M83.336,20.018 C81.412,13.644 75.501,9 68.5,9 C66.193,9 64.013,9.518 62.046,10.421 C57.008,4.074 49.232,0 40.5,0 C26.11,0 14.31,11.053 13.108,25.132 C5.719,26.064 0,32.358 0,40 C0,48.284 6.716,55 15,55 L83,55 C92.389,55 100,47.165 100,37.5 C100,27.952 92.568,20.204 83.336,20.018 L83.336,20.018 Z" id="Shape"></path><path d="M15,51 C8.935,51 4,46.065 4,40 C4,34.478 8.131,29.792 13.609,29.101 L16.819,28.696 L17.094,25.473 C18.122,13.432 28.403,4 40.5,4 C47.708,4 54.419,7.247 58.913,12.908 L60.864,15.366 L63.716,14.056 C65.241,13.355 66.851,13 68.5,13 C73.528,13 78.054,16.361 79.507,21.173 L80.347,23.958 L83.255,24.017 C90.283,24.158 96,30.207 96,37.5 C96,44.944 90.168,51 83,51 L15,51 L15,51 Z" id="Shape"></path></g></g></g></svg>';

        var cloudSrc = 'data:image/svg+xml;base64,' + window.btoa(cloudSvg); //将ascii字符串或二进制数据转换成一个base64编码过的字符串
        var cloudSource = new Image();
        cloudSource.src = cloudSrc;

        if (n.dayOrNight === 'daytime') {
          timeSvg = '<svg width="100px" height="100px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><title>sun</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="Artboard" sketch:type="MSArtboardGroup"><g id="sun" sketch:type="MSLayerGroup"><path d="M50.001,76.927 C64.85,76.927 76.924,64.845 76.924,50 C76.924,35.154 64.85,23.075 50.001,23.075 C35.151,23.074 23.076,35.151 23.076,50 C23.076,64.849 35.151,76.927 50.001,76.927 L50.001,76.927 Z M50.001,26.778 C62.79,26.778 73.221,37.213 73.221,50 C73.221,62.788 62.789,73.222 50.001,73.222 C37.21,73.222 26.779,62.787 26.779,50 C26.779,37.212 37.211,26.778 50.001,26.778 L50.001,26.778 Z" id="Shape" sketch:type="MSShapeGroup"></path><path d="M50.001,73.222 C62.79,73.222 73.221,62.787 73.221,50 C73.221,37.213 62.789,26.778 50.001,26.778 C37.211,26.778 26.779,37.212 26.779,50 C26.779,62.787 37.21,73.222 50.001,73.222 L50.001,73.222 Z" id="Shape" fill="#FFFFC9" sketch:type="MSShapeGroup"></path><path d="M11.863,57.724 L0,65.452 L14.378,65.076 C22.272,64.872 26.566,70.491 23.915,77.576 L19.098,90.452 L30.498,82.108 C36.759,77.531 43.703,79.68 45.94,86.885 L50.001,100 L54.061,86.885 C56.296,79.68 63.241,77.531 69.502,82.108 L80.9,90.452 L76.083,77.576 C73.432,70.491 77.726,64.872 85.621,65.076 L99.998,65.452 L88.135,57.723 C81.622,53.475 81.622,46.527 88.138,42.281 L100,34.55 L85.622,34.927 C77.726,35.132 73.433,29.511 76.086,22.427 L80.905,9.55 L69.505,17.896 C63.244,22.47 56.3,20.321 54.064,13.117 L50.001,0 L45.94,13.115 C43.703,20.319 36.759,22.468 30.497,17.894 L19.098,9.549 L23.915,22.426 C26.567,29.509 22.272,35.129 14.378,34.926 L0,34.55 L11.862,42.281 C18.377,46.527 18.377,53.476 11.863,57.724 L11.863,57.724 Z M50.001,23.074 C64.85,23.074 76.924,35.153 76.924,49.999 C76.924,64.844 64.85,76.926 50.001,76.926 C35.151,76.927 23.076,64.849 23.076,50 C23.076,35.151 35.151,23.074 50.001,23.074 L50.001,23.074 Z" id="Shape" fill="#FFFFC9" sketch:type="MSShapeGroup"></path></g></g></g></svg>';
        } else if (n.dayOrNight === 'nighttime') {
          timeSvg = '<svg width="100px" height="101px" viewBox="0 0 100 101" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><title>Artboard</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="Artboard" sketch:type="MSArtboardGroup" transform="translate(0.000499, 0.000000)" fill="#FFFFC9"><path d="M45.1315012,97.851 C51.9675012,95.264 57.4325012,90.638 61.1685012,84.936 C47.2735012,89.682 32.0245012,82.374 27.0665012,68.515 C22.2195012,54.955 28.9805012,40.007 42.1495012,34.555 C35.5725012,32.74 28.4025012,32.877 21.5585012,35.462 C4.37450124,41.956 -4.34249876,61.263 2.14850124,78.441 C8.63950124,95.622 27.9485012,104.347 45.1315012,97.851 L45.1315012,97.851 L45.1315012,97.851 Z" id="Shape" sketch:type="MSShapeGroup"></path><path d="M78.9325012,81.972 L78.9355012,81.972 L79.0915012,82.343 L79.2495012,82.715 C79.9085012,84.26 79.7135012,86.681 78.8115012,88.101 L78.5995012,88.44 L76.7465012,91.359 L79.7875012,91.087 L79.7905012,91.087 L80.1935012,91.052 L80.5945012,91.014 C82.2645012,90.867 84.5065012,91.805 85.5765012,93.094 L85.8355012,93.406 L86.0965012,93.717 L88.0415012,96.07 L88.8125012,92.701 L88.9035012,92.307 C89.2795012,90.673 90.8635012,88.828 92.4215012,88.208 L92.7955012,88.057 L93.1685012,87.912 L93.1715012,87.908 L96.0075012,86.789 L93.3895012,85.217 L93.0435012,85.007 L92.6935012,84.801 C91.2545012,83.939 89.9955012,81.864 89.8845012,80.186 L89.8735012,80.02 L89.8355012,79.383 L89.8355012,79.38 L89.6425012,76.333 L87.3425012,78.337 L87.3425012,78.339 L86.8595012,78.76 L86.7315012,78.872 C85.4665012,79.976 83.1035012,80.536 81.4755012,80.12 L80.6945012,79.923 L77.7345012,79.167 L78.9325012,81.972 L78.9325012,81.972 Z" id="Shape" sketch:type="MSShapeGroup"></path><path d="M83.8435012,11.312 L84.2085012,11.485 L84.5735012,11.659 C86.0895012,12.381 87.5435012,14.327 87.8105012,15.985 L87.8725012,16.382 L88.4195012,19.795 L90.5175012,17.581 L90.7955012,17.288 L91.0695012,16.993 C92.2235012,15.775 94.5245012,14.989 96.1845012,15.25 L96.5815012,15.315 L96.9805012,15.376 L96.9845012,15.376 L99.9975012,15.851 L98.3465012,12.815 L98.1555012,12.46 C97.3525012,10.984 97.3205012,8.555 98.0795012,7.056 L98.2615012,6.695 L98.4475012,6.337 L99.8295012,3.617 L96.8315012,4.174 L96.8275012,4.174 L96.4285012,4.248 L96.0335012,4.322 C94.3845012,4.628 92.0615012,3.909 90.8755012,2.722 L90.7525012,2.603 L90.3045012,2.155 L90.3015012,2.153 L88.1405012,0 L87.7465012,3.022 L87.7465012,3.025 L87.6625012,3.657 L87.6385012,3.825 C87.4205012,5.49 86.0215012,7.475 84.5275012,8.242 L83.8055012,8.606 L83.8055012,8.608 L81.0895012,10 L83.8435012,11.31 L83.8435012,11.312 L83.8435012,11.312 Z" id="Shape" sketch:type="MSShapeGroup"></path><path d="M54.9225012,45.929 L55.3425012,46.339 C57.0745012,48.028 58.1595012,51.366 57.7475012,53.75 L57.6495012,54.326 L56.8065012,59.236 L60.7045012,57.189 L61.2155012,56.918 L61.7345012,56.648 C63.8795012,55.518 67.3855012,55.518 69.5295012,56.648 L70.0435012,56.918 L70.5555012,57.189 L70.5585012,57.189 L74.4555012,59.236 L73.6125012,54.326 L73.5145012,53.75 C73.1005012,51.366 74.1855012,48.028 75.9195012,46.339 L76.3375012,45.929 L76.7575012,45.526 L79.9105012,42.452 L75.5545012,41.819 L75.5505012,41.819 L74.3975012,41.653 C72.0025012,41.3 69.1685012,39.239 68.0945012,37.069 L67.9865012,36.852 L67.5815012,36.028 L67.5815012,36.024 L65.6325012,32.078 L63.6825012,36.024 L63.6825012,36.028 L63.2785012,36.852 L63.1705012,37.069 C62.0995012,39.239 59.2605012,41.3 56.8655012,41.653 L56.2865012,41.736 L55.7115012,41.819 L51.3535012,42.452 L54.5035012,45.526 L54.9225012,45.929 L54.9225012,45.929 Z" id="Shape" sketch:type="MSShapeGroup"></path><path d="M8.84350124,16.678 L6.99450124,19.597 L10.0345012,19.325 L10.4395012,19.29 L10.8395012,19.253 C12.5115012,19.105 14.7535012,20.043 15.8245012,21.333 L16.0805012,21.644 L16.3385012,21.955 L16.3415012,21.955 L18.2875012,24.307 L19.0575012,20.937 L19.1485012,20.543 C19.5215012,18.91 21.1045012,17.063 22.6635012,16.445 L23.0435012,16.293 L23.4165012,16.147 L23.4165012,16.146 L26.2575012,15.023 L23.6375012,13.455 L23.2905012,13.245 L22.9435012,13.04 C21.5025012,12.177 20.2425012,10.103 20.1325012,8.424 L20.1215012,8.258 L20.0825012,7.622 L20.0825012,7.62 L19.8855012,4.576 L17.5895012,6.579 L17.5865012,6.581 L17.1045012,7 L16.9785012,7.11 C15.7155012,8.214 13.3505012,8.776 11.7235012,8.359 L10.9415012,8.16 L7.98250124,7.404 L9.18050124,10.208 L9.18050124,10.21 L9.33950124,10.58 L9.49850124,10.953 C10.1565012,12.497 9.95750124,14.92 9.06050124,16.339 L8.84350124,16.678 L8.84350124,16.678 Z" id="Shape" sketch:type="MSShapeGroup"></path></g></g></svg>';
        }
        var timeSrc = 'data:image/svg+xml;base64,' + window.btoa(timeSvg);
        var timeSource = new Image();
        timeSource.src = timeSrc;

        var cloudArray = [],
          maxSpeed = 2,
          spacing = 100,
          xSpacing = 0,
          num = innerWidth / spacing,
          sizes = [[100, 55], [90, 49.5], [80, 44]];
        for (let i = 0; i < num; i++) {
          for (let x = 0; x < sizes.length; x++) {
            xSpacing += spacing;
            cloudArray.push({
              x: xSpacing,
              y: Math.round(Math.random() * c.weatherCanvas.height),
              width: 2,
              height: Math.round(Math.random() * (innerHeight / 10)),
              speed: Math.random() * maxSpeed + 1,
              imgWidth: sizes[x][0],
              imgHeight: sizes[x][1],
              img: cloudSource
            });
          }
        }

        function draw() {
          var i;
          c.weatherCTX.clearRect(0, 0, c.weatherCanvas.width, c.weatherCanvas.height);

          for (i = 0; i < num; i++) {
            c.weatherCTX.drawImage(cloudArray[i].img, cloudArray[i].x, cloudArray[i].y, cloudArray[i].imgWidth, cloudArray[i].imgHeight);
            cloudArray[i].y = cloudArray[i].y;
            cloudArray[i].x += cloudArray[i].speed / 1.5;

            if (cloudArray[i].y > c.weatherCanvas.height)
              cloudArray[i].y = 0 - cloudArray[i].height;

            if (cloudArray[i].x > c.weatherCanvas.width)
              cloudArray[i].x = 0 - 100;
          }
          c.weatherCTX.drawImage(timeSource, 25, 100);
          c.requestCloud = requestAnimationFrame(draw);

        }
        draw();
      },
     
    }
    $(function () {
      nowDate.init()
      CanvasBackground.init();

    });
  },
  created() {
    this.axios.get('https://free-api.heweather.com/v5/weather?city=chengdu&key=76e6d1631ad1487eb5be4a5ba759fb39', {
      // params: {
      //   city: "成都",
      // }
    })
      .then((response) => {
        // success
        //console.log("!")
        console.log(response)
        this.WeatherConditions = response.data.HeWeather5[0].now.cond.txt
        if (this.WeatherConditions.indexOf("雨") >= 0) {
          console.log(this.WeatherConditions)
        }else if(this.WeatherConditions.indexOf("晴") >= 0 ) {
           console.log(this.WeatherConditions)
        }
      })
      .catch((error) => {
        //error
        console.log(error);
      })
  },
}
</script>

<style>
.weather {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
}

.night {
  background: #0c2538
}

.Day {
  background: #ebf6f9;
}

.weather canvas {}
</style>
