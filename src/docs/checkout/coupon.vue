<template>
  <div class="container">
     <div class="coupon">
         <span class="icon"><i class="fas fa-tag"></i></span>have a coupon?  <span class="link" @click="checkActive" v-bind:class=" {'active' : active} " >&nbsp;Click here&nbsp;</span>  to enter your code
     </div>
   
         <input type="text" class="form-control col-12  mt-3 in" placeholder="Enter your code here!" v-if="active">
  </div>
</template>

<script>
export default {
    name: 'coupon',
    data() {
        return {
            active: false
        }
    },
    methods: {
        checkActive: function() {
            this.active = !this.active
        }
    }
}
</script>

<style scoped>
.coupon {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    padding: 2rem 0;
    font-size: 2rem;

}
.icon {
    color: #7fad39;
    margin-right: 1rem;
}
.link {
    border-bottom: 1px solid black;
    font-weight: bold;
}
.link:hover {
    color: red;
    cursor: pointer;
    border-bottom: 1px solid red;
}
.in {
    font-size: 2rem;
    color: red;
}
.active {
     color: red;
      border-bottom: 1px solid red;
}
</style>