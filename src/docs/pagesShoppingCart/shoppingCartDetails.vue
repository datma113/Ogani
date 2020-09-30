<template>
  <div class="container" style="margin-top: 7rem">
    <titleDetails />
    <listProducts
      v-bind:listProducts="listProducts"
      v-on:getMethodsIncreaseQuanlityFromChild="
        getMethodsIncreaseQuanlityFromChild
      "
      v-on:getMethodsDecreaseQuanlityFromChild="
        getMethodsDecreaseQuanlityFromChild
      "
      v-on:getMethodsRemoveFromChild="getMethodsRemoveFromChild"
    />
    <button
      class="btn btn-outline-secondary mt-5"
      style="width: 15rem; height: 5rem; font-size: 1.5rem"
    >
      Continue shopping
    </button>
  
  </div>
</template>

<script>
import titleDetails from "./titleDetails";
import listProducts from "./listProducts";
export default {
  name: "shoppingCartDetails",
  data() {
    return {};
  },
  components: {
    titleDetails,
    listProducts,
  },
  props: {
    listProducts: {
      type: Array,
      default: []
    }
  },
  methods: {
    getMethodsIncreaseQuanlityFromChild(data) {
      this.$emit("getMethodsIncreaseQuanlityFromChild", data);
    },
    getMethodsDecreaseQuanlityFromChild: function(data) {
      this.$emit("getMethodsDecreaseQuanlityFromChild", data);
    },
    getMethodsRemoveFromChild: function(data) {
      this.$emit("getMethodsRemoveFromChild", data);
    }
  }
};
</script>

<style></style>
