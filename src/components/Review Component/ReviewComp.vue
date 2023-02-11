<template>
  <swiper
    :slidesPerView="3"
    :freeMode="true"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
  >
    <swiper-slide>
      <div class="container">
        <div class="review">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          laboriosam veniam esse voluptatum deserunt est soluta vero optio dolor
          praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sunt laboriosam veniam esse voluptatum deserunt est soluta vero optio
          dolor praesentium.
        </div>
        <div class="info">
          <div class="lazyload-image">
            <img
              src="https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680__340.jpg"
              alt=""
            />
          </div>
          <div class="sub-info">
            <div class="name">Abhijit Mhatre</div>
            <div class="rating">5 <i class="fa-solid fa-star"></i></div>
          </div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="container">
        <div class="review">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          laboriosam veniam esse voluptatum deserunt est soluta vero optio dolor
          praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sunt laboriosam veniam esse voluptatum deserunt est soluta vero optio
          dolor praesentium.
        </div>
        <div class="info">
          <div class="lazyload-image">
            <img
              src="https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680__340.jpg"
              alt=""
            />
          </div>
          <div class="sub-info">
            <div class="name">Abhijit Mhatre</div>
            <div class="rating">5 <i class="fa-solid fa-star"></i></div>
          </div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="container">
        <div class="review">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          laboriosam veniam esse voluptatum deserunt est soluta vero optio dolor
          praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sunt laboriosam veniam esse voluptatum deserunt est soluta vero optio
          dolor praesentium.
        </div>
        <div class="info">
          <div class="lazyload-image">
            <img
              src="https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680__340.jpg"
              alt=""
            />
          </div>
          <div class="sub-info">
            <div class="name">Abhijit Mhatre</div>
            <div class="rating">5 <i class="fa-solid fa-star"></i></div>
          </div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="container">
        <div class="review">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          laboriosam veniam esse voluptatum deserunt est soluta vero optio dolor
          praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sunt laboriosam veniam esse voluptatum deserunt est soluta vero optio
        </div>
        <div class="info">
          <div class="lazyload-image">
            <img
              src="https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680__340.jpg"
              alt=""
            />
          </div>
          <div class="sub-info">
            <div class="name">Abhijit Mhatre</div>
            <div class="rating">
              <p><i class="fa-solid fa-star"></i> 4</p>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import required modules
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, FreeMode, Pagination, Navigation],
    };
  },
};
</script>
<style scoped>
#app {
  height: 100%;
}
body {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.review {
  color: grey;
  font-size: 15px;
  text-align: start;
  height: 80px;
  overflow: auto;
  scroll-behavior: auto;
}
.info {
  display: flex;
}
.lazyload-image {
  flex-basis: 20%;
}
.lazyload-image img {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin-top: 20px;
}
.sub-info {
  text-align: start;
  margin: 20px 10px;
  flex-basis: 30%;
}
.rating i {
  color: rgb(227, 227, 0);
}
.container {
  padding: 20px;
  border-radius: 20px;
  margin: 20px;
  box-shadow: -1px 1px 20px 5px rgba(0, 0, 0, 0.1);
}
.name {
  color: rgb(41, 41, 41);
}
</style>