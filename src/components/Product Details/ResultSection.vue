<template>
  <div class="container">
    <div class="content">
      <h1>Results of Mamaearth Vitamin C Face Toner</h1>
      <div class="card-section">
        <div class="card" v-for="benifit in benifits" :key="benifit.id">
          <div class="card-img">
            <img :src="benifit.img"/>
          </div>
          <h2 class="card-title">{{ benifit.title }}</h2>
          <span class="card-desc">{{ benifit.description }}</span>
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
      benifits:[]
    }
  },
  mounted() {
    axios.get(`http://localhost:3000/benifits?productId=${this.id}`)
    .then((res) => {
      console.log("This is benifits of data", res.data);
      this.benifits = res.data;
    })
    .catch((err) => {
      console.log("something went wrong...", err);
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
  width: 60%;
  margin: 0 200px;
  padding: 10px 0;
  border-bottom: 10px solid rgb(222, 222, 222);
}
h1 {
  font-size: 25px;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;
}
.card-section {
  display: flex;
  justify-content: center;
  padding: 20px;
}
.card-title {
  text-align: center;
}
.card {
    flex-basis: 35%;
}
.card-img {
  text-align: center;
}
.card-img img {
  max-width: 186px;
  max-height: 186px;
  border-radius: 10px;
  -webkit-box-shadow: -12px -12px 0px 2px rgb(240, 239, 239);
  box-shadow: -12px -12px 0px 2px rgb(240, 239, 239);
}
.card-title {
  text-align: center;
  color: rgb(109, 165, 35);
  font-weight: 500;
  font-size: 18px;
  margin: 20px 0;
}
span {
  width: 100%;
  padding: 0 20px;
  margin: 10px 0;
  line-height: 1.5;
  display: block;
  font-size: 1rem;
  color: rgb(119, 119, 119);
}
</style>