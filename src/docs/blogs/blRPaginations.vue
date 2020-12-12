<template>
  <div>
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" 
           @click="decreaseCurrentPage()"
          ><i class="fas fa-long-arrow-alt-left"
         
          ></i
        ></a>
      </li>
      <li
        class="page-item"
        v-for="(item, index) in numberPage"
        v-bind:key="index"
      >
        <a
          class="page-link"
          @click="
            CurrentPageFromblRPaginations(`${item - 1}`, setCurrentIndex(index))
          "
          v-bind:class="{ actived: checkActived(index) }"
        >
          {{ item }}
        </a>
      </li>
      <li class="page-item">
        <a class="page-link" 
           @click="increaseCurrentPage()"
          ><i class="fas fa-long-arrow-alt-right"></i
        ></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 0
    };
  },
  methods: {
    CurrentPageFromblRPaginations: function(currentPage) {
      this.$emit("CurrentPageFromblRPaginations", currentPage);
    },
    setCurrentIndex: function(index) {
      this.currentPage = index;
    },
    checkActived: function(index) {
      return this.currentPage === index;
    },
    increaseCurrentPage: function() {
      if( this.currentPage < this.numberPage-1 ) {
        this.$emit("getIncreaseNumberFromblRPaginations", ++this.currentPage);
      }

    },
    decreaseCurrentPage: function() {
      if( this.currentPage > 0 ) {
        this.$emit("getDecreaseNumberFromblRPaginations", --this.currentPage);
      }
    }
  },
  props: {
    numberPage: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style scoped>
.page-link {
  font-size: 2rem;
  color: #4caf50;
  padding: 0.5rem 1rem;
  cursor: pointer;
  user-select: none;
}
.page-item {
  margin: 0.5rem;
}
.actived {
  color: white;
  background-color: #4caf50;
}
</style>
