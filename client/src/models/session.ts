import {reactive} from 'vue';
import router from "../router";

import * as users from "../models/user"

const session = reactive({
    user: null as users.User | null,
})

export async function Login(username: string, password: string) {
    const user = users.list.find(u => u.username === username);
    if (!user) {
        throw { message: "User not found" };
    }
    if(user.password !== password) {
        throw { message: "Incorrect password" };
    }
    session.user = user;
    router.push('/success');
}

export function Logout() {
    session.user = null;
}
    
export default session;