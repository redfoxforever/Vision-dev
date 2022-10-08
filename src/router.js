import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './components/Home.vue';
import Category from './components/Category.vue';
import Location from './components/Location.vue';
import Faq from './components/Faq.vue';
import SignIn from "./components/SignIn.vue";
import SignUp from "./components/SignUp.vue";
import Profile from "./components/Profile.vue";
import Product from "./components/Product.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/home', component: Home, alias: '/'},
        { path: '/category', component: Category },
        { path: '/location', component: Location },
        { path: '/faq', component: Faq },
        { path: '/signIn', component: SignIn },
        { path: '/signUp', component: SignUp },
        { path: '/profile', component: Profile },
        { path: '/product', component: Product },
    ]
});