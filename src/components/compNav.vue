<template>
  <div class="container mt-md-4 mt-lg-0">
    <div class="row">
      <div class="col-10 col-sm-10 col-md-10 col-lg-2 col-xl-3">
        <img src="../assets/img/logo_ogani.png" />
      </div>
      <ul class="d-none d-lg-flex col-lg-6 col-xl-6 nav">
        <li class="nav-item p-xl-4 p-lg-3  ">
          <router-link class="nav-link" href="#" to="/">Home</router-link>
        </li>
        <li class="nav-item p-xl-4 p-lg-3 ">
          <router-link class="nav-link" href="#" to="/shop">Shops</router-link>
        </li>
        <li class="nav-item p-xl-4 p-lg-3 ">
          <a class="nav-link" href="#">Pages</a>
        </li>
        <li class="nav-item p-xl-4 p-lg-3 ">
          <a class="nav-link" href="#">Blog</a>
        </li>
        <li class="nav-item p-xl-4 p-lg-3 ">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <div class="d-none d-lg-flex  col-lg-3 col-xl-3 nav-phone">
        <span class="nav-phone-icon"><i class="fas fa-phone"></i> </span>
        &nbsp;&nbsp;
        <span style="font-weight:bold">+84 9123 66 093</span>
      </div>
      <!----responsive--->
      <div class="nav-icon-responsive col-2 col-sm-2 col-md-2 d-lg-none">
        <span
          class=" icon-res"
          @click="toggleIconResNav"
          v-bind:class="{ 'check-active-side-bar': sideBarActive }"
          ><i class="fas fa-bars fa-2x"></i
        ></span>
      </div>
      <!------>
      <div class="side-bar-res d-lg-none pt-5 pl-3 pr-5" id="sideBarRes">
        <div class="row">
          <img
            src="../assets/img/logo_ogani.png"
            class="col-8"
            style="border-right: thin solid #DDDDDD"
          />
          <span class="col-4 side-bar-res-login"
            ><i class="fas fa-user"></i>&nbsp;&nbsp;Login</span
          >
        </div>
        <div class="pt-5 pb-3" style="border-bottom: thin solid #DDDDDD">
          <span class="nav-phone-icon"><i class="fas fa-phone"></i> </span>
          &nbsp;&nbsp;
          <span style="font-weight:bold; font-size: 2rem;"
            >+84 9123 66 093</span
          >
        </div>
        <ul class="nav flex-column ">
          <li class="nav-item p-xl-4 p-lg-3 side-bar-res-nav ">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item p-xl-4 p-lg-3 side-bar-res-nav ">
            <a class="nav-link" href="#">Shops</a>
          </li>
          <li class="nav-item p-xl-4 p-lg-3 side-bar-res-nav ">
            <a class="nav-link" href="#">Pages</a>
          </li>
          <li class="nav-item p-xl-4 p-lg-3 side-bar-res-nav ">
            <a class="nav-link" href="#">Blog</a>
          </li>
          <li class="nav-item p-xl-4 p-lg-3 side-bar-res-nav ">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
        <div class="row side-bar-res-icon">
          <span class="side-bar-res-each-icon">
            <i class="fab fa-facebook"></i
          ></span>
          <span class="side-bar-res-each-icon">
            <i class="fab fa-twitter"></i
          ></span>
          <span class="side-bar-res-each-icon">
            <i class="fab fa-google "></i
          ></span>
          <span class="side-bar-res-each-icon"
            ><i class="fab fa-instagram-square"></i
          ></span>
        </div>
        <div class="mt-5 flex side-bar-res-email">
             <i class="fas fa-envelope"></i>&nbsp; datma113112111@gmail.com
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "compNav",
  data() {
    return {
      sideBarActive: false
    };
  },
  methods: {
    toggleIconResNav: function() {
      let sideBarRes = document.getElementById("sideBarRes");
      if (!this.sideBarActive) {
        sideBarRes.style.marginLeft = "0";
        this.sideBarActive = !this.sideBarActive;
        document.body.style.backgroundColor = "#DDDDDD";
      } else {
        sideBarRes.style.marginLeft = "-25rem";
        this.sideBarActive = !this.sideBarActive;
        document.body.style.backgroundColor = "white";
      }
    }
  },
  computed: {}
};
</script>

<style scoped>
.nav {
  font-size: 2rem;
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
  background-color: #dddddd;
  color: #4caf50;
}
.nav-phone-icon:hover {
  color: white;
  background-color: #4caf50;
  cursor: pointer;
  transition: 0.2s;
}
.nav-icon-responsive {
  display: flex;
  align-items: center;
}
.icon-res {
  border: 1px solid black;
  padding: 0.6rem;
  cursor: pointer;
  border-radius: 10%;
}
.icon-res:hover {
  color: white;
  background-color: #4caf50;
  border: 1px solid #4caf50;
  transition: 0.2s;
}
.side-bar-res {
  background-color: white;
  position: fixed;
  height: 100%;
  width: 25rem;
  margin-left: -25rem;
  left: 0;
  top: 0;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  z-index: 9999999;
}
.check-active-side-bar {
  color: white;
  background-color: #4caf50;
  border: 3px solid black;
}

.side-bar-res-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: thin solid #dddddd;
}
.side-bar-res-login {
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.side-bar-res-login:hover {
  color: #4caf50;
}

.side-bar-res-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
}
.side-bar-res-each-icon {
  padding: 1.2rem;
  margin: 0.2rem;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;
}
.side-bar-res-each-icon:hover {
  background-color: #4caf54;
  color: white ;
}
.side-bar-res-email {
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
}
.side-bar-res-email:hover {
  color: #4caf50 ;
}
</style>
