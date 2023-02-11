<template>
  <div class="container">
    <div class="content">
      <h1>ADDITIONAL INFORMATION</h1>
      <div class="info-section">
        <div class="info-content" v-for="item in items" :key="item.id">
          <h2 class="title-text">{{ item.title }}</h2>
          <span class="desc">{{ item.desc }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, title: "BEST BEFORE", desc: "24 Months" },
        { id: 2, title: "DIMENSIONS", desc: "10 * 5 * 5 cm" },
        {
          id: 3,
          title: "MANUFACTURER",
          desc: "Hitech Formulations Pvt Ltd, Sai Road, Baddi, Distt. Solan, Himanchal Pardesh, India - 173205",
        },
        {
          id: 4,
          title: "MARKETED BY",
          desc: "Honasa Consumer Pvt Ltd, BLM Tower, Plot No. 63, 4th Floor, Sector 44, Gurgaon-122003",
        },
        { id: 5, title: "LICENSE NO", desc: "HIM/COS/16/241" },
        { id: 6, title: "COUNTRY OF ORIGIN", desc: "India" },
        {
          id: 7,
          title: "NODAL OFFICER DETAIL",
          desc: "Supratim Sarkar - nodal@mamaearth.in",
        }
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
.info-section {
  display: flex;
  flex-wrap: wrap;
}
.info-content  {
  flex-basis: 50%;
}
h1 {
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
    color: rgb(60, 160, 218);
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif

}
.info-content > * {
  padding:15px;
} 
h2 {
  color: rgb(60, 160, 218);
      display: block;
    font-weight: 500;
    font-size: 15px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}
span {
  font-size: 15px;
      color: rgb(119, 119, 119);

}

</style>