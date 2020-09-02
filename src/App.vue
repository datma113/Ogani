<template>
  <div id="app">
    <compHeader></compHeader>
    <div class="a">
      <compNav></compNav>
      <compSearchBar></compSearchBar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import compHeader from "./components/compHeader";
import compNav from "./components/compNav";
import compSearchBar from "./components/compSearchBar";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    compHeader,
    compNav,
    compSearchBar
  }
};
</script>

<style>
#app {
  font-family: "Alegreya Sans";
}
.a {
  height: 70rem;
}
</style>
