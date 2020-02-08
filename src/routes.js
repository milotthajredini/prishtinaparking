import Home from './components/Home.vue';
import Contact from './components/Contact.vue';
import Login from './components/Auth/Login.vue';
import PayParking from './components/PayParking.vue';
import Scroll from './assets/css/scroll-footer.css';
import Footer from './assets/css/Footer-Basic.css';
import Register from './components/Auth/Register.vue';
import Services from './components/Services.vue';
import UserEdit from './components/User/UserEdit';
import Settings from './components/User/Settings';
import User from './components/User/User';

export const routes = [
    { path:'/',name:'home', component:Home,Scroll,Footer},
    { path: '/contact',name:'contact', component:Contact,Scroll,Footer},
    {path: '/login', name:'login',component:Login,Scroll,Footer},
    {path: '/register',name:'register', component:Register,Scroll,Footer},
    { path: '/user', name:'user', component: User},
    { path: '/useredit', name:'useredit', component:UserEdit},
    { path: '/settings', name:'settings', component:Settings},
    {path: '/payparking', name:'payparking',component:PayParking,Scroll,Footer},
    {path:'/services',name:'services',component:Services,Scroll,Footer}
  
]

