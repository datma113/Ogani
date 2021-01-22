<template>
  <div>
    <contactBackground style="margin-bottom: 5rem" />
    <div class="container">
        <div class="row">
             <info class="col-3" v-bind:item="item" v-for="item in info" v-bind:key="item.id"/>
        </div>
    </div>
   
    
  </div>
</template>

<script>
import contactBackground from "./contactBackground";
import info from './info';


export default {
  name: "contactUs",
  data() {
      return {
        info: [
            {id: 0, icon: 'fas fa-phone', title: 'Phone', text: '+0 912 366 093'},
            {id: 1, icon: 'fas fa-map-marker-alt', title: 'Adress', text: '44 Luong Ngoc Quyen, ward 4, Dist Go Vap, HCMC'},
            {id: 2, icon: 'far fa-id-card', title: 'Name', text: 'Thanh Dat'},
            {id: 3, icon: 'far fa-envelope', title: 'Gmail', text: 'datma113112111@gmail.com'},
            
        ]      
      }
  },
  components: {
    contactBackground,
    info
  },
};
</script>

<style scoped>
.info {
    
}
</style>