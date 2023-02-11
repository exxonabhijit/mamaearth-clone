<template>
  <div class="container">
    <div class="content">
      <h1>Planting First Of many</h1>
      <div class="image-section">
          <div class="flex-image" v-for="image in images" :key="image.id">
              <img :src="image.img" alt="">
          </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { id: 1, img: "https://mamaearthp.imgix.net/wysiwyg/Image_12x.png" },
        { id: 2, img: "https://mamaearthp.imgix.net/wysiwyg/Image_22x.png" },
        { id: 3, img: "https://mamaearthp.imgix.net/wysiwyg/Image_32x.png" },
      ],
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300&family=Nunito+Sans:wght@200&family=Open+Sans:wght@300&family=Roboto:wght@100&display=swap');

/* font-family: 'Lato', sans-serif;
font-family: 'Nunito Sans', sans-serif;
font-family: 'Open Sans', sans-serif;
font-family: 'Roboto', sans-serif; */
.content  {
    padding: 20px;
}
.image-section {
    display: flex;
    justify-content: space-evenly;
    margin: 50px 0;
}
.image-section img {
    width: 350px;
}
h1 {
    text-align: center;
    margin: 30px 0;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 34px;
    font-weight: bold;  
}
</style>