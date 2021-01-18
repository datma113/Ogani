<template>
  <div>
    <background style="margin-bottom: 5rem;" />
    <div class="container">
      <div class="row">
        <div class="col-xl-3">
          <department />
          <price class="mt-5" />
          <colors class="mt-5" />
          <popularProducts class="mt-5" />
        </div>
        <div class="col-xl-9 ">
          <saleOff
            v-bind:saleOffProducts="saleOffProducts"
            style="margin-bottom: 4.5rem"
          />
          <shopProducts
            v-bind:shopProducts="listProductsSearched"
            v-bind:lengthOfProducts="lengthOfProducts"
            v-on:getDataFromShopProducts="getDataFromShopProducts"
            v-on:getSortingValue="getSortingValue"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import background from "./background";
import department from "./department";
import price from "./price";
import colors from "./colors";
import popularProducts from "./popularProducts";
import saleOff from "./saleOff";
import shopProducts from "./shopProducts";

export default {
  name: "shop",
  data() {
    return {
      saleOffProducts: [
        {
          id: 0,
          url: "apple.png",
          name: "Fresh apple",
          type: "Fruits",
          originPrice: 100,
          discount: 0.2
        },
        {
          id: 1,
          url: "banana1.png",
          name: "Fresh Banana",
          type: "Fruits",
          originPrice: 250,
          discount: 0.4
        },
        {
          id: 2,
          url: "berry1.png",
          name: "Fresh Berry",
          type: "Fruits",
          originPrice: 600,
          discount: 0.25
        },
        {
          id: 3,
          url: "buffmeat.png",
          name: "Bufferlow meat",
          type: "Meat",
          originPrice: 400,
          discount: 0.33
        },
        {
          id: 4,
          url: "burger.png",
          name: "Humburger",
          type: "Fastfood",
          originPrice: 2200,
          discount: 0.6
        },
        {
          id: 5,
          url: "carrot.png",
          name: "Fresh Carrot",
          type: "Vegetables",
          originPrice: 1400,
          discount: 0.2
        },
        {
          id: 6,
          url: "drinkfood.png",
          name: "Apple juice ",
          type: "DrinkFood",
          originPrice: 300,
          discount: 0.1
        },
        {
          id: 7,
          url: "cowmeat.png",
          name: "Cow Meat",
          type: "Meat",
          originPrice: 600,
          discount: 0.2
        },
        {
          id: 8,
          url: "ginger.png",
          name: "Fresh Ginger",
          type: "Vegetables",
          originPrice: 500,
          discount: 0.7
        },
        {
          id: 9,
          url: "milk.png",
          name: "Fresh milk",
          type: "DrinkFood",
          originPrice: 800,
          discount: 0.5
        }
      ],
      shopProducts: [
        {
          id: 0,
          url: "milk.png",
          name: "Fresh milk",
          type: "DrinkFood",
          stock: 3,
          originPrice: 800
        },
        {
          id: 1,
          url: "apple.png",
          name: "Fresh Apple",
          type: "Fruits",
          stock: 6,
          originPrice: 400
        },
        {
          id: 2,
          url: "banana1.png",
          name: "Banana China",
          type: "Fruits",
          stock: 22,
          originPrice: 40
        },
        {
          id: 3,
          url: "drinkfood.png",
          name: "Dragon Blood",
          type: "Drinkfood",
          stock: 2,
          originPrice: 333
        },
        {
          id: 4,
          url: "eggs.png",
          name: "Combo Burger",
          type: "fastFood",
          stock: 344,
          originPrice: 35
        },
        {
          id: 5,
          url: "duckEggs.png",
          name: "Duck Eggs",
          type: "Eggs",
          stock: 311,
          originPrice: 2
        },
        {
          id: 6,
          url: "grape.png",
          name: "American grape",
          type: "Fruits",
          stock: 888,
          originPrice: 40
        },
        {
          id: 7,
          url: "ginger.png",
          name: "Ginger",
          type: "Vegetables",
          stock: 12,
          originPrice: 63
        },
        {
          id: 8,
          url: "kfc.png",
          name: "KFC",
          type: "fastFood",
          stock: 58,
          originPrice: 49
        },
        {
          id: 9,
          url: "lambmeat.png",
          name: "Lamb Meat",
          type: "Meat",
          stock: 77,
          originPrice: 542
        },
        {
          id: 10,
          url: "eggs.png",
          name: "Chicken Eggs",
          type: "Eggs",
          stock: 22,
          originPrice: 11
        },
        {
          id: 11,
          url: "icecream.png",
          name: "Ice cream",
          type: "fastfood",
          stock: 44,
          originPrice: 12
        },
        {
          id: 12,
          url: "horsemeat.png",
          name: "Horse Meat",
          type: "Meat",
          stock: 13,
          originPrice: 423
        },
        {
          id: 13,
          url: "fruits.png",
          name: "Fresh fruits",
          type: "meat",
          stock: 44,
          originPrice: 231
        },
        {
          id: 14,
          url: "cowmeat.png",
          name: "Cow Meat",
          type: "meat",
          stock: 100,
          originPrice: 150
        },
        {
          id: 15,
          url: "onion.png",
          name: "onion",
          type: "Vegetables",
          stock: 77,
          originPrice: 542
        },
        {
          id: 16,
          url: "chocolate.png",
          name: "Chocolate ",
          type: "fastfood",
          stock: 111,
          originPrice: 666
        },
        {
          id: 17,
          url: "carrot.png",
          name: "Carrot",
          type: "Vegetables",
          stock: 77,
          originPrice: 542
        },
        {
          id: 18,
          url: "snack.png",
          name: "Snack",
          type: "fastfood",
          stock: 1234,
          originPrice: 1
        },
        {
          id: 19,
          url: "tomato.png",
          name: "Tomato",
          type: "Vegetables",
          stock: 423,
          originPrice: 87
        }
      ],
      textSearch: '',
      listProductsSearched: [],
      lenghtOfProducts: 0
    };
  },
  created() {
    this.listProductsSearched = this.shopProducts;
    this.lengthOfProducts = this.shopProducts.length;
  },
  methods: {
    getDataFromShopProducts: function(data) {
    let text = data.replace(/\s/g, '').toUpperCase();
    this.listProductsSearched = this.shopProducts.filter( x => x.name.replace(/\s/g, '').toUpperCase().match(text) );
    this.lengthOfProducts = this.listProductsSearched.length;
    },
    getSortingValue: function(data) {
      if( data === 'insc' ) {
        this.listProductsSearched = this.listProductsSearched.sort( ( a, b) => a.originPrice - b.originPrice );
      } else if ( data === 'desc' ) {
           this.listProductsSearched = this.listProductsSearched.sort( ( a, b) => b.originPrice - a.originPrice );
      } else {
           this.listProductsSearched = this.listProductsSearched.sort( ( a, b) => a.id - b.id );
      }
    }
  },
  components: {
    background,
    department,
    price,
    colors,
    popularProducts,
    saleOff,
    shopProducts
  }
};
</script>

<style></style>
