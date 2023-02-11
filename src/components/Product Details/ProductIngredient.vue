<template>
  <div class="container">
    <div class="content">
      <h1 class="main-heading">Key Ingredients</h1>
      <div class="ingre-section">
        <div class="card" v-for="item in items" :key="item.id">
          <img :src="item.img" alt="" />
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props:['id'],
  data() {
    return {
      items:[]
    };
  },
  mounted() {
    axios.get(`http://localhost:3000/ingredients?productId=${this.id}`)
    .then((Response) => {
      this.items = Response.data
    })
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,100&family=Nunito+Sans:wght@300&family=Open+Sans:ital,wght@1,300&family=Roboto:wght@300&display=swap');

/* font-family: 'Lato', sans-serif;
font-family: 'Nunito Sans', sans-serif;
font-family: 'Open Sans', sans-serif;
font-family: 'Roboto', sans-serif; */

.content {
  /* background: #eee; */
  width: 60%;
  padding: 10px 0;
  margin: 0 200px;
  border-bottom: 10px solid rgb(240, 239, 239);
}
h1 {
  font-size: 25px;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;
}
.ingre-section {
  display: flex;
  flex-wrap: wrap;
}
.card {
  display: flex;
  flex-basis: 50%;
  padding: 10px 0;
}
.card img {
  max-width: 100px;
  max-height: 100px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.16);
  box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px;
}
p {
  line-height: 1.5;
  padding: 0 10px;
  color: rgb(119, 119, 119);
}
</style>