<template>
  <div class="container">
    <div class="content">
      <iframe
        src="https://www.youtube.com/embed/0u4VO0MPLiI"
        frameborder="10"
        class="ytsyle"
      ></iframe>
      <div class="form-section">
        <h1>EXCITED TO MEET YOUR PLANT?</h1>
        <form action="">
          <div><input type="text" placeholder="Enter Your Order ID" /></div>
          <button href="">CHECK YOUR TREE</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300&family=Nunito+Sans:wght@200&family=Open+Sans:wght@300&family=Roboto:wght@100&display=swap');

/* font-family: 'Lato', sans-serif;
font-family: 'Nunito Sans', sans-serif;
font-family: 'Open Sans', sans-serif;
font-family: 'Roboto', sans-serif; */

.content {
  display: flex;
  justify-content: space-evenly;
  padding: 30px 0;
}
.ytsyle {
  width: 525px;
  height: 320px;
  border: 15px solid rgb(130, 195, 65);
  border-radius: 20px;
}
.form-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1 {
 font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
  font-size: 32px;
}
form {
    width: 300px;
    text-align: center;
}
input , button {
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    text-decoration: none;
}
input:hover {
    border: 1px solid rgb(65, 168, 221);
}
button {
    background: rgb(65, 168, 221);
    color: white;
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 10px;
}
button:hover {
    background: rgb(130, 195, 65);
    color: white;
}
</style>