import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import {createRouter, createWebHistory} from "vue-router"

import MainPage from "./pages/MainPage.vue"
import UsersPage from "./pages/UsersPage.vue"
import AboutPage from "./pages/AboutPage.vue"

type MetaDataType = {
    title: string
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: MainPage, meta: { title: "Home" } },
        { path: "/users", component: UsersPage, meta: { title: "Users" }  },
        { path: "/about", component: AboutPage, meta: { title: "About" }  },
    ]
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
