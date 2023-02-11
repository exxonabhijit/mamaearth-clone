<template>
  <div class="container">
    <h1>Blogs</h1>
    <div class="content">
      <div class="blog-article" v-for="blog in blogs" :key="blog.id">
        <div class="blog-side">
          <div class="blog-image">
            <img
              :src="blog.img"
              alt=""
            />
          </div>
        </div>
        <div class="card-body-side">
          <BlogCard :blog="blog"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import BlogCard from "../components/Blog Component/BlogCard.vue";
export default {
  components: {
    BlogCard,
  },

  data() {
    return {
      blogs: []
    };
  },
  mounted() {
    axios.get('http://localhost:3000/blogs')
    .then((Response) => {
      console.log("Blog data", Response);
      this.blogs = Response.data;
    })
    .catch((error) => {
      console.log("getting error...", error);
    })
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 20px;
  font-size: 32px;
  font-weight: 500;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.content {
  width: 60%;
  margin: 20px 300px;

}
.blog-article {
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid rgb(181, 181, 181);
}
</style>