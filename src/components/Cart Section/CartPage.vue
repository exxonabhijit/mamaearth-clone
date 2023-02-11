<template>
  <div class="container">
    <h1><i class="fa-solid fa-bag-shopping"></i> My Cart</h1>
    <div class="content-sections">
      <div class="content">
        <ProductDetail />
      </div>
    </div>
  </div>
</template>

<script>
import ProductDetail from "../Cart Section/ProductDetail.vue";
export default {
  components: { ProductDetail },
  mounted() { 
    this.$store.dispatch("getCartItems");
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300&family=Nunito+Sans:wght@200&family=Open+Sans:wght@300&family=Roboto:wght@100&display=swap");

/* font-family: 'Lato', sans-serif;
font-family: 'Nunito Sans', sans-serif;
font-family: 'Open Sans', sans-serif;
font-family: 'Roboto', sans-serif; */
.container {
  margin: 30px 0;
}
h1 {
  font-family: "Open Sans", sans-serif;
  text-align: center;
  font-size: 30px;
}
.content-sections {
  margin: 0 100px;
  display: flex;
}
.content {
  width: 100%;
}
</style>