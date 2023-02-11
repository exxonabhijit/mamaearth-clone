<template>
  <div class="container" v-for="info in subCatContent" :key="info.id">
    <div class="banner-section">
      <img :src="info.image" alt="" />
    </div>
    <div class="content">
      <div class="heading-section">
        <h1>{{ info.product_title }}</h1>
      </div>
      <div class="best-seller-section">
        <h1 class="best-seller">Best Sellers</h1>

      </div>
      <div class="products">
        <h1 class="our-products">Our Products</h1>
        <MultiCardComp :Products="catProducts" />
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
      subCatContent: []
    };
  },
  created() {
    //get sub-cat content information
    axios
      .get(`http://localhost:3000/sub_cat?id=${this.$route.params.id}`)
      .then((Response) => {
        console.table("sub-cat data", (this.subCatContent = Response.data));
        this.subCatContent = Response.data;
      })
  },
  
  computed:{
    catProducts() {
      return this.$store.state.catProducts;
    }
  },

  mounted() {
    //get category wise products
    // axios
    //   .get(`http://localhost:3000/products?sub_catId=${this.$route.params.id}`)
    //   .then((Response) => {
    //     this.Products = Response.data;
    //   })

      this.$store.dispatch('getCatWiseProducts', this.$route.params.id);
  
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300&family=Nunito+Sans:wght@200&family=Open+Sans:wght@300&family=Roboto:wght@100&display=swap");

.banner-section img {
  width: 100%;
}
.content .heading-section {
  text-align: center;
  font-size: 15px;
  font-weight: 800;
  font-family: "Open Sans", sans-serif;
  margin: 20px 0;
}
.best-seller-section {
  width: 80%;
  margin: 0 auto;
}
.best-seller {
  font-size: 25px;
  font-weight: 800;
  font-family: "Roboto", sans-serif;
  margin: 20px 0;
}
.products {
  margin: 50px 0;
}
.products h1 {
  text-align: center;
  font-size: 25px;
  font-weight: 800;
  font-family: "Roboto", sans-serif;
  margin: 20px 0;
}
</style>