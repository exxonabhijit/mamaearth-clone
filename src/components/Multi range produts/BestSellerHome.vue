<template>
  <div class="wrapper">
    <div class="left-side">
      <div class="heading">Best Seller</div>
      <p>
        Explore the goodness of nature from Mamaearth. Take a look at our lightning offers
      </p>
      <router-link :to="{name:'ViewAll'}">View All</router-link>
    </div>
    <div class="right-side">
      <HomePageProductSlider :products="bestSellerProducts" />
    </div>
  </div>
</template>

<script>
import HomePageProductSlider from "../Product Slider/HomeProductSlider.vue";
export default {
  components: {
    HomePageProductSlider,
  },
  
  mounted() {
    this.$store.dispatch('getBestSellerProduct');
  },

  computed:{
    bestSellerProducts() {
      return this.$store.state.bestSeller;
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 30% 70%;
  margin: 20px 200px;
}
.left-side {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin: 50px;
}
.left-side > * {
  margin-top: 30px;
}
.heading {
    font-size: 2rem;
  font-weight: 600;font-family:'Roboto', sans-serif; 
  font-weight: bolder;
}
.left-side p {
  line-height: 1.3;
  color: rgb(93, 88, 88);
  font-size: 17px;font-family: 'Nunito Sans', sans-serif;
}
a {
  background: rgb(0, 175, 239);
  color: white;
  padding: 15px 0;
  font-size: 18px;
  border: none;
  text-decoration: none;
  border-radius: 5px;
}
a:hover {
  background: rgb(59, 177, 59);
}
</style>