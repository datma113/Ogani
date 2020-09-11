<template>
  <div>
    <background style="margin-bottom: 5rem;" />
    <div class="container">
      <div class="row">
        <div class="col-xl-3">
          <department />
          <price class="mt-5" />
          <colors class="mt-5" /> 
          <popularProducts class="mt-5"/>
          <latestProducts class="mt-5"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import background from "./background";
import department from './department'
import price from './price'
import colors from './colors'
import popularProducts from './popularProducts'
import latestProducts from './latestProducts'
export default {
  name: "shop",
  data() {
    return {};
  },
  components: {
    background,
    department,
    price,
    colors,
    popularProducts,
    latestProducts
  }
};
</script>

<style></style>
