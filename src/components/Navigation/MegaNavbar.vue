<template>
  <div class="container">
    <div class="navbar">
      <div class="dropdown">
        <router-link :to="{name:'home'}" class="dropbtn">HOME</router-link>
      </div>

      <div class="dropdown">
        <button class="dropbtn">SHOP</button>
        <div class="dropdown-content">
          <div class="row">
            <div class="column1 column">
              <h3>Baby</h3>
              <ul>
                <li v-for="baby in babyCat" :key="baby.id">
                  <router-link :to="{ name:'CatWiseProduct', params:{id: baby.id}}" class="links"
                    >{{baby.title}}</router-link
                  >
                </li>
                <li>
                  <router-link :to="{name:'home'}" class="seeAll">See All</router-link>
                </li>
              </ul>
            </div>
            <div class="column2 column">
              <h3>Beauty</h3>
              <ul>
                <li v-for="beauty in beautyCat" :key="beauty.id">
                  <router-link :to="{ name:'CatWiseProduct', params:{id: beauty.id}}" class="links"
                    >{{beauty.title}}</router-link
                  >
                </li>
                <li>
                  <router-link :to="{name:'home'}" class="seeAll">See All</router-link>
                </li>
              </ul>
            </div>
            <div class="column3 column">
              <h3>Hair</h3>
              <ul>
                <li v-for="hair in hairCat" :key="hair.id">
                  <router-link :to="{ name:'CatWiseProduct', params:{id: hair.id}}" class="links"
                    >{{hair.title}}</router-link
                  >
                </li>
                <li>
                  <router-link :to="{name:'home'}" class="seeAll">See All</router-link>
                </li>
              </ul>
            </div>
            <div class="column4 column">
              <h3>Face</h3>
              <ul>
                <li v-for="face in faceCat" :key="face.id">
                  <router-link :to="{ name:'CatWiseProduct', params:{id: face.id}}" class="links"
                    >{{face.title}}</router-link
                  >
                </li>
                <li>
                  <router-link :to="{name:'home'}" class="seeAll">See All</router-link>
                </li>
              </ul>
            </div>
            <div class="column5 column">
              <h3>Body</h3>
              <ul>
                <li v-for="body in bodyCat" :key="body.id">
                  <router-link :to="{ name:'CatWiseProduct', params:{id: body.id}}" class="links"
                    >{{body.title}}</router-link
                  >
                </li>
                <li>
                  <router-link :to="{name:'home'}" class="seeAll">See All</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="dropdown">
        <router-link :to="{ name: 'giftpacks' }" class="dropbtn"
          >GIFT PACKS</router-link
        >
      </div>

      <div class="dropdown">
        <router-link :to="{ name: 'AllProducts' }" class="dropbtn"
          >ALL PRODUCTS</router-link
        >
      </div>

      <div class="dropdown">
        <router-link :to="{ name: 'blog' }" class="dropbtn">BLOG</router-link>
      </div>

      <div class="dropdown">
        <router-link :to="{ name: 'plantGoodness' }" class="dropbtn"
          >PLANT GOODNESS</router-link
        >
      </div>

      <div class="dropdown">
        <router-link :to="{ name: 'home' }" class="dropbtn"
          >STORE LOCATOR</router-link
        >
      </div>
      
       <div class="dropdown">
        <router-link :to="{ name: 'OurStory' }" class="dropbtn"
          >OUR STORY</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      babyCat:[], //2
      beautyCat:[], //3
      hairCat:[], //4
      faceCat:[], //5
      bodyCat:[], //6
    };
  },

  mounted() {
    //baby category data
    axios.get("http://localhost:3000/sub_cat?product_categoryId=2")
    .then((Response) => {
      this.babyCat = Response.data;
    })

    //baby category data
    axios.get("http://localhost:3000/sub_cat?product_categoryId=3")
    .then((Response) => {
      this.beautyCat = Response.data;
    })
    //hair category data
    axios.get("http://localhost:3000/sub_cat?product_categoryId=4")
    .then((Response) => {
      this.hairCat = Response.data;
    })

    //face category data
    axios.get("http://localhost:3000/sub_cat?product_categoryId=5")
    .then((Response) => {
      this.faceCat = Response.data;
    })

    //body category data
    axios.get("http://localhost:3000/sub_cat?product_categoryId=6")
    .then((Response) => {
      this.bodyCat = Response.data;
    })
  },
};
</script> 

<style scoped>

.navbar {
  overflow: hidden;
  box-shadow: 0px 15px 10px -15px #111;
  background-color: white;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0 90px;
  position: relative;
  z-index: 5;
}

.navbar a {
  float: left;
  /* font-size: 13px; */
  color: white;
  text-align: center;
  padding: 10px 0;
  text-decoration: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}
.active1 {
  border: none;
  font-size: 12px;
  outline: none;
  font-weight: bolder;
  color: rgb(0, 175, 239);
  padding: 10px 17px;
  margin: 0;
  background: transparent;
}
.dropdown .dropbtn {
  border: none;
  font-size: 12px;
  outline: none;
  font-weight: bolder;
  color: rgb(107, 104, 104);
  padding: 10px 17px;
  margin: 0;
  background: transparent;
}

.dropdown-content {
  display: none;
  -webkit-box-shadow: 0px 1px 21px 9px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 1px 21px 9px rgba(0, 0, 0, 0.12);
  position: fixed;
  z-index: 1;
}

.dropdown-content .header {
  background: #eee;
  padding: 16px;
  color: white;
}
.dropdown:hover .dropdown-content {
  display: block;
  border-top: 2px solid rgb(0, 175, 239);
  background: white;
}

/* Create three equal columns that floats next to each other */
.column {
  float: left;
  /* background-color: #eee; */
  height: auto;
  padding: 0 30px;
  margin-top: 20px;
}
.column h3 {
  color: rgb(119, 119, 119);
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
}
.column ul li .links{
  float: none;
  color: rgb(168, 168, 168);
  text-decoration: none;
  display: block;
  text-align: left;
  font-size: 13px;
}
.column ul li .links:hover {
   color: rgb(0, 175, 239);
}
.column ul li .seeAll {
  color: rgb(75, 139, 11);
  font-size: 13px;
}
.column ul li {
  list-style: none;
}
ul {
  padding: 10px 0;
}
.column a:hover {
  color: rgb(119, 119, 119);
}

.dropbtn {
  cursor: pointer;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    height: auto;
  }
}
</style>