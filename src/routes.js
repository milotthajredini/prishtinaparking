import Home from './components/Home.vue';
import About from './components/About.vue';
import Login from './components/Login.vue';
import PayParking from './components/PayParking.vue';
import Scroll from './assets/css/scroll-footer.css';
import Footer from './assets/css/Footer-Basic.css';

export const routes = [
    { path:'/', component:Home,Scroll,Footer},
    { path: '/about', component:About,Scroll,Footer},
    {path: '/login', component:Login,Scroll,Footer},
    {path: '/payparking', component:PayParking,Scroll,Footer}
  
]

