<template>
  <BannerSection />
  <div class="container">
    <MultirangeProductCard />
    <BestSellerComp />
  </div>
  <YoutubeSection />
  <SuperSafe />
  <ReviewComp />
</template>

<script>
import BannerSection from "../components/Banner Section/BannerSection.vue";
import MultirangeProductCard from "../components/Multi range produts/MultiRangeProductSlider.vue";
import BestSellerComp from "../components/Multi range produts/BestSellerHome.vue";
import YoutubeSection from "../components/Youtube Section/YoutubeSection.vue";
import SuperSafe from "../components/Super Safe Standard/SuperSafeStandard.vue";
import ReviewComp from "../components/Review Component/MainReviewComp.vue";
export default {
  components: {
    BannerSection,
    MultirangeProductCard,
    YoutubeSection,
    SuperSafe,
    ReviewComp,
    BestSellerComp
  },
};
</script>
<style scoped>
.container {
  margin: 40px 0;
}
</style>
