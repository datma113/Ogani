<template>
  <div>
    <bgShopDetails style="margin-bottom: 5rem;" />
    <productDetails />
    <hr class="container hr" />
    <description v-bind:dir="dir" class="mt-5" />
    <hr class="container hr" />
    <relateProducts v-bind:listRelateProducts="listRelateProducts" />
  </div>
</template>

<script>
import bgShopDetails from "./bgShopDetails";
import productDetails from "./details";
import description from "./description";
import relateProducts from "./relateProducts";
export default {
  name: "shopDetails",
  data() {
    return {
      dir: [
        {
          id: 0,
          title: "Descripton",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam aut culpa velit enim iste adipisci, voluptates, beatae aliquid, nesciunt sint saepe eos unde odio distinctio dicta molestiae perferendis minima corrupti delectus ratione repellendus architecto officia? Ipsum aperiam quos sit officiis earum, enim cum vero impedit ex iste eligendi consequatur!",
          titleInside: "Descripton"
        },
        {
          id: 1,
          title: "Imformation",
          text:
            "Sit amet consectetur adipisicing elit. Assumenda suscipit natus, cum inventore optio impedit eveniet maxime velit minima! Rem dolores nesciunt quam temporibus nostrum modi qui recusandae eius praesentium tenetur doloribus, quaerat earum quod repellendus ea totam enim in nisi officia esse, ab nobis? Ut non nesciunt ratione atque dolorum enim deleniti expedita repellendus sequi. Alias delectus sunt placeat cum inventore optio impedit eveniet maxime velit minima! cum inventore optio impedit eveniet maxime velit minima! mollitia magni beatae illo quos harum atque, eum tenetur suscipit!",
          titleInside: "Imformation"
        },
        {
          id: 2,
          title: "Reviews",
          text:
            "Voluptate amet iste facere quos quo illo nobis. Fugiat, tempora harum! Eum vero quos voluptas, maiores a at ducimus aut doloremque quo cum mollitia ipsa ratione odio asperiores vel accusantium minima ex aliquid. Nesciunt dignissimos officiis commodi, quae voluptatum laborum velit illo, deserunt possimus omnis ducimus provident dicta. Excepturi rerum at quam mollitia dignissimos libero labore similique tempora illo, deserunt ipsum unde earum non quidem accusantium, saepe dolores nobis eos commodi officiis velit quia! Laborum vitae rem, dolore sunt recusandae omnis cumque quod, harum magnam, perferendis culpa iusto in error suscipit labore maiores reprehenderit. Facilis voluptatum ut hic. Non incidunt placeat quam, illo odio maiores recusandae assumenda excepturi quidem corrupti libero magni aperiam adipisci voluptas enim iste voluptatum repudiandae asperiores voluptatibus ullam delectus qui. Harum debitis suscipit eaque sequi ad, impedit quibusdam repellat reprehenderit quidem libero non iure, sunt facilis, deleniti recusandae nihil. Eius quod odio debitis nulla atque quam voluptas vel sunt fuga. Obcaecati, officiis dignissimos! Incidunt vitae doloremque nesciunt temporibus illo itaque earum corporis tempora cupiditate, voluptatem mollitia, harum quo reprehenderit sint iste debitis, quia omnis voluptas. Beatae ipsa perferendis voluptatum facere, quos, quod aliquam corrupti magnam error numquam non.",
          titleInside: "Reviews"
        }
      ],
      listRelateProducts: [
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
        }
      ]
    };
  },
  components: {
    bgShopDetails,
    productDetails,
    description,
    relateProducts
  }
};
</script>

<style scoped>
.hr {
  margin: 5rem auto;
}
</style>
