import Vue from 'vue'
import VueRouter from 'vue-router'

import Formulario from './components/IngresosForm.vue'
import MChoice from './components/MChoice.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/formulario' },
        { path: '/formulario', component: Formulario },
        { path: '/mchoice', component: MChoice },
    ]
})