<template>
  <div>
    <div class="row">
      <div class="col-lg-4 op-container">
        Sort By
        <select name="" id="select" class="op" @change="change">
          <option value="none">none</option>
          <option value="insc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div class="col-lg-4 op-container num-pro"> <b style="color: black"> {{ lengthOfProducts }}</b>&nbsp; products found </div>
      <div class="col-lg-4  op-container" style="justify-content: flex-end">
        <span class="icon" @click="checkSearhStatus">
          <i class="fas fa-search"></i>
        </span>
      </div>
    </div>
    <div class="row">
      <input
        type="text"
        class="form-control col-12 search"
        placeholder="what do you want?..."
        v-model="inputText"
        v-if="searchStatus"
        v-on:keyup="
          sendDataToShop();
          resetOption();
        "
      />
    </div>
    <div class="row pro-container">
      <shopProductsProduct
        class="col-lg-3"
        v-for="product in shopProducts"
        v-bind:key="product.id"
        v-bind:product="product"
      />
    </div>
  </div>
</template>

<script>
import shopProductsProduct from "./shopProductsProduct";
export default {
  name: "shopProducts",
  data() {
    return {
      inputText: "",
      searchStatus: false
    };
  },
  methods: {
    checkSearhStatus: function() {
      this.inputText = "";
      this.$emit("getDataFromShopProducts", this.inputText);
      return (this.searchStatus = !this.searchStatus);
    },
    sendDataToShop: function() {
      this.$emit("getDataFromShopProducts", this.inputText);
    },
    change: function() {
      let data = event.target.value;
      this.$emit("getSortingValue", data);
    },
    resetOption: function() {
      let resetValue = document.getElementById("select");
      resetValue.value = "none";
    }
  },
  props: {
    shopProducts: {
      type: Array,
      default: []
    },
    lengthOfProducts: {
      type: Number,
      default: 0
    }
  },
  components: {
    shopProductsProduct
  }
};
</script>

<style scoped>
.op-container {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: gray;
}
.op {
  margin: 1rem;
  padding: 0.2rem 0.7rem;
  font-size: 2rem;
  cursor: pointer;
}
.icon {
  background-color: #dddddd;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: 0.2s;
  border: thin solid white;
}
.icon:hover {
  border: thin solid #4caf50;
}
.search {
  height: 4rem;
  font-size: 2rem;
  padding-left: 2rem;
}
.pro-container {
  margin-top: 2rem;
}
.num-pro {
  font-size: 2rem;
  display: flex;
  justify-content: center;
}
</style>
