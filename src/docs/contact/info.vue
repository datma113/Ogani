<template>
      <div class="info-ctn">
          <div style="padding: 3rem 1rem"><i class="fa-4x ic" v-bind:class="`${item.icon}`"></i></div>
          <div class="ic-title"> {{item.title}} </div>
          <div class="ic-text">{{item.text}}</div>
      </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: {}
        }
    }
}
</script>

<style scoped>
.info-ctn {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.ic {
    color: #7fad39;
    transition: 0.1s;

}
.ic:hover {
    cursor: pointer;
    transform: scale(1.3);
    color: red;
}
.ic-title {
    font-weight: bold;
    font-size: 3rem;
    line-height: 120%;
   
}
.ic-text {
    font-size: 1.5rem;
    color: gray;
     text-align: center;
}
</style>