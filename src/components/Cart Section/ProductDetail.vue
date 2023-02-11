<template>
  <div class="small-container cart-page">
    <table>
      <tr class="heading-names">
        <th>Product</th>
        <th>Quantity</th>
        <th>Action</th>
      </tr>
      <tr v-for="item in ProductsForCart" :key="item.id">
        <td>
          <div class="cart-info">
            <img :src="item.product.img" alt="" />
            <div class="title-section">
              <p>{{ item.product.title }}</p>
              <span>Price : ₹{{ item.product.price }}</span
              ><br />
            </div>
          </div>
        </td>
        <td>{{ item.quantity }}</td>
        <td>
          <button
                class="btn"
                @click.prevent="removeProductFromCart(item.product)"
              >
                Remove
              </button>
        </td>
      </tr>
    </table>
  </div>
  <div class="container" >
      <p>Subtotal : ₹ {{Subtotal}}.00</p>
  </div>
</template>

<script>
export default {
  methods:{
      removeProductFromCart(product) {
          this.$store.dispatch('removeProductFromCart', product)
      }
  },

  computed: {
    ProductsForCart() {
      return this.$store.state.cart;
    },

    Subtotal() {
      return this.$store.getters.CartTotalPrice;
    }
  }

  
};
</script>

<style scoped>
.container {
  background-color: #eee;
  padding: 10px 50px;
  text-align: right;
  margin-top: 10px;
}
.container p {
  font-weight: bold;
}
table {
  width: 100%;
  border-collapse: collapse;
}
.cart-info {
  display: flex;
  padding-top: 10px;
}
th {
  text-align: left;
  padding: 10px;
  color: white;
  font-size: 13px;
  background: rgb(130, 195, 65);
  font-weight: 5000;
  text-transform: uppercase;
}
td {
  padding: 10px 5px;
}
td .btn {
  background-color: red;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  letter-spacing: 2px;

}
tr {
  border-bottom: 1px solid rgb(224, 224, 224);
}
td img {
  width: 150px;
  height: auto;
  margin-right: 10px;
}
.heading-names {
  border-bottom: 5px solid rgb(185, 185, 185);
}
.title-section {
  font-size: 17px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
span {
  font-size: 20px;
  color: green;
}
</style>