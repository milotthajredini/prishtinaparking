import Home from './components/Home.vue';
import About from './components/About.vue';
import Login from './components/Auth/Login.vue';
import PayParking from './components/PayParking.vue';
import Scroll from './assets/css/scroll-footer.css';
import Footer from './assets/css/Footer-Basic.css';
import Register from './components/Auth/Register.vue'

export const routes = [
    { path:'/',name:'home', component:Home,Scroll,Footer},
    { path: '/about',name:'about', component:About,Scroll,Footer},
    {path: '/login', name:'login',component:Login,Scroll,Footer},
    {path: '/register',name:'register', component:Register,Scroll,Footer},
    {path: '/payparking', name:'payparking',component:PayParking,Scroll,Footer}
  
]

