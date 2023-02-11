<template>
  <div class="card">
    <router-link
      :to="{ name: 'ProductDetail', params: { id: product.id } }"
      class="router-link"
    >
      <h1 class="banner">Best Seller</h1>
      <img :src="product.img" class="card-img-top" alt="..." />
      <div class="card-body">
        <h1 class="card-title">
          {{ product.title }}
        </h1>
        <p class="card-text">{{ product.subtitle }}</p>
        <p class="rating">
          ⭐{{ product.rating }} | {{ product.reviews }} reviews
        </p>
        <div class="price">
          <h3>₹{{ product.price }}</h3>
        </div>
      </div>
    </router-link>
    <div>
      <button class="addtocartbtn" @click.prevent="addToCart()">
        ADD TO CART
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],

  methods: {
    addToCart() {
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quantity: 1,
      });
    },
  },
};
</script>

<style scoped>
.banner {
  background-color: rgb(255, 91, 111);
  color: rgb(255, 255, 255);
  font-weight: 600;
  text-transform: uppercase;
  text-align: left;
  font-size: 12px;
  padding: 10px 5px 5px;
  width: 100px;
  border-radius: 5px 0px 5px 0px;
}

.card {
  border: 1px solid rgb(199, 196, 196);
  text-align: center;
}
.card-body {
  text-align: center;
  min-height: 200px;
  height: auto;
  padding: 10px;
}
.card-body > * {
  margin-top: 10px;
}
.card-title {
  color: rgb(102, 102, 102);
  font-weight: 400;
}
.rating {
  color: rgb(138, 140, 139);
}
img {
  width: 100%;
  min-height: 200px;
  height: 280px;
  text-align: center;
  box-sizing: border-box;
}
p,
h1 {
  font-size: 15px;
}
.heading {
  font-size: 30px;
}
h3 {
  font-size: 20px;
}
.router-link {
  text-decoration: none;
}
.card {
  border-radius: 5px;
}
.price {
  color: rgb(52, 51, 51);
}
.card-text {
  color: rgb(75, 139, 11);
  font-weight: bolder;
}
.addtocartbtn {
  width: 100%;
  border: 2px solid rgb(0, 175, 239);
  background: transparent;
  padding: 10px;
  border-radius: 5px;
  color: rgb(0, 175, 239);
  cursor: pointer;
  transition: all 0.3s ease-in-out 0s;
  font-weight: bolder;
}
.addtocartbtn:hover {
  background: rgb(0, 175, 239);
  color: white;
}
</style>