<template>
  <Offerbanner />
  <div class="wrapper">
    <div class="logo">
      <router-link :to="{name:'home'}">
         <img
        src="https://mamaearthp.imgix.net/wysiwyg/mamaearth-logo.png?auto=format&fit=scale"
        alt=""
      />
      </router-link>
    </div>
    <div class="searchbox">
      <input type="search" placeholder="search for products..." />
      <button class="btn">
        <i class="fa-solid fa-magnifying-glass search-icon"></i>Search
      </button>
    </div>
    <nav class="nav">
      <ul class="nav-links">
        <li class="link-item">
          <router-link class="links" :to="{name:'cart'}"><i class="fa-solid fa-cart-shopping iconse"></i>Cart</router-link>
        </li>
        <li class="link-item">
          <router-link class="links" :to="{name:''}"><i class="fa-solid fa-user iconse"></i>Login</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Offerbanner from "./OfferLineComp.vue";
export default {
  components: {
    Offerbanner,
  },

  computed:{
    CartItemTotal() {
     return this.$store.getters.CartItemTotal;
    }
  }
};
</script>
<style scoped>
.wrapper {
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 10px 100px;
  border-bottom: 1px solid rgb(220, 213, 213);
}
ul li {
  display: inline-block;
  padding: 0 20px;
}
ul li .links {
  text-decoration: none;
  color: rgb(107, 104, 104);
  font-weight: 600;
}
.iconse {
  padding: 10px 10px;
  color: rgb(0, 175, 239);
}
img {
  width: 10vw;
}
.searchbox input {
  width: 40vw;
  padding: 10px;
  border: 1px solid rgb(204, 197, 197);
  border-radius: 5px 0px 0px 5px;
}
.searchbox input:hover {
  border: 2px solid rgb(0, 175, 239);
}
.searchbox button {
  padding: 12px 12px;
  border: 0px;
  background: rgb(0, 175, 239);
  color: white;
  border-radius: 0px 5px 5px 0px;
  font-size: 15px;
}
.search-icon {
  padding-right: 10px;
}
</style>