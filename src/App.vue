<template>
  <div id="app">
    <div class="mb-5">
      <compHeader></compHeader>
      <compNav></compNav>
      <compSearchBar></compSearchBar>
    </div>
    <router-view ></router-view>
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
</style>
