<template>
  <div class="p-container">
    <div class="insde ">
      <div class="img-container">
        <img
          v-bind:src="require(`../../assets/img/${product.url}`)"
          class="img"
        />
        <div class="sale-off">-{{ product.discount * 100 }}%</div>
        <div class="icon-container">
          <span class="icon"><i class="fas fa-heart"></i></span>
          <span class="icon"><i class="fas fa-shopping-cart"></i></span>
        </div>
      </div>
      <div class="text-container mt-2">
        <div style="font-size: 1.5rem; color: gray;">{{ product.type }}</div>
        <div style="font-size: 2.5rem">{{ product.name }}</div>
        <div class="price-container">
          <span class="price"> ${{ product.originPrice - (product.originPrice * product.discount) }} </span>
          <span class="origin-price">
            ${{ product.originPrice  }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "saleOffProduct",
  data() {
    return {};
  },
  props: {
    product: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style scoped>
.p-container {
  background-color: white;
  padding: 0.5rem;
  cursor: pointer;
}
.insde {
  background-color: #f5f5f5;
  padding: 1rem;
  border: 1px solid #dddddd;
  transition: 0.5;
}
.p-container:hover .insde {
  border: 1px solid black;
}
.img-container {
  position: relative;
  overflow: hidden;
}
.sale-off {
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dd2222;
  color: white;
  position: absolute;
  border-radius: 50%;
  top: 0;
  font-size: 1.5rem;
  font-weight: bold;
  user-select: none;
}
.img {
  width: 100%;
  height: 18rem;
}
.icon-container {
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  transform: translateY(2rem);
  transition: 0.3s;
}
.p-container:hover .icon-container {
  transform: translateY(-4rem);
}

.icon {
  padding: 1rem;
  border: thin solid #dddddd;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;
  margin-right: 0.4rem;
  background-color: white;
}
.icon:hover {
  color: #dd2222;
  transform: rotate(360deg);
}
.text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
}
.price-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.price {
  font-weight: bold;
  font-size: 2rem;
  margin-right: 0.5rem;
}
.origin-price {
  font-size: 1.2rem;
  text-decoration: line-through;
  color: gray;
}
</style>
