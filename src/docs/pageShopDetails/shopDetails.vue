<template>
  <div>
      <bgShopDetails style="margin-bottom: 5rem;"/>
      <productDetails/>
  </div>
</template>

<script>
import bgShopDetails from './bgShopDetails'
import productDetails from './details'
export default {
    name: 'shopDetails',
    data() {
        return {

        }
    },
    components: {
        bgShopDetails,
        productDetails
    }
}
</script>

<style>

</style>