<template>
  <div class="header-container d-none d-lg-flex">
    <div class="  container-lg container-xl">
      <div class="row">
        <div class="col-lg-3 col-xl-3 header-line">
          <i class="fas fa-envelope"></i>&nbsp; datma113112111@gmail.com
        </div>
        <div class="  col-lg-5 col-xl-6">
          Free ship for all Order over 99$
        </div>
        <div class=" col-lg-3 col-xl-2 header-line">
          <span class=" header-icon"> <i class="fab fa-facebook"></i></span>
          <span class=" header-icon"> <i class="fab fa-twitter"></i></span>
          <span class=" header-icon"> <i class="fab fa-google "></i></span>
          <span class=" header-icon"
            ><i class="fab fa-instagram-square"></i
          ></span>
        </div>
        <div class=" col-lg-1 col-xl-1 header-login">
          <i class="fas fa-user"></i>&nbsp; login
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "compHeader",
  data() {
    return {};
  }
};
</script>

<style scoped>
.header-container {
  font-size: 1.2rem;
  background-color: #f5f5f5;
  height: 5rem;
  display: flex;
  align-items: center;
}

.header-line {
  border-right: thin solid #ddd;
}
.header-icon {
  font-size: 1.5rem;
  padding: 1.5rem;
  border-radius: 50%;
}
.header-icon:hover {
  color: white;
  cursor: pointer;
  transition: 0.2s;
  background-color: #4caf50;
}
.header-login:hover {
  color: white;
  cursor: pointer;
  transition: 0.2s;
  color: #4caf50;
}
</style>
