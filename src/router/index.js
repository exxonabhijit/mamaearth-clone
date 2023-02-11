import { createRouter, createWebHistory } from 'vue-router'

//main view component
import HomeView from '../views/HomeView.vue'
import AllProductComp from '../views/AllProductComp'
import PlantGoodness from '../views/PlantGoodness'
import BlogComp from '../views/BlogComp'
import ViewAll from '../views/ViewAllComp.vue'
import BlogDisplay from '../components/Blog Component/BlogDisplay'
import GiftComp from '../views/GiftpacksCompView'
import CatWiseProduct from '../views/CatWiseProduct'
import OurStory from '../views/OurStory'
import ProductDetailPage from '../components/Product Details/ProductDetails'
import cart from '../components/Cart Section/CartPage'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/allproducts',
    name: 'AllProducts',
    component: AllProductComp
  },
  {
    path: '/view-all',
    name: 'ViewAll',
    component:ViewAll
  },
  {
    path: '/giftpacks',
    name: 'giftpacks',
    component: GiftComp
  },
  {
    path: '/plantGoodness',
    name: 'plantGoodness',
     component: PlantGoodness
  },
  {
    path: '/blogs',
    name: 'blog',
    component: BlogComp,
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart,
  },
  {
    path: '/OurStory',
    name: 'OurStory',
    component: OurStory,
  },
  {
    path: '/product-details/:id',
    name: 'ProductDetail',
    component: ProductDetailPage,
    props:true
  },
  {
    path:'/blog/:id',
    name:'blogDisplay',
    component:BlogDisplay,
    props:true
  },
  {
    path:'/sub-category/:id',
    name:'CatWiseProduct',
    component:CatWiseProduct,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
