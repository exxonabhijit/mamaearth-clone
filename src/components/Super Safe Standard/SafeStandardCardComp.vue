<template>
  <div class="safe-standard-card">
    <div class="image-side">
      <img
        src="https://mamaearthp.imgix.net/wysiwyg/dermatology-tested-100x100.png?auto=format&fit=100%2C100&ssl=1"
        alt=""
      />
    </div>
    <div class="main-content">
      <h3 class="heading">Dermatologically Tested</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        eaque veniam cupiditate
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.safe-standard-card{
    display: flex;
    padding:0 20px;
}
img {
    margin: 0 10px;
}
.main-content > p {
    margin-top: 15px;
    line-height: 1.5;
}
h3 {
    font-weight: bold;
    font-family:'Times New Roman', Times, serif;
    text-shadow: 1px 2px 2px rgb(208, 205, 205);
}
p {
    color: rgb(68, 68, 68);
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 15px;
}
</style>