<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide> <img src="https://images.ctfassets.net/66mrrren2unf/5dElTf4nIm0q7zDEmWgU4j/b0ba9c8f7fc47184cb6a3c0349cecef1/Desktop_Henna-Paste-with-Logo.jpg?q=40" alt=""> </swiper-slide>
    <swiper-slide> <img src="https://images.ctfassets.net/66mrrren2unf/3sQE1O24Tz2h2g1EeAvGy1/d38d3bffc0dca32cb964ab13b091e32c/Desktop.jpg?q=40" alt=""> </swiper-slide>
    <swiper-slide> <img src="https://images.ctfassets.net/66mrrren2unf/2nFAFSa68RorsrU94U5pO9/90708e3f5bd6f312d9911b63e4977a3e/desktop-body-wash.jpg?q=40" alt=""> </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import required modules
import { Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [ Navigation],
    };
  },
};
</script>

<style scoped>
#app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
}
</style>
