<template>
    <Banner :banners="Banners"/>
    <ProductSection />
    <Banner :banners="checkLists"/>
    <ContentSection />
</template>

<script>
import Banner from '../components/Home View All/BannerSectionTwo.vue'
import ProductSection from '../components/Home View All/ProductSection.vue'
import ContentSection from '../components/Home View All/ContentSection.vue'
    export default {

        components:{Banner,ProductSection, ContentSection},

        mounted() {
            this.$store.dispatch('getBanners')

            this.$store.dispatch('getChecklist')
        },

        computed: {
            Banners() {
              return  this.$store.state.banners;
            },
            checkLists() {
                 return this.$store.state.checkList;
            }
            
        }
    }
</script>

<style scoped>

</style>