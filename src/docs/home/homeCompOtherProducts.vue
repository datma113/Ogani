<template>
  <div  class="container"  > 
      <div class="other-title">
          <p style="border-bottom: thin solid black"> Other Products </p> 
      </div>
      <div class="row mt-3" >
          <homeCompProductsProduct class="col-lg-6" v-for="product in listOtherProducts" v-bind:key="product.id" v-bind:product="product" />
      </div>
  </div>
</template>

<script>
import homeCompProductsProduct from './homeCompOtherProductsProduct'
export default {
    name: 'homeCompotherProducts',
    data() {
        return {

        }
    },
    components: {
        homeCompProductsProduct
    },
    props: {
        listOtherProducts: {
            type: Array,
            default: []
        }
    }
}
</script>

<style>
.other-title {
    font-size: 4rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
}
</style>