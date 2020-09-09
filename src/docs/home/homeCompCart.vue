<template>
  <div class="cart" v-if="numberIntoCart > 0 ">
    <i class="fas fa-shopping-cart"></i>
    <div class="tooltips">
       {{numberIntoCart}}
    </div>
  </div>
</template>

<script>
export default {
  name: "homeCompCart",
  data() {
    return {};
  },
  props: {
    numberIntoCart: {
        type: Number,
        default: 0
    }
  }
};
</script>

<style scoped>
.cart {
  border: thin solid #dddddd;
  background-color: white;
  cursor: pointer;
  position: fixed;
  z-index: 999999;
  padding: 2rem;
  display: flex;
  border-radius: 50%;
  font-size: 3rem;
  justify-content: center;
  align-items: center;
  transition: 0.1s;
  right: 5%;
  top: 7%;
}
.cart:hover {
  background-color: gray;
  color: white;
}
.tooltips {
  position: absolute;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 50%;
  background-color: red;
  top: -1rem;
  right: 0;
}
.cart:after {
}
</style>
