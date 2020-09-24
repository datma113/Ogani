<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <img src="../../assets/img/apple.png" class="img" />
      </div>
      <div class="col-lg-6 d-container">
        <p style="font-weight: bold; font-size: 4rem">Apple Fresh Fruits</p>
        <div>
          <i class="fas fa-star" style="color: orange"></i>
          <i class="fas fa-star" style="color: orange"></i>
          <i class="fas fa-star" style="color: orange"></i>
          <i class="fas fa-star" style="color: orange"></i>
          <i class="fas fa-star-half-alt" style="color: orange"></i>
          <span style="color: red; font-size: 1.5rem">(182 Views)</span>
          <h1 style="color: red; font-weight: bold; margin: 2rem 0">$50.00</h1>
          <div style="font-size: 1.5rem">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
            necessitatibus optio voluptates ad rem deleniti iure. Distinctio
            officiis porro magnam vero cumque nostrum inventore, vitae facilis
            ipsum alias error nisi rem quam quo in ipsam enim aperiam similique
            ut velit eligendi. Libero suscipit commodi recusandae cupiditate
            enim explicabo, delectus odit!
          </div>
          <div class="row " style=" padding: 2rem 0;">
            <div class=" btn-container">
              <div class="btn-in btn-pre" @click="down">-</div>
              <div class="btn-in">{{number}}</div>
              <div class="btn-in btn-next" @click="up">+</div>
            </div>
            <div class="col-4">
                <button class=" btn btn-success" style="height: 100%; width: 100%; font-size: 2rem">Add To Cart</button>
            </div>
            <div class="ic">
                <i class="far fa-heart"></i>
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="row" style="font-size: 2rem">
            <div class="col-lg-4">
                <p style="font-weight: bold">Availability</p>
            </div>
            <div class="col-lg-8">
                instock
            </div>
        </div>
         <div class="row" style="font-size: 2rem">
            <div class="col-lg-4">
                <p style="font-weight: bold">Shipping</p>
            </div>
            <div class="col-lg-8">
                01 day shipping <span style="color: red">(Free pickup today)</span>
            </div>
        </div>
         <div class="row" style="font-size: 2rem">
            <div class="col-lg-4">
                <p style="font-weight: bold">weight</p>
            </div>
            <div class="col-lg-8">
                0.5 kg
            </div>
        </div>
         <div class="row" style="font-size: 2rem">
            <div class="col-lg-4">
                <p style="font-weight: bold">Share on</p>
            </div>
            <div class="col-lg-8">
                lorem
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "details",
  data() {
    return {
        number: 0
    };
  },
  methods: {
      up: function() {
          this.number++;
      },
      down: function() {
          return this.number > 0 ? this.number-- : 0 ;
      }
  }
};
</script>

<style scoped>
.img {
  width: 100%;
  background-color: #f5f5f5;
}
.d-container {
  display: flex;
  flex-direction: column;
  
}
.btn-container {
  display: flex;
  margin-left: 1rem;
 
}
.btn-in {
    padding: 1rem 2rem;
    background-color: #f5f5f5;
    cursor: pointer;
    user-select: none;
    font-size: 2rem;
}
.btn-pre:hover, .btn-next:hover {
    background-color: gray;
}
.ic {
    padding: 2rem;
    background-color: #dddddd;
}
.line {
    height: 1px;
    width: 100%;
    background-color: #dddddd;
    margin: 3rem 0;
}
</style>
