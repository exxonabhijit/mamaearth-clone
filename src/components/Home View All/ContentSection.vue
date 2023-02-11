<template>
    <div class="container">
        <div class="content">
            <div class="description" v-for="desc in viewDescription" :key="desc.id">
                <h1>{{desc.title}}</h1>
                <p>{{desc.content}}</p>
            </div>
            <div class="benifits">
                <div class="ben-content" v-for="benifit in ViewBenifits" :key="benifit.id">
                <h1 class="title">{{benifit.title}}</h1>
                <p class="desc"></p>
                <ol>
                    <li v-for="question in benifit.que" :key="question.id">
                        <p><b>{{question.q}}</b>: {{question.a}}</p>
                    </li>
                </ol>
                </div>
            </div>
            <div class="btn-section">
            <router-link class="btn" :to="{name:'AllProducts'}">View All Products</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.$store.dispatch('getViewBenifits')
            this.$store.dispatch('getViewDescription')
        },

        computed:{
            ViewBenifits() {
                return this.$store.state.viewBenifits;
            },
            viewDescription() {
                return this.$store.state.viewDesc;
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300&family=Nunito+Sans:wght@200&family=Open+Sans:wght@300&family=Roboto:wght@100&display=swap');

.content {
    margin: 50px 130px;
}
.content h1 {
    color: rgb(119, 119, 119);;
    font-size: 35px;
    font-family:'Lato', sans-serif;
    margin: 20px 0;
    font-weight: 500;
}
ol {
    padding: 0 30px;
    color: rgb(119, 119, 119);
}
ol li {
    margin: 10px 0;
}
p {
    color: grey;
font-family: 'Roboto', sans-serif; 
line-height: 1.5;
    font-size: 18px;
}
b {
font-size: 18px;
font-weight: 800;
}
.btn-section {
    text-align: center;
    margin: 50px 0;
}
.btn {
    background-color: rgb(65, 168, 221);
    padding: 15px 20px;
    text-decoration: none;
    font-family: 'Lato', sans-serif;
    color: white;
    font-size: 18px;
    letter-spacing: 2px;
}
.btn:hover{
    background-color: rgb(130, 195, 65);
}
</style>