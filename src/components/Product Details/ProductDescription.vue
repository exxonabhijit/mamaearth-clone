<template>
  <div class="container">
    <div class="content">
      <h1>Product Description</h1>
      <p>{{product.product_description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props:["product"]
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,100&family=Nunito+Sans:wght@300&family=Open+Sans:ital,wght@1,300&family=Roboto:wght@300&display=swap');

.content {
  max-width: 60%;
  margin: 0 200px;
  border-bottom: 10px solid rgb(222, 222, 222);
   font-family: 'Nunito Sans', sans-serif;
}
h1 {
  font-weight: 600;
  font-size: 1.5rem;
}
p {
    color: grey;
    margin: 20px 0;
    font-size: 19px;
    line-height: 1.5;
    font-weight: 600;
    font-weight: 300;
}
</style>