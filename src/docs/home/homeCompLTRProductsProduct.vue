<template>
  <div class="LTR-container mt-5">
    <div class="row">
      <div class="col-8 LTR-title">
        {{ product.title }}
      </div>
      <div class="col-4 icon-container">
        <span class="icon" @click="preCarousel">
          <i class="fas fa-chevron-left fa-2x"></i>
        </span>
        <span class="icon" @click="nextCarousel">
          <i class="fas fa-chevron-right fa-2x"></i>
        </span>
      </div>
    </div>
    <div class="list-container" v-bind:id="`listContainer`">
      <div class="list-carousel row" v-bind:id="`listCarousel${product.id}`">
        <LTRProduct
          v-for="subProduct in product.list"
          v-bind:key="subProduct.id"
          class="col-6 mb-3"
          v-bind:subProduct="subProduct"
        />
      </div>
    </div>
   
  </div>
</template>

<script>
import LTRProduct from "./LTRProduct";
export default {
  name: "homeCompLTRProductsProduct",
  data() {
    return {
      indexOfCarousel: 0,
  
    };
  },
  props: {
    product: {
      type: Object,
      default: {}
    }
  },
  methods: {
    nextCarousel: function() {
      if (this.indexOfCarousel === 1) {
        let carousel = document.getElementById(`listCarousel${this.product.id}`);
        let getWidth = document.getElementById(`listContainer`);
        carousel.style.transform += `translateX(${getWidth.clientWidth}px)`;
        this.indexOfCarousel = 0;
      } else {
        let carousel = document.getElementById(`listCarousel${this.product.id}`);
        let getWidth = document.getElementById("listContainer");
        carousel.style.transform += `translateX(${-getWidth.clientWidth}px)`;
        this.indexOfCarousel++;
      }
    },
    preCarousel: function() {
      if (this.indexOfCarousel === 0) {
        let carousel = document.getElementById(`listCarousel${this.product.id}`);
        let getWidth = document.getElementById("listContainer");
        carousel.style.transform += `translateX(${-getWidth.clientWidth}px)`;
        this.indexOfCarousel = 1;
      } else {
        let carousel = document.getElementById(`listCarousel${this.product.id}`);
        let getWidth = document.getElementById("listContainer");
        carousel.style.transform += `translateX(${getWidth.clientWidth}px)`;
        this.indexOfCarousel--;
      }
    },
    resetWhenRes: function() {
        let carousel = document.getElementsByClassName("list-carousel");
        let getWidth = document.getElementsByClassName("list-container");
        for( let i = 0; i < carousel.length; i++) {
          carousel[i].style.transform = `translateX(0)`;
        }
          this.indexOfCarousel = 0;    
    }
  },
  mounted() {
    window.addEventListener("resize", this.resetWhenRes);
  },
  components: {
    LTRProduct
  }
};
</script>

<style scoped>
.row {
  padding: 0;
  margin: 0;
}
.LTR-container {
  display: flex;
  flex-direction: column;
}
.LTR-title {
  font-weight: bold;
  font-size: 2.1rem;
  display: flex;
  align-items: center;
}
.icon {
  border: thin solid #dddddd;
  padding: 1rem 1rem;
  cursor: pointer;
  color: #4caf50;
  font-weight: bold;
  transition: 0.2s;
}
.icon:hover {
  background-color: rgb(196, 196, 196);
  color: black;
}
.icon-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.list-container {

  width: 100%;
   overflow: hidden; 
}
.list-carousel {
  transition: 0.4s;

  width: 200%;
}
</style>
