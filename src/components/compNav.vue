<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-3">
        <img src="../assets/img/logo_ogani.png" />
      </div>
      <ul class="col-xl-6 nav">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Shops</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Pages</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Blog</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
      </ul>
      <div class="col-xl-3 nav-phone">
            <span class="nav-phone-icon"><i class="fas fa-phone"></i> </span> &nbsp;&nbsp;
            <span style="font-weight:bold">+84 9123 66 093</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  font-size: 2rem;
}
.nav-item {
  padding: 2rem;
}
.nav-link {
  color: black;
}
.nav-link:hover {
  color: #4caf50;
}
.nav-phone {
    display: flex;
    justify-content: center;
    align-items: center;
}
.nav-phone-icon {
    padding: 1rem;
    font-size: 1.5rem;
    border-radius: 50%;
    background-color: #DDDDDD;
    color: #4caf50;
}
.nav-phone-icon:hover{
    color: white;
    background-color: #4caf50;
    cursor: pointer;
    transition: 0.2s;
}
</style>
