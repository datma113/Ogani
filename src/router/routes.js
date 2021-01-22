import home from '../docs/home/home'
import shop from '../docs/shop/shop'
import shopDetails from '../docs/pageShopDetails/shopDetails'
import shoppingCart from '../docs/pagesShoppingCart/shoppingCart'
import checkout from '../docs/checkout/checkout'
import blogs from '../docs/blogs/blogs'
import contact from '../docs/contact/contactUs'
export default [
    { path: '/', component: home },
    { path: '/shop', component: shop },
    { path: '/pages-shop-details', component: shopDetails },
    { path: '/pages-shopping-cart', component: shoppingCart },
    { path: '/pages-check-out', component: checkout },
    { path: '/blogs', component: blogs },
    { path: '/contact-us', component: contact },
]