<template>
  <div class="blog mb-5">
  
      <img v-bind:src="require(`../../assets/img/${blog.url}`)" class="img" />

    <div class="row mt-5">
      <div class="col-5 cal-blog">
        <i class="fas fa-calendar"></i>
        {{ blog.date }}
      </div>
      <div class="col-7 cal-blog">
        <i class="far fa-comment-alt"></i> {{ blog.countCmt }}
      </div>
    </div>
    <h1 class="mt-1" style="font-weight: bold">{{ blog.title }}</h1>
    <h3 class="mt-3">{{ blog.desc }}</h3>
  </div>
</template>

<script>
export default {
  name: "homeCompBlogBlog",
  data() {
    return {};
  },
  props: {
    blog: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style scoped>
.cal-blog {
  font-size: 2rem;
  color: gray;
}
.blog {
    cursor: pointer;
    transition: 0.3s;
}
.blog:hover {
    transform: scale(1.05);
}
.img{
    width: 100%;
}
</style>
