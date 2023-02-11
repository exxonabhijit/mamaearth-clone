<template>
  <div class="container" v-for="content in contents" :key="content.id">
    <div class="banner-section">
      <img :src="content.images" alt="" />
    </div>
    <div class="content">
      <div class="heading-section">
        <h1>{{ content.product_title }}</h1>
      </div>
      <div class="products">
        <MultiCardComp :Products="Products" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MultiCardComp from "../components/Card Section/MulticardComp.vue";
export default {
  components: { MultiCardComp },

  data() {
    return {
      contents: [],
    };
  },

  computed:{
    Products() {
      return this.$store.state.products;
    }
  },

  created() {
  axios
      .get("http://localhost:3000/product_category?title=all_Products")
      .then((Response) => {
        this.contents = Response.data;
      });

  },

  mounted() {
    //fetching all product using vuex
    this.$store.dispatch('getAllProducts');

  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300&family=Nunito+Sans:wght@200&family=Open+Sans:wght@300&family=Roboto:wght@100&display=swap');

.heading-section {
  margin: 40px 0;
}
h1 {
  text-align: center;
font-family: 'Roboto', sans-serif;
}
.products {
  margin-bottom: 30px;
}
</style>