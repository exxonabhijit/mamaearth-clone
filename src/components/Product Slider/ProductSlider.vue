<template>
  <swiper
    :slidesPerView="5"
    :spaceBetween="20"
    :modules="modules"
    :navigation="true"
    class="mySwiper"
  >
    <swiper-slide v-for="product in Products" :key="product.id">
      <div class="card">
        <h1 class="banner">Best Seller</h1>
        <img :src="product.product_img" class="card-img-top" alt="..." />
        <div class="card-body">
          <h1 class="card-title">
            {{ product.title }}
          </h1>
          <p class="card-text">{{ product.card_text }}</p>
          <p class="rating">
            ⭐{{ product.star }} | {{ product.reviews }} reviews
          </p>
          <div class="price">
            <h3>₹{{ product.price }}</h3>
          </div>
          <div>
            <button class="addtocartbtn">ADD TO CART</button>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import Cardcomp from "../Card Section/BestSellerCardTheam.vue"
// import required modules
import { Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
    // Cardcomp
  },
  data() {
    return {
      Products: [
        {
          id: 1,
          product_img:
            "https://honasa-mamaearth-production.imgix.net/o/n/onion-hair-shampoo-250ml-with-ingredient_2.jpg?auto=compress&fit=scale&w=400&h=400",
          title:
            "Onion Hair Oil for Hair Regrowth and Hair Fall Control with Redensyl,150ml",
          card_text: "Boosts Hair Growth | Adds Strength & Shine",
          star: 4,
          reviews: 36,
          price: 199,
        },
        {
          id: 2,
          product_img:
            "https://honasa-mamaearth-production.imgix.net/o/n/onion-hair-shampoo-250ml-with-ingredient_2.jpg?auto=compress&fit=scale&w=400&h=400",
          title:
            "Onion Hair Oil for Hair Regrowth and Hair Fall Control with Redensyl,150ml",
          card_text: "Boosts Hair Growth | Adds Strength & Shine",
          star: 2,
          reviews: 36,
          price: 299,
        },
        {
          id: 3,
          product_img:
            "https://honasa-mamaearth-production.imgix.net/o/n/onion-hair-shampoo-250ml-with-ingredient_2.jpg?auto=compress&fit=scale&w=400&h=400",
          title:
            "Onion Hair Oil for Hair Regrowth and Hair Fall Control with Redensyl,150ml",
          card_text: "Boosts Hair Growth | Adds Strength & Shine",
          star: 6,
          reviews: 36,
          price: 399,
        },
        {
          id: 3,
          product_img:
            "https://honasa-mamaearth-production.imgix.net/o/n/onion-hair-shampoo-250ml-with-ingredient_2.jpg?auto=compress&fit=scale&w=400&h=400",
          title:
            "Onion Hair Oil for Hair Regrowth and Hair Fall Control with Redensyl,150ml",
          card_text: "Boosts Hair Growth | Adds Strength & Shine",
          star: 6,
          reviews: 36,
          price: 8999,
        },
        {
          id: 3,
          product_img:
            "https://honasa-mamaearth-production.imgix.net/o/n/onion-hair-shampoo-250ml-with-ingredient_2.jpg?auto=compress&fit=scale&w=400&h=400",
          title:
            "Onion Hair Oil for Hair Regrowth and Hair Fall Control with Redensyl,150ml",
          card_text: "Boosts Hair Growth | Adds Strength & Shine",
          star: 6,
          reviews: 36,
          price: 799,
        },
        {
          id: 3,
          product_img:
            "https://honasa-mamaearth-production.imgix.net/o/n/onion-hair-shampoo-250ml-with-ingredient_2.jpg?auto=compress&fit=scale&w=400&h=400",
          title:
            "Onion Hair Oil for Hair Regrowth and Hair Fall Control with Redensyl,150ml",
          card_text: "Boosts Hair Growth | Adds Strength & Shine",
          star: 6,
          reviews: 36,
          price: 599,
        },
      ],
    };
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>

<style scoped>
#app {
  height: 100%;
}
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
  margin: 20px 0;
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
