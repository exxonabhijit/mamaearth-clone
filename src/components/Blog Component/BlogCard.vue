<template>
  <div class="card-body">
    <div class="card-title">
      <router-link class="link" :to="{ name:'blogDisplay', params:{id: blog.id}}">{{blog.title}}</router-link>
    </div>
    <div class="card-text">
      <p>{{ blog.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blog"],
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital@0;1&family=Nunito+Sans:wght@300&family=Open+Sans:ital,wght@1,300&family=Roboto:wght@300&display=swap");
.card-body {
  padding: 0 20px;
}
.card-title {
  margin: 10px 0;
}
p {
  line-height: 1.5;
  font-family: "Nunito Sans", sans-serif;
  font-size: 18px;
  color: rgb(98, 97, 97);
}
.link {
  font-size: 23px;
  font-weight: 500;
  color: rgb(0, 175, 239);
  cursor: pointer;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
}
.link:hover {
  color: grey;
}
</style>