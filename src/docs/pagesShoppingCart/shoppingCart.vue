<template>
  <div>
    <bgShoppingcart />
    <shoppingCartDetails
      v-bind:listProducts="listProducts"
      v-on:getMethodsIncreaseQuanlityFromChild="
        getMethodsIncreaseQuanlityFromChild
      "
      v-on:getMethodsDecreaseQuanlityFromChild="
        getMethodsDecreaseQuanlityFromChild
      "
      v-on:getMethodsRemoveFromChild="getMethodsRemoveFromChild"
      v-if="this.listProducts.length != 0"
    />
    <div class="container empty-cart" v-else>
      Shopping Cart is Empty
    </div>
    <endShoppingCart class="mt-5" v-bind:countTotal="countTotal" />
  </div>
</template>

<script>
import bgShoppingcart from "./bgShoppingcart";
import shoppingCartDetails from "./shoppingCartDetails";
import endShoppingCart from "./endShoppingCart";

export default {
  name: "shoppingCart",
  data() {
    return {
      listProducts: [
        {
          id: 0,
          url: "berry.png",
          name: "Fresh Berry",
          price: 230,
          quanlity: 1
        },
        {
          id: 1,
          url: "banana1.png",
          name: "Fresh Banana",
          price: 15,
          quanlity: 1
        },
        {
          id: 2,
          url: "lambmeat.png",
          name: "Lamb Meat",
          price: 443,
          quanlity: 1
        }
      ]
    };
  },
  components: {
    bgShoppingcart,
    shoppingCartDetails,
    endShoppingCart
  },
  methods: {
    getMethodsIncreaseQuanlityFromChild: function(index) {
      this.listProducts[index].quanlity++;
    },
    getMethodsDecreaseQuanlityFromChild: function(index) {
      return this.listProducts[index].quanlity > 1
        ? this.listProducts[index].quanlity--
        : 0;
    },
    getMethodsRemoveFromChild: function(index) {
      this.listProducts.splice(index, 1);
    }
  },
  computed: {
    countTotal: function() {
      return this.listProducts.reduce((a, b) => {
        return a + b.price * b.quanlity;
      }, 0);
    }
  }
};
</script>

<style scoped>
.empty-cart {
  display: flex;
  font-size: 5rem;
  font-weight: bold;
  color: red;
  justify-content: center;
  margin-top: 5rem;
}
</style>
