import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import {createRouter, createWebHistory} from "vue-router"

import MainPage from "./pages/MainPage.vue"
import UsersPage from "./pages/UsersPage.vue"
import AboutPage from "./pages/AboutPage.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: MainPage },
        { path: "/users", component: UsersPage },
        { path: "/about", component: AboutPage },
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
