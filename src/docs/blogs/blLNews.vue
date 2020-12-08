<template>
  <div>
       <p class="title-news">Recnet News</p>
       <div class="news-container">
         <blLnewsElement v-for="(element, index) in recentNews"
            v-bind:key="index"
            v-bind:element="element"
            class="mt-3 mb-3"
         />

       </div>
  </div>
</template>

<script>
import blLnewsElement from './blLNewsElement'
export default {
    name: 'news',
    data() {
        return {

        }
    },
    props: {
        recentNews: {
            type: Array,
            default: []
        }
    },
    components: {
        blLnewsElement
    }
}
</script>

<style scoped>

.title-news { 
    font-size: 3rem;
    font-weight: bold;
}
.news-container {
    display: flex;
    flex-direction: column;

}
</style>