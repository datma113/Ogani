<template>
  <div class="footer-container ">
   
    <div class="container" style=" border-bottom: thin solid #DDDDDD;">
      <div class="row pb-5 pt-5">
        <div class="col-lg-4">
          <img src="../../assets/img/logo_ogani.png" />
          <div class="mt-5">
            <h2>Address: Ward 5, distict Go Vap, HCMC</h2>
            <h2>Phone: +84 912 366 093</h2>
            <h2>Email: datma113112111@gmail.com</h2>
          </div>
        </div>
        <div class="col-lg-4 row mt-5">
          <div class="col-6 useful-link">
            <h2 style="font-weight: bold; margin-bottom: 2rem;">Useful link</h2>
            <a href="#">About us</a>
            <a href="#">About Our shop</a>
            <a href="#">Secure Shopping</a>
            <a href="#">Delivery imformation</a>
            <a href="#">Private policy</a>
            <a href="#">Our Sitemap</a>
          </div>
          <div class="col-6 useful-link">
            <br /><br /><br />
            <a href="#">Who we are</a>
            <a href="#">Our services</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
            <a href="#">Innovation</a>
            <a href="#">Testimionals</a>
          </div>
        </div>
        <div class="col-lg-4 email mt-5">
          <h2 style="font-weight: bold; margin-bottom: 2rem;">
            Join our Newsletter Now
          </h2>
          <h4>Get Email updates about our latest shop and special offers</h4>
          <div class="row p-3 mt-5">
            <input
              type="text"
              class="col-8 form-control"
              style="height: 4rem; font-size: 2rem"
            />
            <button class="btn btn-success col-4" style="font-size: 2rem">
              Subcribe
            </button>
          </div>
          <div class="mt-5">
            <span class=" header-icon"> <i class="fab fa-facebook"></i></span>
            <span class=" header-icon"> <i class="fab fa-twitter"></i></span>
            <span class=" header-icon"> <i class="fab fa-google "></i></span>
            <span class=" header-icon"
              ><i class="fab fa-instagram-square"></i
            ></span>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
        <div class="row end">
            <div class="col-12 col-md-7 mb-3 mt-3"  style="display: flex; justify-content: center;">
                My webside base on template of colorlib
            </div>
            <div class="col-12 col-md-5 " style="display: flex; justify-content: center;">
                <img src="../../assets/img/paypal.png" alt="">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer-container {
  margin-top: 15rem;
  background-color: #f5f5f5;
}
.useful-link {
  display: flex;
  flex-direction: column;
}
.useful-link a {
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.header-icon {
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 50%;
}

.header-icon:hover {
  color: white;
  cursor: pointer;
  transition: 0.2s;
  background-color: #4caf50;
}
.end {
    display: flex;
    align-items: center;  
    justify-content: center;
    height: 5rem;
    font-size: 2rem;
}
</style>
