<template>
  <div class="product">
    <div class="product-border">
      <img
        v-bind:src="require(`../../assets/img/${product.url}`)"
        class="product-img"
      />
      <div class="product-desc">
        <h1 style="text-align: center; font-weight: bold;">
          {{ product.name }}
        </h1>
        <h5>
          <b>- Description</b>: Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nobis, officia!
        </h5>
        <h5>
          <b>- Stock: {{ product.stock }} </b>available
        </h5>
        <h3>
          <b>Price: &#65129;{{ product.price }} </b>
        </h3>
      </div>
      <button class="btn btn-success" style="width: 100%; font-size: 1.5rem">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeCompFeaturedProductsProduct",
  data() {
    return {};
  },
  props: {
    product: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style scoped>
.product {
  user-select: none;
  display: flex;
  height: 35rem;
  flex-direction: column;
  align-items: center;
}
.product:hover {
 
}
.product-img {
  padding: 0 3rem;
  height: 55%;
  width: 100%;
}
.product-desc {
  width: 100%;
  background-color: white;
  padding-left: 1rem;
}
.product-border {
  height: 100%;
  padding: 1rem;
  margin: 0 -1rem;
  background-color: #f5f5f5;
  border: 1px solid #DDDDDD;
  transition: 0.3s;


}
.product-border:hover {
 transform: scale(1.1);
  z-index: 999;
  border: 1px solid black;

}
</style>
