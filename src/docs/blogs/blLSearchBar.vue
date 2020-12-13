<template>
  <div class="search-container">
      <input type="text" placeholder="Search here" class="tf-search" v-model="textSearch" v-on:keyup="getTextSearch(textSearch)"> 
      <div class="btn-search"> <i class="fas fa-search"></i> </div>
     
  </div>

</template>

<script>
export default {
  data() {
    return {
      textSearch: ''
    }
  },
  methods: {
    getTextSearch: function(data) {
      this.$emit('getTextSearchFromblLSearchBar', data);
    }
  },
}
</script>

<style scoped>
.search-counter {
  position: relative;
}
.tf-search {
  border: thin solid #dddddd;
  border-radius: 2rem;
  outline: none;
  padding: 0 2rem;
  transition: 0.3s;
}
.tf-search:focus {
  border: thin solid black;
 
}
.btn-search {
  position: absolute;
  color: gray;
  top: 0.2rem;
  right: 3rem;
  transition: .1s;
  cursor: pointer;

}
.btn-search:hover {
  color: black;
}
</style>