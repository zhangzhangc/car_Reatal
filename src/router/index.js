
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout/index.vue'

import Login from '../views/login/index.vue'
import Register from '@/views/register/index.vue'
import ShortRental from '@/views/ShortRental/index.vue'
import LongRental from '@/views/LongRental/index.vue'
import About from '@/views/About/index.vue'

import Order from '@/views/Order/index.vue'

import User from '@/views/User/index.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {

            path: '/',
            name: 'layout',
            component: Layout,
        }, {
            path: '/login',
            name: 'login',
            component: Login
        },
        , {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/shortRental',
            component: ShortRental


        },
        {
            path: '/longRental',
            component: LongRental


        },
        {
            path: '/about',
            component: About


        }, {
            path: '/order',
            component: Order
        },
        {
            path: '/user',
            component: User
        }


    ]
})


export default router

