import { createRouter, createWebHistory } from "vue-router";
import Welcome from '../components/views/WelcomeLanding.vue';
import Pokelist from '../components/views/PokemonList.vue';

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },

    {
        path: '/pokelist',
        name: 'Pokemon List',
        component: Pokelist
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;