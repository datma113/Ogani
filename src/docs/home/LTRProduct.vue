<template>
  <div class=" row">
    <div class="col-5">
      <img
        v-bind:src="require(`../../assets/img/${subProduct.url}`)"
        class="img"
      />
    </div>
    <div class="col-7 product-text">
        <h1 style="font-weight: bold"> {{subProduct.name}} </h1>
        <h4> &#65129;{{subProduct.price}} </h4>
        <button class="btn btn-success" style="font-size: 2rem; width: 50%">Details</button>
    </div>  
  </div>
</template>

<script>
export default {
  name: "LTRProduct",
  data() {
    return {};
  },
  props: {
    subProduct: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style scoped>
.product-text {
    display: flex;
    flex-direction: column;
    justify-content: center;

}
.img {
  height: 13rem;
  padding: 2rem;
  width: 100%;
  background-color: #f5f5f5;
}
</style>
