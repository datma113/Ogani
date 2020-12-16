<template>
  <div class="container home-p-container">
    <div class="title-all-products">
      <p style="border-bottom: thin solid black; cursor: pointer;">
        All products type
      </p>
    </div>
    <div class="row mt-5 all-products-container">
      <div class="all-products-carousel row col-12" id="allProductsCarousel">
        <homeCompProductsType
          v-for="products in listAllProductsType"
          v-bind:key="products.id"
          v-bind:products="products"
          class="col-6 col-md-4 col-lg-3 edit-margin"
          v-bind:id="`imgCarousel${products.id}`"
        >
        </homeCompProductsType>
        <!---next and pre icon---->
      </div>
      <button
        class="arrow arrow-right"
        v-bind:disabled="checkDisabledNextBtnMethod()"
        @click="nextSlideProductsType(),
         increaseIndexOfCarousel()   
        "
      >
        <i class="fas fa-caret-right fa-3x"></i>
      </button>
      <button
        class="arrow arrow-left"
        v-bind:disabled="checkDisabledPreBtnMethod()"
        @click="preSlideProductsType(),
        decreaseIndexOfCarousel()"
      >
        <i class="fas fa-caret-left fa-3x"></i>
      </button>
    </div>
  </div>
</template>
<script>
import homeCompProductsType from "./homeCompProductsType";

export default {
  name: "homeCompAllProducts",
  data() {
    return {
      /**
       * index when responsive of carousel
       */
      indexOfImageLg: 0,
      indexOfImageMd: 0,
      indexOfImageSm: 0,
      /**
       * check disabled status of carousel
       */
    };
  },
  components: {
    homeCompProductsType
  },
  methods: {
    nextSlideProductsType: function() {
      /**
       * get container element
       */
      let carousel = document.getElementById("allProductsCarousel");
      /**
       * get width of each image
       */
      let widthOfElement = document.getElementById("imgCarousel0").offsetWidth ;
       /**
       * implement transform
       * must -10px when transform cause class edit-margin
       */
       carousel.style.transform += `translateX(${-widthOfElement-10}px)`;
     
    },
    preSlideProductsType: function() {
       /**
       * get container element
       */
      let carousel = document.getElementById("allProductsCarousel");
      /**
       * get width of each image
       */
        let widthOfElement = document.getElementById("imgCarousel0").offsetWidth ;
      /**
       * implement transform
       * must +10px when transform cause class edit-margin
       */
       carousel.style.transform += `translateX(${widthOfElement+10}px)`;
    },
    resetCarouselWhenResponsive: function() {
       /**
       * get container element
       */
      let carousel = document.getElementById("allProductsCarousel");
      carousel.style.transform = `translateX(0)`;
      this.indexOfImageLg = 0;
      this.indexOfImageSm = 0;
      this.indexOfImageMd = 0;
    },
    increaseIndexOfCarousel: function() {
      let windowWidth = window.innerWidth;
      /**
       * increase index of image of carousel
       */
      if( windowWidth >= 992 ) {
        this.indexOfImageLg++;
      } else if( windowWidth >= 768 ) {
        this.indexOfImageMd++;
      } else {
        this.indexOfImageSm++;
      }
    },
    decreaseIndexOfCarousel: function() {
      let windowWidth = window.innerWidth;
      /**
       * decrease index of image of carousel
       */
      if( windowWidth >= 992 ) {
        this.indexOfImageLg--;
      } else if( windowWidth >= 768 ) {
        this.indexOfImageMd--;
      } else {
        this.indexOfImageSm--;
      }
    },
    checkDisabledNextBtnMethod: function() {
      return (this.indexOfImageLg === 3 || this.indexOfImageMd === 4 || this.indexOfImageSm === 5);
    },
    checkDisabledPreBtnMethod: function() {
      /**
       * get width browser
       */
      let windowWidth = window.innerWidth;
      if( windowWidth >= 992 ) {
        return this.indexOfImageLg === 0;
      } else if( windowWidth >= 768 ) {
          return this.indexOfImageMd === 0;
      } else {
          return this.indexOfImageSm === 0;
      }
    }
  },
  created() {
    window.addEventListener("resize", this.resetCarouselWhenResponsive);
  },
  props: {
    listAllProductsType: {
      type: Array,
      default: []
    }
  }
};
</script>

<style scoped>
.home-p-container {
  display: block;
  margin-top: auto;
}
.title-all-products {
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 4rem;
}
.all-products-container {
  position: relative;
  overflow: hidden;

}
.all-products-carousel {
  flex-wrap: nowrap;
  
  transition: 0.5s;
}
.arrow {
  position: absolute;
  background-color: white;
  opacity: 0.3;
  height: 30%;
  top: 35%;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  border-radius: 10%;
  cursor: pointer;
  border: thin solid white;
}
.arrow:hover {
  opacity: 1;
  border: thin solid gray;
}
.arrow-right {
  right: 0;
}
.arrow-left {
  left: 0;
}
.edit-margin {
  margin-right: 10px;
}
</style>
