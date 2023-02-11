<template>
  <div class="container">
    <div class="content">
      <div class="back-btn">
        <button @click.prevent="goBackPage()" class="bk-btn"><i class="fa-solid fa-arrow-left-long"></i></button>
      </div>
      <div class="title-section">
        <div class="title">
          <h1 class="heading">{{ blog.title }}</h1>
          <h3 class="posted">
            POSTED ON <b>{{ blog.date }}</b> BY <b>{{ blog.author }}</b>
          </h3>
        </div>
      </div>
      <div class="img-section">
        <img :src="blog.img" alt="blog_img" />
      </div>
      <div class="body-section">
        <div class="discription">
          <p>
            {{ blog.summary }}
          </p>
        </div>
        <div class="questions">
          <ul>
            <li v-for="que in blog.questions" :key="que.id">
              <h1 class="que">{{ que.q }}</h1>
              <p class="ans">{{ que.a }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="comment-form">
        <div class="form_heading">
          <h1>LEAVE A REPLY</h1>
        </div>
        <form @submit.prevent="addCommentOfBlog()">
          <label for="">COMMENT*</label><br />
          <textarea
            name="comment"
            id="comment"
            maxlength="100"
            required
            v-model="comment.body"
          ></textarea
          ><br />
          <label for="name" id="name">NAME*</label><br />
          <input type="text" required v-model="comment.name"/><br />
          <label for="email" id="email">EMAIL*</label><br />
          <input type="email" required v-model="comment.email"/><br />
          <button class="btn" type="submit">POST COMMENT</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],

  data() {
    return {
      blog: [],
      comment: {
        body:null,
        name:null,
        email:null
      },
    };
  },

  methods: {
    goBackPage() {
      this.$router.go(-1);
    },
    addCommentOfBlog() {
      axios.post(`http://localhost:3000/blogs/${this.$route.params.id}/comments`, {
        body:this.comment.body,
        name:this.comment.name,
        email:this.comment.email
      })
      .then((Response)=> {
        alert("Successfully Added Comment", Response)
      })
      .catch((error) => {
        console.log("Something is Wrong...", error);
      })

      this.$router.push('/blogs');

    }
  },

  mounted() {
    axios
      .get(`http://localhost:3000/blogs/${this.$route.params.id}`)
      .then((response) => {
        console.table(this.blog = response.data)
        this.blog = response.data;
      });
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300&family=Nunito+Sans:wght@200&family=Open+Sans:wght@300&family=Roboto:wght@100&display=swap");

.content {
  width: 60%;
  margin: 0 200px;
  background: white;
  padding: 30px;
  border-right: 1px solid rgb(220, 220, 220);
  font-family: "Roboto", sans-serif;
}
.bk-btn {
  background: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: #777777;;
}
.bk-btn:hover {
  color:#03c4eb;
}
.comment-form {
  padding-top: 30px;
}
.form_heading h1 {
  font-size: 32px;
  font-weight: 500;
}
form {
  padding-top: 30px;
}
form label {
  color: #777777;
  font-size: 17px;
}
form textarea {
  width: 100%;
  max-width: 100%;
  border: none;
  outline: none;
  background: #dbdbdb;
  height: 300px;
  transition: 0.8s;
  margin: 10px 0;
}
form input {
  width: 40%;
  padding: 15px 0;
  background: #dbdbdb;
  border: none;
  outline: none;
  margin: 10px 0;
}
.btn {
  padding: 15px 30px;
  background: #03c4eb;
  border: none;
  color: white;
  font-size: 15px;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 20px;
}
.title-section .title > * {
  margin: 20px 0;
  font-weight: 500;
}
.heading {
  font-size: 32px;
}
.posted {
  font-size: 15px;
  word-spacing: 4px;
}
.questions ul li {
  list-style: none;
}
.questions .que {
  color: #777777;
  font-size: 20px;
  font-weight: bold;
}
h3 {
  color: gray;
  font-weight: 600;
}
.title-section {
  margin: 30px 0;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(220, 220, 220);
}
.img-section img {
  width: 100%;
}
b {
  color: #03c4eb;
}
p {
  font-size: 18px;
  line-height: 2;
  word-spacing: 2px;
  padding: 20px 0;
}
.body-section {
  padding: 20px 0;
  border-bottom: 1px solid rgb(220, 220, 220);
}
</style>