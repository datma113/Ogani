<template>
  <div class="frame">
    <p class="title">Cart Total</p>
    <div class="line ">
      <div class="left">Price</div>
      <div class="right">$ {{countTotal}}</div>
    </div>
    <div class="line ">
      <div class="left">Tax</div>
      <div class="right" style="color: gray">{{ tax * 100 }}%</div>
    </div>
    <div class="line ">
      <div class="left">Total</div>
      <div class="right">$ {{Math.ceil(countTotal - countTotal*tax)}}</div>
    </div>
   <a href="#" class="a">  <button class="btn btn-success b col-12" style="background-color: #7fad39">
     Proceed to Checkout
    </button></a>
  </div>
</template>

<script>
export default {
  name: "cartTotal",
  data() {
    return {
      tax: 0.02
    };
  },
  props: {
    countTotal: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style scoped>
.frame {
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
}
.title {
  font-weight: bold;
  font-size: 3.5rem;
}
.line {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dddddd;
}
.left {
  font-weight: bold;
  font-size: 2rem;
}
.right {
  font-weight: bold;
  font-size: 2.5rem;
  color: red;
}
.b {
  height: 4rem;
  font-size: 2rem;
}
.a {
    color: black;
    text-decoration: none;
    outline: none;
}
</style>
