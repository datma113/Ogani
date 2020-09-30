import home from '../docs/home/home'
import shop from '../docs/shop/shop'
import shopDetails from '../docs/pageShopDetails/shopDetails'
import shoppingCart from '../docs/pagesShoppingCart/shoppingCart'
export default [
    { path: '/', component: home },
    { path: '/shop', component: shop },
    { path: '/pages-shop-details', component: shopDetails },
    { path: '/pages-shopping-cart', component: shoppingCart }
]