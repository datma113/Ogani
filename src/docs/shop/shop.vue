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
        </div>
        <div class="col-xl-9">
          <saleOff v-bind:saleOffProducts="saleOffProducts"/>
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
import saleOff from './saleOff'
export default {
  name: "shop",
  data() {
    return {
      saleOffProducts: [
        { id: 0, url: 'apple.png', name: 'Fresh apple', type: 'Fruits', originPrice: 100, discount: 0.2 },
        { id: 1, url: 'banana1.png', name: 'Fresh Banana', type: 'Fruits', originPrice: 250, discount: 0.4 },
        { id: 2, url: 'berry1.png', name: 'Fresh Berry', type: 'Fruits', originPrice: 600, discount: 0.25 },
        { id: 3, url: 'buffmeat.png', name: 'Bufferlow meat', type: 'Meat', originPrice: 400, discount: 0.33 },
        { id: 4, url: 'burger.png', name: 'Humburger', type: 'Fastfood', originPrice: 2200, discount: 0.6 },
        { id: 5, url: 'carrot.png', name: 'Fresh Carrot', type: 'Vegetables', originPrice: 1400, discount: 0.2 },
        { id: 6, url: 'drinkfood.png', name: 'Apple juice ', type: 'DrinkFood', originPrice: 300, discount: 0.1 },
        { id: 7, url: 'cowmeat.png', name: 'Cow Meat', type: 'Meat', originPrice: 600, discount: 0.2 },
        { id: 8, url: 'ginger.png', name: 'Fresh Ginger', type: 'Vegetables', originPrice: 500, discount: 0.7 },
        { id: 9, url: 'milk.png', name: 'Fresh milk', type: 'DrinkFood', originPrice: 800, discount: 0.5 },
        
      ]
    };
  },
  components: {
    background,
    department,
    price,
    colors,
    popularProducts,
saleOff,

  }
};
</script>

<style></style>
