<template>
  <div class="container">
    <div class="row">
      <discountCode class="col-md-6" />
      <cartTotal class="col-md-6" v-bind:countTotal="countTotal" />
    </div>
  </div>
</template>

<script>
import discountCode from "./discountCode";
import cartTotal from "./cartTotal";
export default {
  name: "end",
  data() {
    return {};
  },
  components: {
    discountCode,
    cartTotal
  },
  props: {
    countTotal: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style></style>
