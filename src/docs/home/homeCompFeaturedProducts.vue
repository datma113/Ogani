<template>
  <div class="container">
    <div class="featured-products-title">
      <p style=" border-bottom: thin solid black;">Featured products</p>
    </div>
    <div class="featured-products-title-list">
      <ul class="nav">
        <li
          class="nav-item"
          v-for="(product, index) in listFeaturedProductsTitle"
          v-bind:key="product.id"
          @click="getIndexOfProduct(index)"
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
    <div class="row mt-5 home-fp-container">
      <div class="row" id="homeFPContainer" style="height: 100%;">
        <homeCompFeaturedProductsProduct
          class=" col-xl-3 mb-3"
          v-for="product in listFeaturedProducts"
          v-bind:key="product.id"
          v-bind:product="product"
        />
      </div>
    </div>

    <ul class="pagination pagi-fp">
      <li class="page-item " v-bind:class="{ disabled: checkDisabledPre() }">
        <a class="page-link" @click="PrePagePF()"
          ><i class="fas fa-chevron-left fa-1x"></i>
        </a>
      </li>
      <li
        class="page-item"
        v-for="item in listIndexOfPageFP"
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
        <a class="page-link" @click="nextPagePF()"
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
      indexCurrentPage: 1,
      sumOfNumberProductsInPage: Math.ceil(this.listFeaturedProducts.length / 8)
    };
  },
  methods: {
    checkActiveFeaturedProductsList: function(index) {
      return index === this.IndexOfProduct;
    },
    getIndexOfProduct: function(index) {
      console.log(index);
      this.IndexOfProduct = index;
    },
    numberOfPageFP: function() {
      let count = this.listFeaturedProducts.length;
      console.log(count);
    },
    nextPagePF: function() {
      let heightOfPFContainer = document.getElementById("homeFPContainer");
      heightOfPFContainer.style.transform += `translateY(${-heightOfPFContainer.offsetHeight}px)`;
      this.indexCurrentPage++;
    },
    PrePagePF: function() {
      let heightOfPFContainer = document.getElementById("homeFPContainer");
      heightOfPFContainer.style.transform += `translateY(${heightOfPFContainer.offsetHeight}px)`;
      this.indexCurrentPage--;
    },
    getIndexCurrentPage: function(index) {
      this.indexCurrentPage = index;
    },
    checkActiveCurrentPage: function(index) {
      return this.indexCurrentPage === index;
    },
    transferProducts: function(index) {
      let heightOfPFContainer = document.getElementById("homeFPContainer");
      heightOfPFContainer.style.transform = `translateY(${-heightOfPFContainer.offsetHeight *
        (index - 1)}px)`;
    },
    checkDisabledNext: function() {
      return this.indexCurrentPage === this.sumOfNumberProductsInPage;
    },
    checkDisabledPre: function() {
      return this.indexCurrentPage === 1;
    }
  },
  created() {
    for (let i = 0; i < this.sumOfNumberProductsInPage; i++) {
      this.listIndexOfPageFP[i] = i + 1;
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
    }
  },
  components: {
    homeCompFeaturedProductsProduct
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
  height: 72.5rem;
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
</style>
