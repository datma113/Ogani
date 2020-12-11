<template>
  <div>
    <ul class="pagination">
      <li class="page-item"><a class="page-link" href="#"><i class="fas fa-long-arrow-alt-left"></i></a></li>
      <li class="page-item"><a class="page-link"  href="#" @click="CurrentPageFromblRPaginations(0)">1</a></li>
      <li class="page-item"><a class="page-link" href="#"  @click="CurrentPageFromblRPaginations(1)" >2</a></li>
      <li class="page-item"><a class="page-link" href="#"  @click="CurrentPageFromblRPaginations(2)"> 3</a></li>
      <li class="page-item"><a class="page-link" href="#"><i class="fas fa-long-arrow-alt-right"></i></a></li>
    </ul>
  </div>
</template>

<script>
export default {
    methods: {
        CurrentPageFromblRPaginations: function(currentPage) {
            this.$emit('CurrentPageFromblRPaginations',currentPage);
        }
    }
};
</script>

<style scoped>
.page-link {
    font-size: 2rem;
    color: #4caf50;
    padding: 0.5rem 1rem;
}
.page-item {
    margin: 0.5rem;
}
</style>
