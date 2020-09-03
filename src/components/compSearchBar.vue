<template>
  <div class="container">
    <div class="row">
      <div class="mb-4 col-xl-3 row department-container ">
        <div
          class="row col-xl-12 search-all-departments"
          @click="activeCollapse"
        >
          <div class="col-2"><i class="fas fa-bars fa-2x"></i></div>
          <div class="col-8">All departments</div>
          <div class="col-2"><i class="fas fa-sort-down"></i></div>
        </div>

        <ul
          class="nav flex-column departments-collapse "
          id="allDepartmentsCollapse"
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
      <div class="col-xl-9 ml-xl-5 row search-bar">
        <div class="all-catagories col-2 d-none d-md-block ">
          All catagories
        </div>
        <input
          type="text"
          class="search-bar-input col-10 col-md-8"
          placeholder="What do you need? ..."
        />
        <div class="btn btn-success col-2 search-bar-btn-input">Search</div>
        <!----->
        <div class="col-xl-12 mt-4 bg-under-search">
          <div
            id="demo"
            class="carousel slide"
            data-ride="carousel"
            style="width: 101.7%"
          >
            <!-- The slideshow -->
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="../assets/img/Vegetable_background.jpg"
                  alt="Los Angeles"
                  width="100%"
                  height="500"
                />
                <div class="carousel-caption">
                  <p class="title-caption-img">Fruit fresh</p>
                  <h1>Vegetables</h1>
                  <h1>100% Oganic</h1>
                  <button class="btn btn-success btn-lg">Shop Now</button>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/img/Seafood_background.jpg"
                  alt="Chicago"
                  width="100%"
                  height="500"
                />
                  <div class="carousel-caption">
                  <p class="title-caption-img">Seafood</p>
                  <h1>Food from Ocean</h1>
                  <h1>100% fresh</h1>
                  <button class="btn btn-success btn-lg">Shop Now</button>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/img/meat_background.jpg"
                  alt="New York"
                  width="100%"
                  height="500"
                />
                  <div class="carousel-caption">
                  <p class="title-caption-img">Meat fresh</p>
                  <h1>Meat</h1>
                  <h1>100% Healthy</h1>
                  <button class="btn btn-success btn-lg">Shop Now</button>
                </div>
              </div>
            </div>

            <!-- Left and right controls -->
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "compSearchBar",
  data() {
    return {
      checkActiveCollapse: false
    };
  },
  methods: {
    activeCollapse: function() {
      let allDepartmentsCollapse = document.getElementById(
        "allDepartmentsCollapse"
      );
      if (!this.checkActiveCollapse) {
        allDepartmentsCollapse.style.height = "44rem";
        this.checkActiveCollapse = !this.checkActiveCollapse;
      } else {
        allDepartmentsCollapse.style.height = "0";
        this.checkActiveCollapse = !this.checkActiveCollapse;
      }
    }
  }
};
</script>

<style scoped>
.department-container {
  padding: 0;
}
.search-all-departments {
  align-items: center;
  background-color: #4caf50;
  font-size: 1.5rem;
  height: 5rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: 0.2s;
  margin-left: 0;
}
.search-all-departments:hover {
  background-color: #7fad39;
  border: 1px solid black;
}
.search-bar {
  border: thin solid #dddddd;
  font-size: 1.5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  padding-right: 0;
}
.all-catagories {
  font-weight: bold;
  padding-right: 1rem;
  border-right: thin solid #dddddd;
}
.search-bar-input {
  border: none;
  outline: none;
  font-size: 1.5rem;
  padding-left: 2rem;
}
.search-bar-btn-input {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
}
.departments-collapse {
  border: thin solid #dddddd;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 0;
}
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

.bg-under-search {
  padding: 0;
  margin-left: -1.5rem;
  margin-right: 1.5rem;
}

.carousel-caption {
  position: absolute;
  top: 30%;
}
.title-caption-img {
  color: #4caf50;
  font-size: 5rem;
  font-weight: bold;
  text-shadow: 0 0 4px black;
}
</style>
