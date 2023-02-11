<template>
  <div class="container">
    <div class="top-section">
      <div class="brand-logo">
        <router-link :to="{name:'home'}"><img
          src="https://mamaearthp.imgix.net/wysiwyg/mamaearth-logo.png?auto=format&fit=scale"
          alt=""
        /></router-link>
      </div>
    </div>
    <div class="main-section">
      <div class="part-2 section">
        <h1>Useful Links</h1>
        <ul>
          <li v-for="link in useful_links" :key="link.id">
            {{ link.title }}
          </li>
        </ul>
      </div>
      <div class="part-2 section">
        <h1>Categories</h1>
        <ul>
          <li v-for="link in Categories" :key="link.id">
            {{ link.title }}
          </li>
        </ul>
      </div>
      <div class="part-2 section">
        <h1>My Accounts</h1>
        <ul>
          <li v-for="link in Accounts" :key="link.id">
            {{ link.title }}
          </li>
        </ul>
      </div>
      <div class="part-2 section">
        <img
          src="https://mamaearthp.imgix.net/wysiwyg/Best-Brand500x5002x.png?auto=format"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      useful_links: [
        { id: 1, title: "Privacy Policy" },
        { id: 2, title: "Return" },
        { id: 3, title: "Terms & Conditions" },
        { id: 4, title: "Terms & Conditions Cashback" },
        { id: 5, title: "FAQ's" },
        { id: 6, title: "We're Safe" },
        { id: 7, title: "Contact us" },
        { id: 8, title: "Track Order" },
        { id: 9, title: "Site Map" },
        { id: 12, title: "About Us" },
      ],
      Categories: [
        { id: 1, title: "Baby" },
        { id: 2, title: "Beauty" },
        { id: 3, title: "Hair" },
        { id: 4, title: "face" },
        { id: 5, title: "Body" },
        { id: 6, title: "Gift Pack" }
      ],
      Accounts: [
        { id: 1, title: "Account" },
        { id: 2, title: "Orders" },
        { id: 3, title: "Addresses" }
      ],
    };
  },
};
</script>

<style scoped>
.container {
  margin: 0 100px;
}
.brand-logo {
  text-align: center;
  padding: 10px 0;
}
.top-section , .main-section{
  border-right: 1px solid rgb(188, 188, 188);
  border-bottom: 1px solid rgb(188, 188, 188);
  border-left: 1px solid rgb(188, 188, 188);
}

.brand-logo img {
  width: 200px;
  height: auto;
}
.main-section {
  display: flex;
  justify-content: space-between;
  padding: 20px 80px;
}
.section > h1 {
    font-size: 17px;
    text-transform: uppercase;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: 400;
    color: rgb(87, 82, 82);
}
.section > ul li {
    text-decoration: none;
    list-style: none;
    margin-top: 15px;
    color: rgb(145, 143, 143);
    cursor: pointer;
}
.section > ul li:hover {
    color: rgb(0, 175, 239);
} 
.section > img  {
    width: 150px;
    margin-top: 15px;
    height: 255px;
}
</style>