<template>
  <div>
    <h1 style="font-weight:bold">Popular Size</h1>
    <div class=" mt-5">
      <div class="p" style="width:8rem">Tiny</div>
      <div class="p" style="width:12rem" >small</div>
      <div class="p" style="width:16rem" >medium</div>
      <div class="p" style="width:20rem" >large</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.p {
  flex-wrap: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  background-color: #f5f5f5;
  font-size: 2rem;
  padding: 1rem;
  margin: 1rem 0;
  cursor: pointer;
}
</style>
