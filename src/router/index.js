import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddRule from '../views/AddRule.vue'
import AddFields from '../views/AddFields.vue'

Vue.use(VueRouter)
    const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/addf',
        name: 'AddFields',
        component: AddFields
    },
    {
        path: '/addr',
        name: 'AddRule',
        component: AddRule,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
