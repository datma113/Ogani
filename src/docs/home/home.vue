<template>
  <div>
    <homeCompAllProductsType v-bind:listAllProductsType="listAllProductsType" />
    <homeCompFeaturedProducts
      v-bind:listFeaturedProductsTitle="listFeaturedProductsTitle"
       v-bind:listFeaturedProducts="listFeaturedProducts" 
      class="mt-5"
    />
 
  </div>
</template>

<script>
import homeCompAllProductsType from "./homeCompAllProductsType";
import homeCompFeaturedProducts from "./homeCompFeaturedProducts";
import homeCompFeaturedProductsProduct from "./homeCompFeaturedProductsProduct";
export default {
  name: "home",
  data() {
    return {
      listAllProductsType: [
        { id: 0, name: "Fresh Meat", url: "meat3.png" },
        { id: 1, name: "Vegetables", url: "vegetables.png" },
        { id: 2, name: "Fruits & nut Gifts", url: "fruits.png" },
        { id: 3, name: "Fresh Berries", url: "berry.png" },
        { id: 4, name: "butter & eggs", url: "eggs.png" },
        { id: 5, name: "Fastfood", url: "ff.png" },
        { id: 6, name: "onion", url: "onion.png" }
      ],
      listFeaturedProductsTitle: [
        { id: 0, name: "All" },
        { id: 1, name: "Fruits" },
        { id: 2, name: "Meat" },
        { id: 3, name: "Fastfood" },
        { id: 4, name: "Vegetables" },
        { id: 5, name: "Eggs" }
      ],
      listFeaturedProducts: [
        { url:'banana1.png' , id: 0, type: "fruit", name: "Banana", stock: 5, price: 2000, },
        { url:'orange.png' , id: 1, type: "fruit", name: "Orange", stock: 5, price: 3000 },
        { url:'berry1.png' , id: 2, type: "fruit", name: "BlueBerry", stock: 5, price: 2000 },
        { url:'apple.png' , id: 3, type: "fruit", name: "Apple", stock: 5, price: 5000 },
        { url:'grape.png' , id: 4, type: "fruit", name: "Grape", stock: 5, price: 7000 },
        { url:'pigmeat.png' , id: 5, type: "meat", name: "pig", stock: 5, price: 7000 },
        { url:'cowmeat.png' , id: 6, type: "meat", name: "cow", stock: 5, price: 8000 },
        { url:'buffmeat.png' , id: 7, type: "meat", name: "buffelo", stock: 5, price: 3000 },
        { url:'horsemeat.png' , id: 8, type: "meat", name: "horse", stock: 5, price: 6000 },
        { url:'lambmeat.png' , id: 9, type: "meat", name: "lamb", stock: 5, price: 6000 },
        { url:'hamburger.png' , id: 10, type: "fastfood", name: "hamburger", stock: 5, price: 2000 },
        { url:'kfc.png' , id: 11, type: "fastfood", name: "KFC", stock: 5, price: 6000 },
        { url:'icecream.png' , id: 12, type: "fastfood", name: "ice scream", stock: 5, price: 2000 },
        { url:'snack.png' , id: 13, type: "fastfood", name: "snack", stock: 5, price: 6000 },
        { url:'potato.png' , id: 14, type: "fastfood", name: "potato", stock: 5, price: 2000 },
        { url:'potatoVeg.png' , id: 15, type: "Vegetables", name: "popato", stock: 5, price: 1000 },
        { url:'tomato.png' , id: 16, type: "Vegetables", name: "tomato", stock: 5, price: 2000 },
        { url:'onionVeg.png' , id: 17, type: "Vegetables", name: "Onion", stock: 5, price: 4000 },
        { url:'ginger.png' , id: 18, type: "Vegetables", name: "ginger", stock: 5, price: 3000 },
        { url:'carrot.png' , id: 19, type: "Vegetables", name: "carrot", stock: 5, price: 2000 },
        { url:'chickenEggs.png' , id: 20, type: "eggs", name: "chicken eggs", stock: 5, price: 1000 },
        { url:'duckEggs.png' , id: 21, type: "eggs", name: "duck eggs", stock: 5, price: 2000 },
        { url:'pokemonEggs.png' , id: 22, type: "eggs", name: "pokemon eggs", stock: 5, price: 99000 },
        { url:'quailEggs.png' , id: 23, type: "eggs", name: "quail eggs", stock: 5, price: 3000 },
        { url:'monsterEggs.png' , id: 24, type: "eggs", name: "monster eggs", stock: 5, price: 299000 }
      ]
    };
  },
  methods: {},
  components: {
    homeCompAllProductsType,
    homeCompFeaturedProducts,
 
  }
};
</script>

<style scoped></style>
