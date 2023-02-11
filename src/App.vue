<template>
<Navigation />
<Megabar />
  <router-view/>
<Footer />
</template>

<script>
import Navigation from "./components/Navigation/NavigationComp.vue"
import Megabar from "./components/Navigation/MegaNavbar.vue"
import Footer from "./components/Footer Section/FooterComp.vue"
export default {
  components:{
    Navigation,Megabar, Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
