<template>
  <swiper
    :slidesPerView="3"
    :spaceBetween="10"
    :modules="modules"
    :navigation="true"
    class="mySwiper"
  >
    <swiper-slide v-for="product in products" :key="product.id">
     <CardTheam :product="product"/>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import Cardcomp from "../Card Section/BestSellerCardTheam.vue"
// import required modules
import { Navigation } from "swiper";
import CardTheam from "../Card Section/BestTheameTwo.vue"

export default {
  components: {
    Swiper,
    SwiperSlide,
    CardTheam
    // Cardcomp
  },
  props:["products"],
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: auto;
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


/* card style */
.banner {
  background: rgb(130, 195, 65);
  color: rgb(255, 255, 255);
  font-weight: 600;
  text-transform: uppercase;
  text-align: left;
  font-size: 12px;
  padding: 10px 5px 5px;
  width: 100px;
  border-radius: 5px 0px 5px 0px;
}

.card {
  border: 1px solid rgb(199, 196, 196);
  text-align: center;
}
.card-body {
  text-align: center;
  padding: 10px;
}
.card-body > * {
  margin-top: 10px;
}
.card-title {
  color: rgb(102, 102, 102);
  font-weight: 400;
}
.rating {
  color: rgb(138, 140, 139);
}
img {
  width: 100%;
  min-height: 200px;
  height: 280px;
  text-align: center;
  box-sizing: border-box;
}
p,
h1 {
  font-size: 15px;
}
.heading {
  font-size: 30px;
}
h3 {
  font-size: 20px;
}
.router-link {
  text-decoration: none;
}
.card {
  border-radius: 5px;
}
.price {
  color: rgb(52, 51, 51);
}
.card-text {
  color: rgb(75, 139, 11);
  font-weight: bolder;
}
.addtocartbtn {
  width: 100%;
  border: 2px solid rgb(0, 175, 239);
  background: transparent;
  padding: 10px;
  border-radius: 5px;
  color: rgb(0, 175, 239);
  transition: all 0.3s ease-in-out 0s;
  font-weight: bolder;
}
.addtocartbtn:hover {
  background: rgb(0, 175, 239);
  color: white;
}

</style>
