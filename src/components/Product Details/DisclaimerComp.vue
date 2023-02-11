<template>
  <div class="container">
    <div class="content">
      <div class="heading">
        <h1>Disclaimer</h1>
      </div>
      <div class="point-list">
        <ol>
          <li v-for="point in points" :key="point.id">
            {{ point.title }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      points: [
        {
          id: 1,
          title:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias temporibus velit suscipit illo fugiat placeat fuga",
        },
        {
          id: 2,
          title:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias temporibus velit suscipit illo fugiat placeat fuga",
        },
        {
          id: 3,
          title:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias temporibus velit suscipit illo fugiat placeat fuga",
        },
        {
          id: 4,
          title:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias temporibus velit suscipit illo fugiat placeat fuga",
        },
        {
          id: 5,
          title:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias temporibus velit suscipit illo fugiat placeat fuga",
        },
        {
          id: 6,
          title:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias temporibus velit suscipit illo fugiat placeat fuga",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,100&family=Nunito+Sans:wght@300&family=Open+Sans:ital,wght@1,300&family=Roboto:wght@300&display=swap');

/* font-family: 'Lato', sans-serif;
font-family: 'Nunito Sans', sans-serif;
font-family: 'Open Sans', sans-serif;
font-family: 'Roboto', sans-serif; */

.content {
  width: 75%;
  margin: 0 200px;
  padding: 20px 0;
  margin-bottom: 20px;
  border-bottom: 10px solid rgb(240, 239, 239);
}
h1{
  font-size: 25px;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;
  /* text-align: center; */
}
.point-list {
  padding: 0 20px;
}
li {
      color: rgb(119, 119, 119);
      line-height: 1.5;
}
</style>