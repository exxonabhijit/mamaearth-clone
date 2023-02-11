import axios from "axios";
import { createStore } from "vuex";


export default createStore({
    state: {
        products: [],
        trending: [],
        bestSeller: [],
        catProducts:[],
        bestSellers:[],
        product: "",
        cart: [],
        banners:[],
        checkList:[],
        viewBenifits:[],
        viewDesc:[]
    },

    mutations: {
        GET_CHECKLIST(state, checkList) {
            state.checkList = checkList
        },
        GET_BANNERS(state, banners) {
            state.banners = banners
        },

        VIEW_BENIFITS(state, viewBenifits) {
            state.viewBenifits = viewBenifits
        },
        VIEW_DESC(state,viewDesc) {
            state.viewDesc = viewDesc
        },

        SET_PRODUCTS(state, products) {
            state.products = products;
        },

        GET_TRENDING_PRODUCT(state, product) {
            state.trending = product;
        },

        GET_CATWISE_PRODUTS(state, product) {
            state.catProducts = product;
        },

        GET_BEST_SELLER_PRODUCT(state, product) {
            state.bestSeller = product;
        },
        BEST_SELLER_PRODUCT(state, bestSellers) {
            state.bestSellers = bestSellers;
        },

        GET_SINGLE_PRODUCT(state, productId) {
            state.product = productId;
        },


        ADD_PRODUCT_TO_CART(state, { product, quantity }) {
            let productInCart = state.cart.find(item => {
                return item.product.id === product.id
            })

            if (productInCart) {
                productInCart.quantity += quantity;
            }
            else {
                state.cart.push({
                    product,
                    quantity
                })
            }
        },

        REMOVE_PRODUCT_FROM_CART(state, product) {
            state.cart = state.cart.filter(item => {
                return item.product.id !== product.id
            })
        },


    },

    actions: {
        //get banners of view all component
        getBanners({commit}) {
            axios.get('http://localhost:3000/banner-section?view-allType=BestSeller')
            .then((response) => {
                commit('GET_BANNERS', response.data);
            })
        },

        getChecklist({commit}) {
            axios.get('http://localhost:3000/checkList?view-allType=BestSeller')
            .then((response) => {
                commit('GET_CHECKLIST', response.data)
            });
        },

        getViewBenifits({commit}) {
            axios.get('http://localhost:3000/view-benifits?view-allType=BestSeller')
            .then((response) => {
                commit('VIEW_BENIFITS', response.data)
            })
        },

        getViewDescription({commit}) {
            axios.get('http://localhost:3000/view-description?view-allType=BestSeller')
            .then((response) => {
                commit('VIEW_DESC', response.data)
            })
        },

        //for all product fetching
        getAllProducts({ commit }) {
            axios.get('http://localhost:3000/products')
                .then((Response) => {
                    commit('SET_PRODUCTS', Response.data)
                })
        },

        //get category wise product
        getCatWiseProducts({ commit }, productId) {
            axios
                .get(`http://localhost:3000/products?sub_catId=${productId}`)
                .then((Response) => {
                    commit('GET_CATWISE_PRODUTS', Response.data);
                })
        },

        //all trending products 
        getTrendingProduct({ commit }) {
            axios.get('http://localhost:3000/products?trending=true&_limit=8')
                .then((Response) => {
                    commit('GET_TRENDING_PRODUCT', Response.data)
                })
        },

        //all best seller products
        getBestSellerProduct({ commit }) {
            axios.get('http://localhost:3000/products?best_seller=true&_limit=8')
                .then((Response) => {
                    commit('GET_BEST_SELLER_PRODUCT', Response.data)
                })
        },

        BestSellerProduct({ commit }) {
            axios.get('http://localhost:3000/products?best_seller=true')
                .then((Response) => {
                    commit('BEST_SELLER_PRODUCT', Response.data)
                })
        },

        //get single product
        getProduct({ commit }, productId) {
            axios.get('http://localhost:3000/products/' + productId)
                .then((res) => {
                    commit('GET_SINGLE_PRODUCT', res.data)
                })
        },

        //add to cart of product
        addProductToCart({ commit }, { product, quantity }) {
            commit('ADD_PRODUCT_TO_CART', { product, quantity });

            axios.post('http://localhost:3000/cart', {
                product_id: product.id,
                quantity
            })
        },
        
        //remove product from cart 
        removeProductFromCart({ commit }, product) {
            commit('REMOVE_PRODUCT_FROM_CART', product)
        }

        
    },
    
    getters: {
        CartItemTotal(state) {
            return state.cart.length;
        },

        CartTotalPrice(state) {
            let total = 0;
            state.cart.forEach(item => {
                total += item.product.price * item.quantity;
            })
            return total
        }
    }
})