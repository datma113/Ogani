<template>
  <div class="product-container ">
    <div class="row test"  v-bind:style=" {backgroundColor: product.color} " >
      <div class="col-4">
        <img
          v-bind:src="require(`../../assets/img/${product.url}`)"
          class="img"
        />
      </div>
      <div class="col-8 text-container">
        <div style="font-weight: bold; font-size: 4rem;">
          {{ product.title }}
        </div>
        <h3>{{ product.desc }}</h3>
        <button class="btn btn-danger mt-3 button">Shop now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeCompOtherProductsProduct",
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
.product-container {
padding: 1rem;
}
.img {
  height: 20rem;
  width: 100%;
}
.row {
  padding: 0;
  margin: 0;
}
.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.button {
  font-size: 2rem;
  width: 40%;
}

</style>
