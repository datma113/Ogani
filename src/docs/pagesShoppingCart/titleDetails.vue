<template>
  <div class="row c">
    <div class="col-lg-5 ">
      Products
    </div>
    <div class="col-lg-2 alg">Price</div>
    <div class="col-lg-2 alg">Quantity</div>
    <div class="col-lg-2 alg">Total</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.c {
  font-weight: bold;
  font-size: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #dddddd;
}
.alg {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
