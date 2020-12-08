<template>
  <div>
       <p class="title-sb">Search By</p>
    
       <div  class="sb-container">
           <blLSearchByKW v-for=" (element, index) in keywordSearchBy"
            v-bind:key="index"
            v-bind:element="element"
            v-bind:index="index"
            @click.native="updateCurrentIndex(index)"
             v-bind:class=" { 'actived' :  checkActived(index)} "
             class="el"
           />
       </div>
  </div>
</template>

<script>
import blLSearchByKW from './blLSearchByKW'
export default {
    name: 'SearchBy',
    props: {
        keywordSearchBy: {
            type: Array,
            default: []
        }
    },
    components: {
        blLSearchByKW

    },
    data() {
        return {
            currentIndex : 0
        } 
    },
    methods: {
        checkActived: function(index) {      
            return this.currentIndex === index;
        },
        updateCurrentIndex: function(index) {
            this.currentIndex = index;        
        }
    }
}
</script>

<style scoped>
.el {
    background-color: #dddddd;
}

.actived {
    background-color: #4caf50;
    color: white;
}
.title-sb { 
    font-size: 3rem;
    font-weight: bold;
}

.sb-container {
    display: flex;
    flex-wrap: wrap;
   
}
</style>