<template>
    <div class="container">
        <div class="content">
            <div class="heading">
                <h1>Best Sellers</h1>
            </div>
        </div>
            <Multicard :Products="bestSellers"/>
    </div>
</template>

<script>
import Multicard from '../Card Section/MulticardComp.vue'
    export default {
        components:{Multicard},

        mounted() {
            this.$store.dispatch('BestSellerProduct')
        },

        computed:{
           bestSellers() {
                return this.$store.state.bestSellers;
            } 
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300&family=Nunito+Sans:wght@200&family=Open+Sans:wght@300&family=Roboto:wght@100&display=swap');

/* font-family: 'Lato', sans-serif;
font-family: 'Nunito Sans', sans-serif;
font-family: 'Open Sans', sans-serif;
font-family: 'Roboto', sans-serif; */
.container {
    margin: 50px 0;
}
.content {
background-color: rgb(255, 91, 111);
padding: 15px 0;
text-align: center;
margin-bottom: 20px;
font-family: 'Open Sans', sans-serif;
color: white;
letter-spacing: 2px;
}
</style>