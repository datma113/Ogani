<template>
  <div class="container mt-5">
      <div class="title mb-5">
          <p style="border-bottom: 1px solid black"> From the Blog </p>
      </div>
      <div class="row mt-5">
          <homeCompBlogBlog class="col-lg-4" v-for="blog in listBlog" v-bind:key="blog.id" v-bind:blog="blog"/>
      </div>
  </div>
</template>

<script>
import homeCompBlogBlog from './homeCompBlogBlog'
export default {
    name: 'homeCompBlog',
    data() {
        return {

        }
    },
    components: {
        homeCompBlogBlog
    },
    props: {
        listBlog: {
            type: Array,
            default: []
        }
    }


};
</script>

<style scoped>
.title {
    display: flex;
    justify-content: center;
    font-size: 4rem;
    font-weight: bold;
}
</style>
