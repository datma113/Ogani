<template>
  <div style="padding: 1rem">
    <div class="products">
      <img
        v-bind:src="require(`../../assets/img/${products.url}`)"
        class="size-img"
      />
      <div class="title-of-img">
        {{ products.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeCompAllProductsType",
  data() {
    return {};
  },
  props: {
    products: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style scoped>
.products {
  height: 27rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f5f5f5;
  cursor: pointer;
  transition: 0.2s;
  border: thin solid #dddddd;
}
.products:hover {
  border: thin solid black;
}
.size-img {
  height: 60%;
  width: 100%;
}
.title-of-img {
  background-color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  font-size: 2rem;
}
</style>
