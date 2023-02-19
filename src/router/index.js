import {createWebHistory,createRouter} from "vue-router";
import Login from '../views/Login.vue'

const routes = [
    {
        path:'/Login',
        name:'Login',
        component:Login
    }
]

const router = createRouter({
    history:createWebHistory,
    routes
})

export default router