<template>
  <div class="row" style="cursor: pointer">
      <div class="col-3" style="color: #dddddd">
          <img v-bind:src="require(`../../assets/img/${element.url}`)" class="element-img">
      </div>
      <div class="col-9 text-container">
          <p class="title"> {{element.title}} </p>
          <p class="dmy"> {{element.dmy}} </p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'newsElement',
    data() {
        return {

        }
    },
    props: {
        element: {
            type: Object,
            default: {}
        }
    }
}
</script>

<style scoped>
.element-img {
    width: 7rem;
    height: 7rem;
}
.title {
    font-size: 2rem;
    line-height: 2rem;
    font-weight: bold;
}
.dmy {
    color: gray;
    font-size: 1.5rem;
}
.text-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
   
}
</style>