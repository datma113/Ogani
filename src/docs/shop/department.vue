<template>
  <div>
    <h1 style="font-weight: bold">Department</h1>
    <ul
      class="nav flex-column departments-collapse mt-5"
    >
      <li class="nav-item ">
        <a class="nav-link" href="#">Fresh Meat</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="#">Vegetables</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="#">Fruit & nut Gifts</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="#">Fresh Berries</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="#">Butter & Eggs</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="#">Fastfood</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="#">Fresh Onion</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="#">Papayaya & Crisps</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="#">Oatmeal</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="#">Fresh Banana</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "department",
  data() {
    return {};
  }
};
</script>

<style scoped>

.nav {
  width: 100%;
  font-size: 2rem;
}
.nav-link {
  color: black;
}
.nav-link:hover {
  color: #4caf50;
}
</style>
