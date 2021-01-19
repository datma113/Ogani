<template>
  <div class="container">
    <!------------title------------>
    <div class="featured-products-title">
      <p style=" border-bottom: thin solid black;">Featured products</p>
    </div>
    <div class="featured-products-title-list">
      <ul class="nav">
        <li
          class="nav-item"
          v-for="(product, index) in listFeaturedProductsTitle"
          v-bind:key="index"
          @click="getCurTitle(index)"
          v-bind:class="{ 'list-featured-products-active ' : isActiveTitle(index) }"
          
        >
          <a class="nav-link"> {{ product.name }}</a>
        </li>
      </ul>
    </div>
    <!------------products------------>
    <div class="row mt-5 home-fp-container">
      <div class="row m-3" id="homeFPContainer" style="height: 100%;">
        <homeCompFeaturedProductsProduct
          class="col-md-6 col-lg-3 mb-3"
          v-for="product in listFeaturedProducts"
          v-bind:key="product.id"
          v-bind:product="product"
         
        />
      </div>
    </div>
    <!------------pagination------------>
    <ul class="pagination pagi-fp">
      <li 
        class="page-item "
        v-bind:class=" {'disabled' :  isDisabledPre()}"      
        @click="decreaseCurrentIndex()"
      >
        <a class="page-link"
          ><i class="fas fa-chevron-left fa-1x"></i>
        </a>
      </li>
      <li
        class="page-item"
         v-for="(i, index) in numberOfPage"
      
        v-bind:key="i"
        @click="getCurrentIndex(index)"
      >
        <a
          class="page-link" 
          v-bind:class=" { 'active-current-page': isActivePagination(index) } "       
        >
         {{i}}
        </a>
      </li>

      <li class="page-item "
       v-bind:class=" {'disabled' :  isDisabledNext()}"      
        @click="increaseCurrentIndex()"
      >
        <a class="page-link"
          ><i class="fas fa-chevron-right"></i>
        </a>
      </li>
    </ul>
    {{sentCurIndex}}
  </div>
 
</template>

<script>
import compSearchBarVue from "../../components/compSearchBar.vue";
import homeCompFeaturedProductsProduct from "./homeCompFeaturedProductsProduct";
export default {
  name: "featured-products-title",
  data() {
    return {
      currentIndex: 0,
      currentTitle: 0
    };
  },
  methods: {
    /**
     * check active current index on pagination 
     */
    isActivePagination: function(index) {
      return this.currentIndex === index;
    },
    /**
     * get current Index of pagination
     */
    getCurrentIndex: function(index) {
      this.currentIndex = index;
    },
    /**
     * increase current index by 1    
     */
    increaseCurrentIndex: function() {
      this.currentIndex++;
    },
    /**
     * decrease current index by 1
     */
    decreaseCurrentIndex: function() {
      this.currentIndex--;
    },
    /**
     * check is disabled previous button in paginations
     */
    isDisabledPre:function() {
      return this.currentIndex === 0;
    },
    /**
     * check is disabled next button in paginations
     */
    isDisabledNext:function() {
      return this.currentIndex === this.numberOfPage-1;
    },
    /**
     * get current title and send it to home
     */
    getCurTitle: function(curTitle) {
      /**
       * set current title
       */
      this.currentTitle = curTitle;
      
      /**
       * send to home
       */
      this.$emit('setCurTitle',curTitle);
      this.currentIndex = 0;
    },


    /**
     * check active title
     */
    isActiveTitle: function(index) {
      return this.currentTitle === index;
    }
  },
  computed: {
    sentCurIndex: function() {
      this.$emit('setCurrentIndex', this.currentIndex); 
    }
  },
  props: {
    listFeaturedProductsTitle: {
      type: Array,
      default: []
    },
    listFeaturedProducts: {
      type: Array,
      default: []
    },
    numberOfPage: {
      type: Number,
      default: 0
    }
  },
  components: {
    homeCompFeaturedProductsProduct
  },
  created() {
     window.addEventListener("resize", this.resetWhenRes);
  }
};
</script>

<style scoped>
.nav-link {
  color: #4caf50;
}
.list-featured-products-active {
  border-bottom: 2px solid #7fad39;
}
.nav-link:hover {
  color: #7fad39;
  cursor: pointer;
}
.featured-products-title {
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 4rem;
}
.featured-products-title-list {
  display: flex;
  justify-content: center;
  height: 5rem;
  font-size: 2rem;
}
.pagi li a {
  cursor: pointer;
}
.page-link {
  cursor: pointer;
  color: #4caf50;
  font-size: 3rem;
  padding: 0 1rem;
  margin: 2rem 0.3rem;
  user-select: none;
}
.pagi-fp {
  display: flex;
  justify-content: center;
}
.active-current-page {
  border: 2px solid black;
}
.disabled {
  pointer-events: none;
}
</style>