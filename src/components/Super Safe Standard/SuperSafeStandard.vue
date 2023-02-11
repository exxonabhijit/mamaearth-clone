<template>
    <div class="Main-section">
        <div class="heading">
            <h1>Super Safe Standards</h1>
        </div>
        <div class="content">
            <SafeStandardCardComp />
            <SafeStandardCardComp />
            <SafeStandardCardComp />
        </div>
    </div>
</template>

<script>
import SafeStandardCardComp from "../Super Safe Standard/SafeStandardCardComp.vue"
    export default {
        components:{ SafeStandardCardComp}
    }
</script>

<style scoped>
.Main-section{
    margin:  0 200px;
}
h1 {
    text-align: center;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 400;
}
.content {
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
}
</style>