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
          <b>- Stock: </b>
          <span v-if="this.product.stock != 0">
           <b> {{ product.stock }}</b> available</span
          >
          <span v-else style="font-weight: bold; color: red"> Out Of Stock </span>
        </h5>
        <h3>
          <b>Price: &#65129;{{ product.price }} </b>
        </h3>
      </div>
      <button
        class="btn btn-success"
        v-bind:class=" {'disabled' : this.product.stock === 0} "
        style="width: 100%; font-size: 1.5rem"
        
      >
        <div @click="addToCart()" >Add to Cart</div>
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
  methods: {
    /**
     * add to cart
     * 
     * send props up to home 
     */
    addToCart: function() {
      window.alert(`Add Successfully!`);
      this.$emit('addToCart', this.product.id);
    }
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
.product-img {
  padding: 0 3rem;
  height: 50%;
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
  border: 1px solid #dddddd;
  transition: 0.3s;
}
.product-border:hover {
  z-index: 999;
  border: 1px solid black;
}
.disabled {
  pointer-events: none;
}
</style>