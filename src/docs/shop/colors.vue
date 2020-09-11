<template>
  <div>
    <h1 style="font-weight: bold">Colors</h1>
    <div class="row">
      <div class="col-6 cc">
        <span class="color" style="background-color: white; border: thin solid black;"> </span>
        <span class="text">white</span>
      </div>
      <div class="col-6 cc">
        <span class="color" style="background-color: red"> </span>
        <span class="text">red</span>
      </div>
      <div class="col-6 cc">
        <span class="color" style="background-color: gray"> </span>
        <span class="text">gray</span>
      </div>
      <div class="col-6 cc">
        <span class="color" style="background-color: green"> </span>
        <span class="text">green</span>
      </div>
      <div class="col-6 cc">
        <span class="color" style="background-color: blue"> </span>
        <span class="text">blue</span>
      </div>
      <div class="col-6 cc">
        <span class="color" style="background-color: yellow"> </span>
        <span class="text">yellow</span>
      </div>
      <div class="col-6 cc">
        <span class="color" style="background-color: black"> </span>
        <span class="text">black</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.color {
  height: 2rem;
  width: 2rem;
  display: inline-block;
  border-radius: 50%;
 
}
.cc:hover {
    color: #4caf50;
}
.cc {
     cursor: pointer;
  display: flex;
  align-items: center;
}
.text {
  font-size: 2rem;
  margin-left: 1rem;
}
</style>
