<template>
  <div class="container">
    <ProductSliderComp :product="product"/>
    <ProductDescription :product="product"/>
    <ResultSection :id="id"/>
    <ProductIngredient :id="id"/>
    <Disclaimer :id="id"/>
    <AdditionalInfo :id="id"/>
  </div>
</template>

<script>
import ProductSliderComp from "../Product Details/ProductSliderComp.vue";
import ProductDescription from "../Product Details/ProductDescription.vue";
import ResultSection from "../Product Details/ResultSection.vue";
import ProductIngredient from "../Product Details/ProductIngredient.vue";
import Disclaimer from "../Product Details/DisclaimerComp.vue";
import AdditionalInfo from "../Product Details/AdditionalInfo.vue";
export default {
  components: {
    ProductSliderComp,
    ProductDescription,
    ResultSection,
    ProductIngredient,
    Disclaimer,
    AdditionalInfo,
  },
  props:["id"],

  mounted() {
    // axios.get('http://localhost:3000/products/'+ this.id)
    //   .then((Response) => {
    //     console.log("single product data", Response.data);
    //     this.product = Response.data;
    //   });
    this.$store.dispatch('getProduct', this.id)
  },

  computed:{
    product() {
      return this.$store.state.product;
    }
  }
};
</script>

<style scoped>
.container {
  margin-bottom: 50px;
}
</style>