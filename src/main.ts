import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import { createRouter, createWebHistory } from "vue-router"

import AboutPage from "./pages/AboutPage.vue"
import MainPage from "./pages/MainPage.vue"
import UserDetails from "./pages/UserDetails.vue"
import UsersPage from "./pages/UsersPage.vue"
import TestComponent from './TestComponent.vue'
import ProductPanel from "./Product.vue"
import Products from "./Products.vue"

export type MetaDataType = {
    title: string
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: MainPage, meta: { title: "Home" } },
        { path: "/test", component: TestComponent, meta: { title: "Test" } },
        {
            path: "/products", component: Products, meta: { title: "Products"}
        },
        { path: "/product/:id", component: ProductPanel,
            name: "SingleProduct"
        },
        {
            path: "/users",
            component: UsersPage,
            meta: { title: "Users" },
            children: [
                {   path: "/users/:id/details",
                    component: UserDetails,
                    meta: { title: "Userdetails" }
                },
            ]
        },
        { path: "/about", component: AboutPage, meta: { title: "About" }  },
    ],

})
router.beforeEach((to, from, next) => {
    console.log("nav from=" + from.path + ", to=" + to.path)
    // set title from user defined meta data

    const meta = to.meta as MetaDataType
    const { title } = meta
    if (title) {
        document.title = title
    }
    next()
})

const app = createApp(App)
app.use(router)
app.mount('#app')
