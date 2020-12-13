<template>
  <div class="layout">
      <blLSearchBar v-on:getTextSearchFromblLSearchBar="getTextSearchFromblLSearchBar"/>
      <blLCtegories class="blLCategories" v-bind:classify="classify" v-on:getTitleFromblrCategories="getTitleFromblrCategories"/>
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
    methods: {
        getTitleFromblrCategories: function(data) {
            this.$emit('getTitleFromblrCategories', data);
        },
        getTextSearchFromblLSearchBar:function(data) {
             this.$emit('getTextSearchFromblLSearchBar', data);
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