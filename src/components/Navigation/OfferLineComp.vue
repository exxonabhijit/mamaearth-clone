<template>
<div class="offer-line">
    <p><a href="#">Asia's 1st Brand with MADE SAFE certified product</a></p>
    <p>Free Shipping Above 399 | COD Available | Extra 5% OFF on Prepaid Order | Shop Now</p>
    <p>Try Now</p>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.offer-line {
    background-color:rgb(212, 66, 76) ;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
}
.offer-line p , a{
    font-size: 12.8px;
    color: white;
    padding: 7px;
    text-decoration: none;
}

@media screen and (max-width:480px){
    .offer-line {
        display: none;
    }
}
</style>