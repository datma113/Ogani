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
          class="col-6 col-md-4 col-lg-3 "
          v-bind:id="`imgCarousel${products.id}`"
        >
        </homeCompProductsType>
        <!---next and pre icon---->
      </div>
      <button
        class="arrow arrow-right"
        v-bind:disabled="checkActiveCarouselNext"
        @click="nextSlideProductsType()"
      >
        <i class="fas fa-caret-right fa-3x"></i>
      </button>
      <button
        class="arrow arrow-left"
        v-bind:disabled="checkActiveCarouselPre"
        @click="preSlideProductsType()"
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
      carouselCounting: 0,
      checkActiveCarouselNext: false,
      checkActiveCarouselPre: true
    };
  },
  components: {
    homeCompProductsType
  },
  methods: {
    nextSlideProductsType: function() {
      this.checkActiveCarouselPre = false;
      //get element of img and img container
      let widthOfEachImg = document.getElementById("imgCarousel0");
      let allProductsCarousel = document.getElementById("allProductsCarousel");
      // DOM transger
      allProductsCarousel.style.transform += `translateX(${-widthOfEachImg.clientWidth}px)`;
      //limit transfer
      if (this.carouselCounting === this.listAllProductsType.length - 5)
        this.checkActiveCarouselNext = true;
      this.carouselCounting++;
    },

    preSlideProductsType: function() {
      this.checkActiveCarouselNext = false;
      //get element of img and img container
      let widthOfEachImg = document.getElementById("imgCarousel0");
      let allProductsCarousel = document.getElementById("allProductsCarousel");
      // DOM transger
      allProductsCarousel.style.transform += `translateX(${widthOfEachImg.clientWidth}px)`;
      //limit transfer
      this.carouselCounting--;
      if (this.carouselCounting === 0) this.checkActiveCarouselPre = true;
    },

    // runCarousel: function() {
    //   setInterval(() => {
    //     this.nextSlideProductsType();
    //   }, 2000);            bug
    // }

    resetCarouselWhenResponsive: function() {
      //get element of img and img container
      let widthOfEachImg = document.getElementById("imgCarousel0");
      let allProductsCarousel = document.getElementById("allProductsCarousel");
      // reset transform when responsive
      allProductsCarousel.style.transform = `translateX(0)`;
      // reset all
      this.checkActiveCarouselNext = false;
      this.checkActiveCarouselPre = true;
      this.carouselCounting = 0;
    }
  },
  // beforeMount() {
  //   this.runCarousel();  bug
  // },
  computed: {},
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
</style>
