<template>
  <div id="app">
      <compHeader></compHeader>
      <compNav></compNav>
    
  </div>
</template>

<script>
import compHeader from './components/compHeader'
import compNav from './components/compNav'

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    compHeader,
    compNav
  }
}
</script>

<style>
#app {
   font-family: 'Alegreya Sans';
}

</style>
