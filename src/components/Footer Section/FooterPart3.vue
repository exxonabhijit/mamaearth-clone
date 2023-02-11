<template>
  <div class="container">
    <div class="content">
      <div class="heading-part">
        <h1>show us some <i class="fa-solid fa-heart"></i> on social media</h1>
      </div>
      <div class="social-media-part">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram-square"></i>
        <i class="fa-brands fa-pinterest"></i>
        <i class="fa-solid fa-envelope"></i>
      </div>
    </div>
    <div class="sub-content">
      <h1>Created By Abhijit Mhatre</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  margin: 0 100px;
  margin-bottom: 20px;
}
.content,
.sub-content {
  border-right: 1px solid rgb(188, 188, 188);
  border-bottom: 1px solid rgb(188, 188, 188);
  border-left: 1px solid rgb(188, 188, 188);
  padding: 20px 20px;
  
}
.heading-part h1 {
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  text-transform: uppercase;
  color: rgb(68, 63, 63);
}
.heading-part i {
  color: red;
}
.social-media-part {
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 18px;
}
.social-media-part > i {
  margin: 0 15px;
  color: rgb(147, 142, 142);
  font-size: 20px;
}
.sub-content {
  text-align: center;
  text-transform: uppercase;
  color: rgb(159, 159, 159);
  font-size: 10px;
}
</style>