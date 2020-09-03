<template>
    <div>
    <homeCompAllProductsType v-bind:listAllProductsType="listAllProductsType"></homeCompAllProductsType>
   
    </div>  
</template>

<script>
import homeCompAllProductsType from "./homeCompAllProductsType";
export default {
  name: "home",
  data() {
    return {
       listAllProductsType: [
        { id: 0, name: 'Fresh Meat', url: 'meat3.png'  },
        { id: 1, name: 'Vegetables', url: 'vegetables.png'  },
        { id: 2, name: 'Fruits & nut Gifts', url: 'fruits.png' },
        { id: 3, name: 'Fresh Berries', url: 'berry.png' },
        { id: 4, name: 'butter & eggs', url: 'eggs.png' },
        { id: 5, name: 'Fastfood', url: 'ff.png' },
        { id: 6, name: 'onion', url: 'onion.png' },
      ]
    };
  },
  methods: {},
  components: {
    homeCompAllProductsType
  },
 
};
</script>

<style scoped>
.home {
  
}
</style>
