<template>
  <div class="container" v-for="plant in plants" :key="plant.title">
    <div class="image-section">
      <img :src="plant.images" class="banner" alt="" />
    </div>
    <div class="content">
      <Youtube-section />
      <PlantingComp />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import YoutubeSection from "../components/Plant Goodness/YoutubeSection.vue";
import PlantingComp from "../components/Plant Goodness/PlantingComp.vue";
export default {
  components: { YoutubeSection, PlantingComp },

  data() {
    return {
      plants: null,
    };
  },

  mounted() {
    axios
      .get("http://localhost:3000/product_category?title=plant_Goodness")
      .then((Response) => {
        console.table((this.plants = Response.data));
        this.plants = Response.data;
      })
      .catch((error) => {
        alert("Something is wrong", error);
      });
  },
};
</script>

<style scoped>
.image-section img {
  background-size: cover;
  width: 100%;
}
.content {
  margin-bottom: 20px;
}
</style>