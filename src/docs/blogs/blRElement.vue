<template>
  <div class="blog-container mb-5">
      <img v-bind:src="require(`../../assets/img/${blog.url}`)" style="cursor: pointer">
      <div class="mt-3">
          <i class="fas fa-calendar-week fa-2x" style="color: gray"></i>
          <span class="dmy" >  {{blog.dmy}} </span>
          <i class="far fa-comment fa-2x" style="color: gray"></i>
          <span class="dmy" >  {{blog.cmt}} </span>
      </div>
      <div class="title" >
          {{blog.title}}
      </div>
       <div class="mt-3 desc">
          {{blog.desc}}
      </div>
      <div class="read-more col-11 col-lg-6">
          Read more &nbsp;
          <i class="fas fa-long-arrow-alt-right"></i>
      </div>
      
  </div>
</template>

<script>
export default {
    props: {
        blog: {
           type: Object,
           default: {}
        }
    }
}
</script>

<style scoped>
.blog-container {
    display: flex;
    flex-direction: column;
    border-right: thin solid #dddddd;
    border-bottom: thin solid #dddddd;
    padding-bottom: 2rem;
    transition: 0.2s;
    border-bottom-right-radius: 1rem;
    position: relative;
    height: 50rem;
}
.blog-container:hover {
     border-right: thin solid #4caf50;
    border-bottom: thin solid #4caf50;
}
.blog-container:active {
     border-right: thin solid red;
    border-bottom: thin solid red;
}
.dmy {
    font-size: 2rem;
    margin-right: 2rem;
    color: gray;    
}
.title {
    font-weight: bold;
    font-size: 2.5rem;
    line-height: 1;
    cursor: pointer;
}
.desc {
    font-size: 1.5rem;
    color: gray;
    line-height: 1.2;
}
.read-more {
    margin-top: 2rem;
    border-radius: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    border: thin solid gray;
    height: 5rem;
    color: gray;
    cursor: pointer;
    transition: .2s;
    position: absolute;
    bottom: 2rem;
    user-select: none;
}
.read-more:hover {
     border: thin solid #4caf50;
     color: #4caf50;
}
.read-more:active {
     border: thin solid red;
    color: red;
}
img {
    height: 25rem;
}
</style>