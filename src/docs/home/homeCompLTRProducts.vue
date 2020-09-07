<template>
  <div class="container mt-5">
      <div class="row">
          <homeCompLTRProductsProduct class="col-lg-4" v-for="product in LTRListProducts " v-bind:key="product.id" v-bind:product="product"/>
      </div>
  </div>
</template>

<script>
import homeCompLTRProductsProduct from './homeCompLTRProductsProduct'
export default {
    name: 'homeCompLTRProducts',
    data() {
        return {

        }
    },
    components: {
        homeCompLTRProductsProduct
    },
    props: {
        LTRListProducts: {
            type: Array,
            default: []
        }
    }
}
</script>

<style>

</style>