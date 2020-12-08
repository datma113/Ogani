<template>
  <div>
    <background />
    <div class="container mt-5">
      <div class="row">
        <blogsLeft class="col-lg-4" v-bind:classify="classify"
          v-bind:recentNews="recentNews"
          v-bind:keywordSearchBy="keywordSearchBy"
         />
      </div>
    </div>
  </div>
</template>

<script>
import background from "./background";
import blogsLeft from "./blL";
export default {
  name: "blogs",
  data() {
    return {
      classify: [
        { id: 0,title: 'all', numberCount: 0 },
        { id: 1,title: 'Beauti', numberCount: 0 },
        { id: 2,title: 'Food', numberCount: 0 },
        { id: 3,title: 'Life Style', numberCount: 0 },
        { id: 4,title: 'Travel', numberCount: 0 },
        { id: 5,title: 'Other..', numberCount: 0 },    
      ],

      recentNews: [
        { id: 0, title: '6 ways to prepare breakfast for 30', dmy: '2020-11-12', url: 'apple.png' },
        { id: 1, title: 'Visit the clean farm in the US', dmy: '2020-11-12', url: 'banana1.png' },
        { id: 2, title: 'Cooking tips make cooking simple', dmy: '2020-11-12', url: 'blog1.jpg' },
      ],

      keywordSearchBy: [
        'All', 'Apple', 'Beauty', 'Vegetables', 'Fruit', 'HealthyFood', 'LifeStyle' 
      ]
    };
  },
  components: {
    background,
    blogsLeft
  }
};
</script>

<style></style>
