<template>
  <div>
    <product
      v-for="(product, index) in listProducts"
      v-bind:key="index"
      v-bind:product="product"
      v-bind:index="index"
      class="fix-distance"
      v-on:getMethodsIncreaseQuanlityFromChild="
        getMethodsIncreaseQuanlityFromChild
      "
      v-on:getMethodsDecreaseQuanlityFromChild="
        getMethodsDecreaseQuanlityFromChild
      "
      v-on:getMethodsRemoveFromChild="getMethodsRemoveFromChild"
    />
  </div>
</template>

<script>
import product from "./product";
export default {
  name: "listProducts",
  data() {
    return {};
  },
  props: {
    listProducts: {
      type: Array,
      default: []
    }
  },
  components: {
    product
  },
  methods: {
    getMethodsIncreaseQuanlityFromChild: function(data) {
      this.$emit("getMethodsIncreaseQuanlityFromChild", data);
    },
    getMethodsDecreaseQuanlityFromChild: function(data) {
      this.$emit("getMethodsDecreaseQuanlityFromChild", data);
    },
    getMethodsRemoveFromChild: function(data) {
        this.$emit('getMethodsRemoveFromChild',data);
    }
  }
};
</script>

<style scoped>
.fix-distance {
  padding: 2.5rem 0;
}
</style>
