<template>
  <div>
    <homeCompAllProductsType v-bind:listAllProductsType="listAllProductsType" />
    <!----bug--->
    <homeCompFeaturedProducts
      v-bind:listFeaturedProducts="finalList"
      v-bind:listFeaturedProductsTitle="listFeaturedProductsTitle"
      v-bind:numberOfPage="numberOfPage"
      v-on:setCurTitle="setCurTitle"
      v-on:setCurrentIndex="setCurrentIndex"
 
      class="mt-5"
    />
    <!----bug--->
    <homeCompOtherProducts v-bind:listOtherProducts="listOtherProducts" />
    <homeCompLTRProducts v-bind:LTRListProducts="LTRListProducts" />
    <homeCompBlog v-bind:listBlog="listBlog" />
    <homeCompCart />
  </div>
</template>
<script>
import homeCompAllProductsType from "./homeCompAllProductsType";
import homeCompFeaturedProducts from "./homeCompFeaturedProducts";
import homeCompFeaturedProductsProduct from "./homeCompFeaturedProductsProduct";
import homeCompOtherProducts from "./homeCompOtherProducts";
import homeCompLTRProducts from "./homeCompLTRProducts";
import homeCompBlog from "./homeCompBlog";
import homeCompCart from "./homeCompCart";
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
        { id: 1,  name: "Fruit" },
        { id: 2,  name: "Meat" },
        { id: 3, name: "Fastfood" },
        { id: 4,  name: "Vegetables" },
        { id: 5,  name: "Eggs" }
      ],
      listFeaturedProducts: [
        {
          url: "banana1.png",
          id: 0,
          type: "Fruit",
          name: "Banana",
          stock: 5,
          price: 2000
        },
        {
          url: "orange.png",
          id: 1,
          type: "Fruit",
          name: "Orange",
          stock: 5,
          price: 3000
        },
        {
          url: "berry1.png",
          id: 2,
          type: "Fruit",
          name: "BlueBerry",
          stock: 5,
          price: 2000
        },
        {
          url: "apple.png",
          id: 3,
          type: "Fruit",
          name: "Apple",
          stock: 5,
          price: 5000
        },
        {
          url: "grape.png",
          id: 4,
          type: "Fruit",
          name: "Grape",
          stock: 5,
          price: 7000
        },
        {
          url: "pigmeat.png",
          id: 5,
          type: "Meat",
          name: "pig",
          stock: 5,
          price: 7000
        },
        {
          url: "cowmeat.png",
          id: 6,
          type: "Meat",
          name: "cow",
          stock: 5,
          price: 8000
        },
        {
          url: "buffmeat.png",
          id: 7,
          type: "Meat",
          name: "buffelo",
          stock: 5,
          price: 3000
        },
        {
          url: "horsemeat.png",
          id: 8,
          type: "Meat",
          name: "horse",
          stock: 5,
          price: 6000
        },
        {
          url: "lambmeat.png",
          id: 9,
          type: "Meat",
          name: "lamb",
          stock: 5,
          price: 6000
        },
        {
          url: "burger.png",
          id: 10,
          type: "Fastfood",
          name: "hamburger",
          stock: 5,
          price: 2000
        },
        {
          url: "kfc.png",
          id: 11,
          type: "Fastfood",
          name: "KFC",
          stock: 5,
          price: 6000
        },
        {
          url: "icecream.png",
          id: 12,
          type: "Fastfood",
          name: "ice scream",
          stock: 5,
          price: 2000
        },
        {
          url: "snack.png",
          id: 13,
          type: "Fastfood",
          name: "snack",
          stock: 5,
          price: 6000
        },
        {
          url: "potato.png",
          id: 14,
          type: "Fastfood",
          name: "potato",
          stock: 5,
          price: 2000
        },
        {
          url: "potatoVeg.png",
          id: 15,
          type: "Vegetables",
          name: "popato",
          stock: 5,
          price: 1000
        },
        {
          url: "tomato.png",
          id: 16,
          type: "Vegetables",
          name: "tomato",
          stock: 5,
          price: 2000
        },
        {
          url: "onionVeg.png",
          id: 17,
          type: "Vegetables",
          name: "Onion",
          stock: 5,
          price: 4000
        },
        {
          url: "ginger.png",
          id: 18,
          type: "Vegetables",
          name: "ginger",
          stock: 5,
          price: 3000
        },
        {
          url: "carrot.png",
          id: 19,
          type: "Vegetables",
          name: "carrot",
          stock: 5,
          price: 2000
        },
        {
          url: "chickenEggs.png",
          id: 20,
          type: "Eggs",
          name: "chicken eggs",
          stock: 5,
          price: 1000
        },
        {
          url: "duckEggs.png",
          id: 21,
          type: "Eggs",
          name: "duck eggs",
          stock: 5,
          price: 2000
        },
        {
          url: "pokemonEggs.png",
          id: 22,
          type: "Eggs",
          name: "pokemon eggs",
          stock: 5,
          price: 99000
        },
        {
          url: "quailEggs.png",
          id: 23,
          type: "Eggs",
          name: "quail eggs",
          stock: 5,
          price: 3000
        },
        {
          url: "monsterEggs.png",
          id: 24,
          type: "Eggs",
          name: "monster eggs",
          stock: 5,
          price: 299000
        }
      ],
      listOtherProducts: [
        {
          id: 0,
          url: "drinkfood.png",
          title: "Drink Food",
          desc: "some desciption in here lorem lorem lorem aihihihi:))",
          color: "#cfefea"
        },
        {
          id: 1,
          url: "summerfruits.png",
          title: "Summer Fruits",
          desc: "some desciption in here lorem lorem lorem aihihihi :))",
          color: "#f8ebcb"
        },
        {
          id: 2,
          url: "chocolate.png",
          title: "Chocolate",
          desc: "some desciption in here lorem lorem lorem aihihihi :))",
          color: "#f8ebcb"
        },
        {
          id: 3,
          url: "milk.png",
          title: "Juice Milk",
          desc: "some desciption in here lorem lorem lorem aihihihi :))",
          color: "#cfefea"
        }
      ],
      LTRListProducts: [
        {
          id: 0,
          title: "Latest Products",
          list: [
            { id: "L0", url: "apple.png", name: "Apple Chicago", price: 2000 },
            {
              id: "L1",
              url: "banana1.png",
              name: "Banana America",
              price: 2000
            },
            {
              id: "L2",
              url: "carrot.png",
              name: "Carrot Thailand",
              price: 2300
            },
            { id: "L3", url: "milk.png", name: "Milk Long Thanh", price: 2000 },
            { id: "L4", url: "orange.png", name: "Orange France", price: 2000 },
            {
              id: "L5",
              url: "pokemonEggs.png",
              name: "Pokemon Japan",
              price: 2050
            }
          ]
        },
        {
          id: 1,
          title: "Top Rated Products",
          list: [
            { id: "T0", url: "pigmeat.png", name: "Pig Meat", price: 2000 },
            {
              id: "T1",
              url: "grape.png",
              name: "America Banana",
              price: 4000
            },
            {
              id: "T2",
              url: "grape.png",
              name: "Korea Grape",
              price: 220
            },
            { id: "T3", url: "milk.png", name: "Milk Long Thanh", price: 2000 },
            { id: "T4", url: "snack.png", name: "Snack", price: 2000 },
            {
              id: "T5",
              url: "pokemonEggs.png",
              name: "Pokemon Japan",
              price: 400
            }
          ]
        },
        {
          id: 2,
          title: "Review Products",
          list: [
            {
              id: "R0",
              url: "ginger.png",
              name: "ginger Chicago",
              price: 6000
            },
            {
              id: "R1",
              url: "onion.png",
              name: "America Onion",
              price: 5000
            },
            {
              id: "R2",
              url: "vegetables.png",
              name: "Thailand vegetables",
              price: 2000
            },
            { id: "R3", url: "milk.png", name: "Milk Long Thanh", price: 2000 },
            { id: "R4", url: "milk.png", name: "Milk Long Thanh", price: 2000 },
            {
              id: "R5",
              url: "pokemonEggs.png",
              name: "Pokemon Japan",
              price: 2000
            }
          ]
        }
      ],
      listBlog: [
        {
          id: 0,
          url: "blog1.jpg",
          date: "9/8/2020",
          countCmt: "59",
          title: "Cooking tips make cooking simple",
          desc:
            "credo in onum deum lorem lorem lorem ahihihihihi vuiqualavui lalala desc here"
        },
        {
          id: 1,
          url: "blog2.jpg",
          date: "9/9/2020",
          countCmt: "77",
          title: "Cooking tips make cooking simple",
          desc:
            "credo in onum deum lorem lorem lorem ahihihihihi vuiqualavui lalala desc here"
        },
        {
          id: 2,
          url: "blog3.jpg",
          date: "9/10/2020",
          countCmt: "51",
          title: "Cooking tips make cooking simple",
          desc:
            "credo in onum deum lorem lorem lorem ahihihihihi vuiqualavui lalala desc here"
        }
      ],
      /**
       * list after filter some conditions
       */
      conditionList: [],
      currentTitle: 0,
      numberOfPage: 0,
      currentIndex: 0,
      /**
       * data temp from homeCompFeaturedProducts
       */
      dataTemp: 0
    };
  },
  methods: {
    /**
     * get current title from homeCompFeaturedProducts
     * 
     * then setCurrentTitle
     */
    setCurTitle: function(curTitle) {
        this.currentTitle = curTitle;
    },    
    setCurrentIndex: function(index) {
       this.dataTemp = index;        
    },
    /**
     *
     *************pagination****************
     */
    setNumberOfPage: function(list) {
      /**
       * set default limited of items by 8
       */
        const LIMITED_ITEMS = 8
      
      /**
       * return number of page
       */
       return Math.ceil(list.length / LIMITED_ITEMS);
    },
    paginate: function(list, index) {
       /**
       * set default limited of items by 8
       */
        const LIMITED_ITEMS = 8

      
      let numberItems = Math.ceil((list.length / LIMITED_ITEMS)*index + LIMITED_ITEMS);

      /**
       * return number of items
       */ 
      return list.slice((list.length / LIMITED_ITEMS)*index, (list.length / LIMITED_ITEMS)*index + LIMITED_ITEMS);
    }
  },
  computed: {
    /**
     * set filter list
     */
    getListByTitle: function() {
      /**
       * get name from current title
       */
      let  str = this.listFeaturedProductsTitle[this.currentTitle].name.toUpperCase();

      /**
       * filter list
       */
      if( str === 'ALL' )
        this.conditionList = this.listFeaturedProducts;
      else
        this.conditionList = this.listFeaturedProducts.filter( x => x.type.toUpperCase().match(str) );     
    },
    /**
     * update Final List
     */
   
    finalList: function() {
      
      /**
       * call computed: getListByTitle
       */
      this.getListByTitle;

      /**
       *  set number of page
       */
      this.numberOfPage = this.setNumberOfPage(this.conditionList);

      let temp = this.paginate(this.conditionList, this.dataTemp);
          
      return temp;      
    }
  },
  components: {
    homeCompAllProductsType,
    homeCompFeaturedProducts,
    homeCompOtherProducts,
    homeCompLTRProducts,
    homeCompBlog,
    homeCompCart
  }
};
</script>
<style scoped></style>