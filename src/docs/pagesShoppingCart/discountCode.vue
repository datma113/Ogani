<template>
  <div>
    <p class="title">
      Discount Codes
    </p>
    <div class="row mb-5">
      <div class="col-xl-6 col-lg-12">
        <input type="text" class="form-control in" />
      </div>

       <div class="col-xl-4 col-lg-12 mt-2 mt-xl-0"> <button class="btn btn-secondary app ">APPLY COUNPON</button></div> 
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
