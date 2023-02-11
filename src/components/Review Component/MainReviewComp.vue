<template>
<div class="container">
    <h1>What Our Customer Says</h1>
    <hr>
    <div class="sub-container">
        <ReviewComp />
    </div>
</div>

</template>

<script>
import ReviewComp from "../Review Component/ReviewComp.vue"
    export default {
        components :{ ReviewComp}
    }
</script>

<style scoped>
.container {
    height: 60vh;
}
h1 {
    text-align: center;
    margin-top: 80px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
}
.sub-container {
    margin-top: 40px;
}
hr {
    width: 400px;
    margin: 10px auto;
    background: rgb(16, 203, 16);
    height: 3px;

}
</style>