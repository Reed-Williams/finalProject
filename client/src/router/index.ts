//vendor imports
 import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router"

 //personal imports
import About from '../pages/About.vue';
//import AssignedTasks from '../pages/AssignedTasks.vue';
//import Calendar from '../pages/Calendar.vue'
//import CreatedTasks from '../pages/CreatedTasks.vue';
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import SignUp from '../pages/SignUp.vue';
//import SuccessfulLogin from '../pages/SuccessfulLogin.vue';
import session from "../models/session";

//route array
const routes: RouteRecordRaw[] = [
    { path: '/about', component: About},
    //{ path: '/assignedTasks' , component: AssignedTasks},
    //{ path: '/calendar' , component: Calendar},
    //{ path: '/createdTasks' , component: CreatedTasks},
    { path: '/' , component: Home},
    { path: '/login' , component: Login},
    { path: '/signUp' , component: SignUp},
    { path: '/assignedTasks', component: () => import('../pages/AssignedTasks.vue') },
    { path: '/calendar', component: () => import('../pages/Calendar.vue') },
    { path: '/createdTasks', component: () => import('../pages/CreatedTasks.vue') },
    { path: '/success', component: () => import('../pages/SuccessfulLogin.vue') },
]

//router instance setup
const router = createRouter({
    history: createWebHistory(),
    routes
})

//routes with requiements 
router.beforeEach((to, from) => {
    console.log('New path click');
    console.log({ to });
    console.log({ from });
    console.log('destination before if statement:')
    console.log(session.destinationUrl);
    //if(session.destinationUrl == null && to.path != '/login') {
    //    session.destinationUrl = to.path;
   // }
    //if(to.path != '/login'){
      //  session.destinationUrl = to.path;}
    
    
    console.log('destination After if statement:');
    console.log(session.destinationUrl);
    if (['/assignedTasks', '/calendar', '/createdTasks', '/success'].includes(to.path)) { 
        if (!session.user) {
            session.destinationUrl = to.path;
            return '/login';
        }
    }
})
//export
export default router