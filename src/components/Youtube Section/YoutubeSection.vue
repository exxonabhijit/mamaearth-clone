<template>
  <div class="container">
    <div class="content-section">
      <div class="video-side">
        <iframe
          width="500"
          height="400"
          src="https://www.youtube.com/embed/mBjg6ClbRxo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="content-side">
        <h1>Our Goodness Promises</h1>
        <p>
          At Mamaearth, we live to spread a little love and goodness every day. We believe that goodness isn’t a superpower, nor a special gift, it’s inside all of us and it shows in the little choices we make. Our mission is to bring you the best of nature through our purest and most nurturing products that are made without any toxins or harmful chemicals. For us goodness also means being good to the earth. Which is why we recycle more plastic than we use and we're PETA Certified - which means we never test on animals. This is our #GoodnessInside.
        </p>
        <div class="info-btn">
          <a href="" class="shop-btn">Shop Now</a>
          <a href="" class="pledeg-btn">Our Pledges</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300&family=Nunito+Sans:wght@200&family=Open+Sans:wght@300&family=Roboto:wght@100&display=swap');

.content-section {
  margin: 0 100px;
  display: flex;
}
.video-side {
  flex-basis: 50%;
}
.content-side {
  flex-basis: 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.content-side > * {
  margin-top: 20px;
}
.content-section {
  padding: 50px 150px;
}
h1 {
  color: rgb(65, 168, 221);
  font-size: 20px;
  font-weight: 400;font-family: 'Open Sans', sans-serif;
  font-weight: bold;
}
p {
  color: rgb(146, 145, 145);
  line-height: 1.5;
  font-size: 18px;
}
iframe {
  border-radius: 10px;
  border: 15px solid rgb(130, 195, 65);
}
.shop-btn,
.pledeg-btn {
  text-decoration: none;
  padding: 10px 30px;
  border-radius: 5px;
  margin: 0 10px;
}
.shop-btn {
  background: rgb(65, 168, 221);
  color: white;
}
.pledeg-btn {
  border: 1px solid rgb(65, 168, 221);
  color: rgb(65, 168, 221);
}
</style>