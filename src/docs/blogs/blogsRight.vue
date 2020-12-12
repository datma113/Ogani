<template>
  <div class="row">
      <blRElement v-for="(blog, index) in blogs" v-bind:key="index"
        v-bind:blog="blog"
        class="col-lg-6"
      />
       <hr>
       <blRPaginations v-on:CurrentPageFromblRPaginations="CurrentPageFromblRPaginations"
        v-bind:numberPage="numberPage"
        v-on:getDecreaseNumberFromblRPaginations="getDecreaseNumberFromblRPaginations"
         v-on:getIncreaseNumberFromblRPaginations="getIncreaseNumberFromblRPaginations"
        />
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
        },
        numberPage: {
            type: Number,
            default: 0
        }
    },
    methods: {
        CurrentPageFromblRPaginations: function(data) {
            this.$emit('CurrentPageFromblogsRight',data);
        },
        getIncreaseNumberFromblRPaginations: function(data) {
             this.$emit("getIncreaseNumberFromblRPaginations", data);
        },
        getDecreaseNumberFromblRPaginations: function(data) {
              this.$emit("getDecreaseNumberFromblRPaginations", data);
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