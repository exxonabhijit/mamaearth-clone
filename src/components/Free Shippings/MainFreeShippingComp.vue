<template>
  <div class="container">
    <div class="content-box">
      <div class="content-item">
        <div>
          <img
            src="https://mamaearthp.imgix.net/wysiwyg/mobile-truck.png?auto=format"
            alt=""
          />
        </div>
        <div><h3>Free Shipping</h3></div>
        <div><p>On Orders Above Rs.399</p></div>
      </div>
      <div class="content-item">
        <div class="content-item">
          <div>
            <img
              src="https://mamaearthp.imgix.net/wysiwyg/mobile-wallet.png?auto=format"
              alt=""
            />
          </div>
          <div><h3>COD Available</h3></div>
          <div><p>@ Rs.40 Per Order</p></div>
        </div>
      </div>
      <div class="content-item">
          <div><h1>Have Queries or Concerns ?</h1></div>
          <div class="contact-us"><a href="">CONTACT US</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content-box {
    border: 1px solid rgb(210, 198, 198);
    margin:   0 100px;
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: 30px 0;
}
.content-item > * {
    padding: 5px 0;
}
img  {
    height: 35px;
}
h1 {
    font-size: 20px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: rgb(106, 104, 104);
    font-weight: 400;
}
h3 {
    color: rgb(0, 175, 239);
}
 p {
     font-size: 14px;
     color: grey;
 }
 .contact-us {
     margin-top: 20px;
 }
  .contact-us a {
      text-decoration: none;
      border: 1px solid rgb(0, 175, 239);
      color: rgb(0, 175, 239);
      padding: 10px 30px;
      border-radius: 5px;
  }
    .contact-us a:hover  {
        background: rgb(0, 151, 205);
        color:  white;
    }
</style>