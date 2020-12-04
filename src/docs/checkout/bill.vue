<template>
  <div class="container">
    <p class="title">Billing Details</p>
    <div class="row">
      <div class="col-lg-8">
        <div class="row">
          <div class="col-lg-6 left">
            <div class="lbl">
              First Name: <span style="color: red">(*)</span>
            </div>
            <input type="text" class="form-control col-12 in" />
          </div>
          <div class="col-lg-6 left">
            <div class="lbl">
              Last Name: <span style="color: red">(*)</span>
            </div>
            <input type="text" class="form-control col-12 in" />
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12 left">
            <div class="lbl">Country: <span style="color: red">(*)</span></div>
            <input type="text" class="form-control col-12 in" />
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12 left">
            <div class="lbl">Address: <span style="color: red">(*)</span></div>
            <input type="text" class="form-control col-12 in" />
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12 left">
            <div class="lbl">
              Town/City: <span style="color: red">(*)</span>
            </div>
            <input type="text" class="form-control col-12 in" />
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12 left">
            <div class="lbl">
              Postcode / ZIP: <span style="color: red">(*)</span>
            </div>
            <input type="text" class="form-control col-12 in" />
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 left">
            <div class="lbl">Phone: <span style="color: red">(*)</span></div>
            <input type="text" class="form-control col-12 in" />
          </div>
          <div class="col-lg-6 left">
            <div class="lbl">Email: <span style="color: red">(*)</span></div>
            <input type="text" class="form-control col-12 in" />
          </div>
        </div>

        <div class="custom-control custom-checkbox cbx">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customCheck"
          />
          <label class="custom-control-label" for="customCheck"
            >Create an account?</label
          >
        </div>

        <p class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
          possimus? Fuga dignissimos quaerat officiis! Nihil nemo, aliquam ea
          ipsam dignissimos saepe reiciendis minus? Velit aut qui rem harum,
          quam doloribus.
        </p>
        <div class="row">
          <div class="col-lg-12 left">
            <div class="lbl">Country: <span style="color: red">(*)</span></div>
            <input type="text" class="form-control col-12 in" />
          </div>
        </div>

        <div class="custom-control custom-checkbox cbx">
          <input type="checkbox" class="custom-control-input" id="ad" />
          <label class="custom-control-label" for="ad"
            >Ship to a different address?</label
          >
        </div>
        <div class="row">
          <div class="col-lg-12 left">
            <div class="lbl">
              Other Notes: <span style="color: red">(*)</span>
            </div>
            <input
              type="text"
              class="form-control col-12 in"
              placeholder="Notes about your other here!"
            />
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="ctn">
          <p class="title">Your order</p>
          <div class="row">
            <div class="col-8" style="font-weight: bold; font-size: 2rem">
              Products
            </div>
            <div class="col-4" style="font-weight: bold; font-size: 2rem">
              Total
            </div>
          </div>
          <div class="row item">
            <div class="col-8 ">
              Organic Bananas
            </div>
            <div class="col-4 pr">
              $53.99
            </div>
          </div>
          <div class="row item">
            <div class="col-8 ">
              Fresh Vegetable
            </div>
            <div class="col-4 pr">
              $151.99
            </div>
          </div>
          <div class="row item">
            <div class="col-8 ">
              Vegetable’s Package
            </div>
            <div class="col-4 pr">
              $75.99
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-8" style="font-weight: bold; font-size: 2rem">
              Subtotal
            </div>
            <div class="col-4 pr" style="font-weight: bold; font-size: 2rem">
              $777.777
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-8" style="font-weight: bold; font-size: 2rem">
              Subtotal
            </div>
            <div class="col-4 pr" style="font-weight: bold; font-size: 2rem">
              $777.777
            </div>
          </div>
          <div class="custom-control custom-checkbox cbx">
            <input
              type="checkbox"
              class="custom-control-input"
              id="orderCheck"
            />
            <label class="custom-control-label" for="orderCheck"
              >Create an account?</label
            >
          </div>
          <p style="padding: 1rem; font-size: 1.5rem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam adipisci illum voluptate, voluptatibus magni, soluta placeat atque ipsam eos nulla, suscipit excepturi! A blanditiis ducimus iusto doloribus velit laboriosam corrupti!</p>
        <div class="custom-control custom-checkbox cbx">
            <input
              type="checkbox"
              class="custom-control-input"
              id="pmt"
            />
            <label class="custom-control-label" for="pmt"
              >Check payment</label
            >
          </div>
           <div class="custom-control custom-checkbox cbx">
            <input
              type="checkbox"
              class="custom-control-input"
              id="Paypal"
            />
            <label class="custom-control-label" for="Paypal"
              >Paypal</label
            >
          </div>
          <button class="btn btn-success bpo" >Place Order</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  font-weight: bold;
  font-size: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #dddddd;
}
.left {
  display: flex;
  flex-direction: column;
}
.lbl {
  font-size: 2rem;
  padding: 1rem 0;
}
.in {
  font-size: 2rem;
  padding: 1rem 3rem;
}

.cbx {
  margin: 2rem 0 0 0;
  font-size: 2rem;
}
.custom-control-label::before,
.custom-control-label::after {
  padding: 1rem;
  left: -3rem;
  cursor: pointer;
}
.custom-control-label {
  left: 1.5rem;
  user-select: none;
  cursor: pointer;
}
.text {
  padding: 2rem 0 0 0;
  font-size: 2rem;
}
.ctn {
  background-color: #f5f5f5;
  padding: 2rem 3rem;
}
.item {
  padding: 1rem 0;
  font-size: 2rem;
}
.pr {
  color: red;
}
.bpo {
  width: 100%;
  height: 5rem;
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem 0;
}
</style>
