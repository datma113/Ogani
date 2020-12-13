<template>
  <div>
      <p class="title-categories">Categories</p>
      <div class="categories">
          <div v-for="(obj, index) in classify" v-bind:key="obj.id"  
            class="m-3 list"
            @click="updateCurrentIndex(index), getTitle(obj.title)"
            v-bind:class="{ 'activedCategories' : checkActived(index) }"
          >{{obj.title}}  </div>
      </div>
  
  </div>
</template>

<script>
export default {
    name: 'blLCategories',
    props: {
        classify: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
           currentIndex: 0
        }
    },
    methods: {
        checkActived(index) {
            return this.currentIndex === index;
        },
        updateCurrentIndex(index) {
            this.currentIndex = index;
        },
        getTitle: function(title) {
            this.$emit('getTitleFromblrCategories', title);
        }
    }
}
</script>

<style scoped>
.activedCategories {
    color: red;
}
.title-categories { 
    font-size: 3rem;
    font-weight: bold;
}
.categories {
    display: flex;
    color: gray;
    flex-direction: column;
    font-size: 2rem;
}
.list {
    cursor: pointer;
    
}
.list:hover {
    color:  #4caf50;
}
</style>