<template>
  <div class="container">
    <div class="dir-container ">
      <div
        v-for="(item, index) in dir"
        v-bind:key="item.id"
        class="dir-el"
        v-bind:class="{ isActive: checkActive(index) }"
        @click="isActive(index)"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="mt-5" v-for="(item,index) in dir" v-bind:key="item.id">
      <div v-if="checkActive(index)">
        <div class="title">{{ item.titleInside }}</div>
        <div style="font-size: 2rem" class="mt-3">
          {{ item.text }}
          <br> <br> 
          {{item.text}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dir",
  data() {
    return {
      indexOfDIR: 0
    };
  },
  methods: {
    isActive: function(index) {
      this.indexOfDIR = index;
    },
    checkActive: function(index) {
      return this.indexOfDIR === index;
    }
  },
  props: {
    dir: {
      type: Array,
      default: []
    }
  }
};
</script>

<style scoped>
.dir-container {
  display: flex;
  justify-content: center;
}
.dir-el {
  margin: 1rem 3rem;
  color: gray;
  font-size: 3rem;
  cursor: pointer;
  transition: 0.3s;
  
}
.dir-el:hover {
  color: black;
}
.title {
  font-weight: bold;
  font-size: 3rem;
}
.isActive {
  border-bottom: 1px solid black;
  color: black;
  font-size: 3.2rem;
}
</style>
