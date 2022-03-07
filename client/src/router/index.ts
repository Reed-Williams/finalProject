//vendor imports
 import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router"

 //personal imports
import About from '../pages/About.vue';
import AssignedTasks from '../pages/AssignedTasks.vue';
import Calendar from '../pages/Calendar.vue'
import CreatedTasks from '../pages/CreatedTasks.vue';
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import SignUp from '../pages/SignUp.vue';
//import session from "../models/session";

//route array
const routes: RouteRecordRaw[] = [
    { path: '/about', component: About},
    { path: '/assignedTasks' , component: AssignedTasks},
    { path: '/calendar' , component: Calendar},
    { path: '/createdTasks' , component: CreatedTasks},
    { path: '/' , component: Home},
    { path: '/login' , component: Login},
    { path: '/signUp' , component: SignUp},
]

//router instance setup
const router = createRouter({
    history: createWebHistory(),
    routes
})

//routes with requiements 

//export
export default router