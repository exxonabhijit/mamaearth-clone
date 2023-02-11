<template>
  <div class="productSection">
    <div class="container">
      <CardComp v-for="product in Products" :key="product.id" :product="product"/>
    </div>
  </div>
</template>

<script>
import CardComp from "./BestSellerCardTheam.vue";
export default {
  props:["Products"],
  components: {
    CardComp,
  },
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

.heading {
  text-align: center;
}
</style>