<template>
  <div class="layout">
      <blLSearchBar/>
      <blLCtegories class="blLCategories" v-bind:classify="classify"/>
  </div>
</template>

<script>
import blLSearchBar from './blLSearchBar'
import blLCtegories from './blLCategories'
export default {
    name: 'blogsLeft',
    data() {
        return {

        }
    },
    components: {
        blLSearchBar,
        blLCtegories
    },
    props: {
        classify: {
            type: Array,
            default: []
        }
    }
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