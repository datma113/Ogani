<template>
  <div>
      <checkoutbg/>
      <coupon class="mt-5"/>
      <bill class="mt-5"/>
  </div>
</template>

<script>
import checkoutbg from './checkoutbg'
import coupon from './coupon'
import bill from './bill'
export default {
    name: 'checkout',
    data() {
        return {

        }
    },
    components: {
        checkoutbg,
        coupon,
        bill
    }
}
</script>

<style>

</style>