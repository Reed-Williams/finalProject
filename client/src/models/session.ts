import {reactive} from 'vue';
import router from "../router";

import { useAlerts } from './alerts';

import * as users from "../models/user"

const session = reactive({
    user: null as users.User | null,
    //make destinationUrl to save link for deep linking
    destinationUrl: null as string | null,
})

export async function Login(username: string, password: string) {
    const user = users.list.find(u => u.username === username);
    const alerts = useAlerts();

    try {
        if (!user) {
            throw { message: "User not found" };
        }
        if(user.password !== password) {
            throw { message: "Incorrect password" };
        } 

        session.user = user;
        router.push(session.destinationUrl  ?? '/success');
        //router.push('/success');

    } catch (error: any) {
        alerts.notifications.push({
            type: "danger",
            message: error.message,
        });
    }
    
}

export function Logout() {
    session.user = null;
    session.destinationUrl = null;
    router.push('/login');
}
    
export default session;