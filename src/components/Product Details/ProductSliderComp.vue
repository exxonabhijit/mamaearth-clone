<template>
  <div class="container">
    <div class="content">
      <div class="product_slider_section">
        <img :src="product.img" alt="">
      </div>
      <div class="product_detail_section">
        <div class="product_title">
          <h1>
            {{product.title}}
          </h1>
        </div>
        <div class="product_text">
          <i>{{product.subtitle}}</i>
        </div>
        <div class="rating">
          <p>⭐{{product.rating}} | {{product.reviews}} Verified Reviews</p>
        </div>
        <div class="price">
          <h1>Special Price</h1>
          <h2>₹{{product.price}}.00</h2>
          <p>Inclusive Of All Taxes</p>
          <input type="number" class="quantity"  v-model="quantity">
        </div>
        <div class="product_sticker">
          <img
            src="https://mamaearthp.imgix.net/wysiwyg/goodness-icons.png"
            alt=""
          />
        </div>
        <div class="btn-section">
          <button class="addToCart" @click.prevent="addToCart()">ADD TO CART</button>
          <button class="buyNow">BUY NOW</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["product"],

  data() {
    return {
      quantity:1
    }
  },

  methods:{
    addToCart() {
      this.$store.dispatch('addProductToCart', {
        product : this.product,
        quantity : this.quantity
      })
    }
  }

};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,100&family=Nunito+Sans:wght@300&family=Open+Sans:ital,wght@1,300&family=Roboto:wght@300&display=swap');
.quantity {
  width: 20%;
  padding: 7px 0;
  text-align: center;
  font-weight:bold;
  font-size: 14px;
}
.addToCart , .buyNow {
  font-family: 'Lato', sans-serif;
  font-size: 15px;
  color: white;
  padding: 10px 20px;
  margin-right: 20px;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  word-spacing: 3px;
  cursor: pointer;
}
.addToCart {
  background-color: rgb(65, 168, 221);
  cursor: pointer;
}
.addToCart:hover {
  background-color: #59a30e;
}
.buyNow {
  background-color: rgb(255, 78, 34);
}
.buyNow:hover  {
  background-color: red;
}
.rating {
  color: #717272;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 8px;
}
.price h1 {
  color: #59a30e;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
}
.price h2 {
  color: #1d1d1d;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
}
.price p {
  color: #717272;
  font-size: 15px;
  margin-bottom: 10px;
}
.content {
  width: 75%;
  max-width: 75%;
  display: flex;
  justify-content: start;
  margin: 0 200px;
  padding: 20px 0;
}
.product_slider_section {
  flex-basis: 35%;
}
.product_slider_section img {
  width: 100%;
  height: 100%;
  padding: 10px;
  max-height: auto;
  border: 2px solid rgb(65, 168, 221);
  border-radius: 10px;
}

.product_detail_section {
  flex-basis: 65%;
  padding: 20px;
}
.product_sticker img {
  max-width: 42%;
  margin: 20px 0;
}
.product_title h1 {
  font-family: 'Lato', sans-serif;
  font-size: 23px;
  font-weight: 500;color: #1d1d1d;
  margin-bottom: 10px;
}
.product_text  {
  font-family:'Roboto', sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #3d3d3d;
  margin-bottom: 10px;
}
</style>