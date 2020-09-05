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
          v-bind:key="product.id"
          @click="
            getIndexOfProduct(index);
            sendDataToHome(index);
          "
          v-bind:class="{
            'list-featured-products-active': checkActiveFeaturedProductsList(
              index
            )
          }"
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
      <li class="page-item " v-bind:class="{ disabled: checkDisabledPre() }">
        <a class="page-link" @click="PrePageFP()"
          ><i class="fas fa-chevron-left fa-1x"></i>
        </a>
      </li>
      <li
        class="page-item"
        v-for="item in resetListIndexOfPageFP"
        v-bind:key="item"
        @click="
          getIndexCurrentPage(item);
          transferProducts(item);
        "
      >
        <a
          class="page-link"
          v-bind:class="{ 'active-current-page': checkActiveCurrentPage(item) }"
        >
          {{ item }}
        </a>
      </li>

      <li class="page-item " v-bind:class="{ disabled: checkDisabledNext() }">
        <a class="page-link" @click="nextPageFP()"
          ><i class="fas fa-chevron-right"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import compSearchBarVue from "../../components/compSearchBar.vue";
import homeCompFeaturedProductsProduct from "./homeCompFeaturedProductsProduct";
export default {
  name: "peatured-products-title",
  data() {
    return {
      IndexOfProduct: 0,
      listIndexOfPageFP: [],
      indexCurrentPage: 1
    };
  },
  methods: {
    checkActiveFeaturedProductsList: function(index) {
      return index === this.IndexOfProduct;
    },
    getIndexOfProduct: function(index) {
      this.IndexOfProduct = index;
    },
    //event:button next page of pagination in featured list products
    nextPageFP: function() {
      let heightOfPFContainer = document.getElementById("homeFPContainer");
      heightOfPFContainer.style.transform += `translateY(${-heightOfPFContainer.offsetHeight * 0.98495212038}px)`;
      console.log(`${-heightOfPFContainer.offsetHeight}`);
      this.indexCurrentPage++;
    },
       //event:button previous page of pagination in featured list products
    PrePageFP: function() {
      let heightOfPFContainer = document.getElementById("homeFPContainer");
      heightOfPFContainer.style.transform += `translateY(${heightOfPFContainer.offsetHeight * 0.98495212038}px)`;
      this.indexCurrentPage--;
    },
    // get index of current page and check active 
    getIndexCurrentPage: function(index) {
      this.indexCurrentPage = index;
    },
    checkActiveCurrentPage: function(index) {
      return this.indexCurrentPage === index;
    },
    //transform to next page of list products
    transferProducts: function(index) {
      let heightOfPFContainer = document.getElementById("homeFPContainer");
      heightOfPFContainer.style.transform = `translateY(${-(heightOfPFContainer.offsetHeight - 11)*
        (index - 1)  }px)`;
    },
    // check disabled of next and pre button of pagination in list products
    checkDisabledNext: function() {
      return this.indexCurrentPage === this.sumOfNumberProductsInPage;
    },
    checkDisabledPre: function() {
      return this.indexCurrentPage === 1;
    },
    //send data to home.vue to filter by featured products title
    sendDataToHome: function(index) {
      let heightOfPFContainer = document.getElementById("homeFPContainer");
      heightOfPFContainer.style.transform = `translateY(0)`;
      //reset index current page
      this.indexCurrentPage = 1;
      //reset index of page
      for (let i = 0; i < this.sumOfNumberProductsInPage; i++) {
        this.listIndexOfPageFP[i] = i + 1;
      }
      //send data
      let data = this.listFeaturedProductsTitle[index].type;
      this.$emit("getDataFromFPTitle", data);
    },
    resetWhenRes() {
      let heightOfPFContainer = document.getElementById("homeFPContainer");
      heightOfPFContainer.style.transform = `translateY(0)`;
        this.indexCurrentPage = 1;
    }
  },
  computed: {
    resetListIndexOfPageFP: function() {
      let temp = []
      for (let i = 0; i < this.sumOfNumberProductsInPage; i++) {
        temp[i] = i + 1;
      }
      return temp;
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
    sumOfNumberProductsInPage: {
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
.home-fp-container {
  border: 2px solid blue;
  height: 73.5rem;
  overflow: hidden;
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

@media screen and (max-width: 992px) {
    .home-fp-container {
      height: 146rem;
    }
    #homeFPContainer {
      transform: translate(0);
    }
}
@media screen and (max-width: 576px) {
    .home-fp-container {
      height: 292rem;
    }
    #homeFPContainer {
      transform: translate(0);
    }
}
</style>
