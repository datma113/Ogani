<template>
  <div class="row">
      <blRElement v-for="(blog, index) in blogs" v-bind:key="index"
        v-bind:blog="blog"
        class="col-lg-6"
      />
       <hr>
       <blRPaginations v-on:CurrentPageFromblRPaginations="CurrentPageFromblRPaginations" />
  </div>
</template>

<script>
import blRElement from './blRElement'
import blRPaginations from './blRPaginations'
export default {    
    components: {
        blRElement,
        blRPaginations
    },
    props: {
        blogs: {
            type: Array,
            default: []
        }
    },
    methods: {
        CurrentPageFromblRPaginations: function(data) {
            this.$emit('CurrentPageFromblogsRight',data);
        }
    }
}
</script>

<style scoped>
hr {
  border: 0;
  clear:both;
  display:block;
  width: 100%;               
  background-color:#dddddd;
  height: 1px;
}
</style>