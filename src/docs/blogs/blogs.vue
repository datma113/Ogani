<template>
  <div>
    <background />
    <div class="container mt-5">
      <div class="row">
        <blogsLeft class="col-lg-4" v-bind:classify="classify" />
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
