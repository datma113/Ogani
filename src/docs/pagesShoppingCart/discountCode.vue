<template>
  <div>
    <p class="title">
      Discount Codes
    </p>
    <div class="row">
      <div class="col-6">
        <input type="text" class="form-control in" />
      </div>

      <button class="btn btn-secondary app col-4">APPLY COUPON</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "discountCode"
};
</script>

<style scoped>
.title {
  font-size: 3rem;
  font-weight: bold;
}
.in {
  height: 4rem;
  font-size: 2rem;
}
.app {
  width: 100%;
  font-weight: bold;
  font-size: 1.5rem;
  height: 4rem;
}
</style>
