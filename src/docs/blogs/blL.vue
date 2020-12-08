<template>
  <div class="layout">
      <blLSearchBar/>
      <blLCtegories class="blLCategories" v-bind:classify="classify"/>
      <blLNews v-bind:recentNews="recentNews"/>
      <btLSearhBy v-bind:keywordSearchBy="keywordSearchBy"/>
  </div>
</template>

<script>
import blLSearchBar from './blLSearchBar'
import blLCtegories from './blLCategories'
import blLNews from './blLNews'
import btLSearhBy from './blLSearchBy'
export default {
    name: 'blogsLeft',
    data() {
        return {

        }
    },
    components: {
        blLSearchBar,
        blLCtegories,
        blLNews,
        btLSearhBy
    },
    props: {
        classify: {
            type: Array,
            default: []
        },
        recentNews: {
            type: Array,
            default: []
        },
        keywordSearchBy: {
            type: Array,
            default: []
        }
    },
}
</script>

<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    font-size: 2.5rem;
}
.blLCategories {
    margin-top: 4rem;
}
</style>