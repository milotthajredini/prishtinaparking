import Home from './components/Home.vue';
import About from './components/About.vue';
import Login from './components/Login.vue';

export const routes = [
    { path:'/', component:Home},
    { path: '/about', component:About},
    {path: '/login', component:Login}
  
]