<template>
  <div>
    <h1 style="font-weight: bold" class="mb-5">Price</h1>
    <input
      type="range"
      class=" range"
      min="0"
      max="100"
      value="50"
      id="range"
      v-model="value"
    />
    <div class="price">${{value}}</div>
  </div>
</template>

<script>
export default {
  name: "price",
  data() {
    return {
        value: 50
    };
  },
 
};
</script>

<style scoped>
.range {
  width: 100%;
}
.price {
    font-size: 2rem;
    font-weight: bold;
    color: #4caf50;
}
</style>
