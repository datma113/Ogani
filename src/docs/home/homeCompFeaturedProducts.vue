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
          v-bind:class=" { 'list-featured-products-active' : checkActiveFeaturedProductsList(index)  } "
         
        >
          <a class="nav-link"> {{ product.name }}</a>
        </li>
      </ul>
    </div>
    <div class="row mt-5" style="border: 2px solid blue;">
    <homeCompFeaturedProductsProduct class=" col-xl-3 mb-3" v-for="product in listFeaturedProducts" v-bind:key="product.id" v-bind:product="product" />

    </div>
  </div>
</template>

<script>
import homeCompFeaturedProductsProduct from './homeCompFeaturedProductsProduct'
export default {
  name: "peatured-products-title",
  data() {
    return {
        IndexOfProduct: 0
    };
  },
  methods: {
    checkActiveFeaturedProductsList: function(index) {
        return index === this.IndexOfProduct;
    },
    getIndexOfProduct: function(index) {
        console.log(index);
        this.IndexOfProduct = index;
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
</style>
