<template>
  <div class="row" style="border-bottom: 1px solid #dddddd">
    <div class="col-5 name row">
      <img
        v-bind:src="require(`../../assets/img/${product.url}`)"
        class="img"
      />
      <div>{{ product.name }}</div>
    </div>
    <div class="col-2  col-md-2 alg" style="font-weight: bold">
      ${{ product.price }}
    </div>
    <div class="col-3  col-md-2 alg quanlity ">
      <div class="q icon" @click="decreaseQuanlity()">
        <i class="fas fa-minus" style="font-size: 1rem"></i>
      </div>
      <div class="q">{{ product.quanlity }}</div>
      <div class="q icon" @click="increaseQuanlity()">
        <i class="fas fa-plus"  style="font-size: 1rem"></i>
      </div>
    </div>
    <div class="col-1  col-md-2 alg" style="font-weight: bold">
      ${{ product.price * product.quanlity }}
    </div>
    <div class="col-1  col-md-1 alg " @click="removeProduct()">
      <i class="fas fa-times close"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "product",
  data() {
    return {};
  },
  props: {
    product: {
      type: Object,
      default: {}
    },
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    increaseQuanlity: function() {
      this.$emit("getMethodsIncreaseQuanlityFromChild",this.index);
    },
    decreaseQuanlity: function() {
      this.$emit("getMethodsDecreaseQuanlityFromChild",this.index);
    },
    removeProduct: function() {
      this.$emit("getMethodsRemoveFromChild",this.index);
    }
  }
};
</script>

<style scoped>
.img {
  width: 13rem;
  height: 13rem;
  padding: 1rem;
  margin-right: 2rem;
  background-color: #f5f5f5;
}
.name {
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
}
.alg {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}
.quanlity {
  display: flex;
}
.q {
    flex-grow: 1;
    height: 3.5rem;
  text-align: center;
  background-color: #f5f5f5;
  user-select: none;
}
.icon {
  transition: 0.2s;
}
.icon:hover {
  cursor: pointer;
  background-color: black;
  color: white;
}
.close {
  transition: 0.2s;
  color: gray;
  background-color: #f5f5f5;
}
.close:hover {
  cursor: pointer;
  color: black;
  font-size: 2rem;
}
</style>
