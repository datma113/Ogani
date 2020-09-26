<template>
  <div class="container a">
    <div class="title-container"><p class="title">Related products</p></div>
    <div class="row mt-5">
      <relateProductsProduct
        class="col-lg-3"
        v-for="product in listRelateProducts"
        v-bind:key="product.id"
        v-bind:product="product"
      />
    </div>
  </div>
</template>

<script>
import relateProductsProduct from "./relateProductsProduct";
export default {
  name: "relateProducts",
  props: {
    listRelateProducts: {
      type: Array,
      default: []
    }
  },
  components: {
      relateProductsProduct
  }
};
</script>
<style scoped>
.title-container {
    display: flex;
    justify-content: center;
}
.title {
    display: inline-block;
    font-weight: bold;
    font-size: 3.2rem;
    border-bottom: 3px solid #4caf50;
    cursor: pointer;
}
.a {
    margin-top: 10rem;
}
</style>