<template>
  <div>
    <span><p  class="title">Sale Off</p></span>
    <div class="row mt-5">
        <saleOffProduct class="col-md-6 col-lg-3" v-for="product in saleOffProducts" v-bind:key="product.id" v-bind:product="product"/>
    </div>
  </div>
</template>

<script>
import saleOffProduct from './saleOffProduct'
export default {
    name: 'saleOff',
    data() {
        return {

        }
    },
    components: {
        saleOffProduct
    },
    props: {
        saleOffProducts: {
            type: Array,
            default: []
        }
    }

}
</script>

<style scoped>
.title {
    display: inline-block;
    font-weight: bold;
    font-size: 3rem;
    border-bottom: 3px solid #4caf50;
    cursor: pointer;
}
</style>