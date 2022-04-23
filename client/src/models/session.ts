import router from "../router";
import * as users from "../models/user";
import { useAlerts } from './alerts';
import { api } from "./myFetch";
import { defineStore } from "pinia";

export const useSession = defineStore('session', {
    state: () => ({
        user: null as users.User | null,
        destinationUrl: null as string | null,
    }),
    actions: {
        async Login(username: string, password: string) {

            const alerts = useAlerts();
        
            try {
                const user = await this.api("users/login", { username, password });
                if(user) {
        
                    alerts.notifications.push({
                        type: "success",
                        message: `Welcome back ${user.username}!`,
                    });
        
                    this.user = user;
                    router.push(this.destinationUrl ?? '/success');
                }
        
            } catch (error: any) {
                alerts.notifications.push({
                    type: "danger",
                    message: error.message,
                });
            }
        },
        
        Logout() {
            this.user = null;
            router.push('/login');
        },

        async api(url: string, data?: any, method?: 'GET' | 'POST' | 'PUT' | 'DELETE', headers: any = {}) {
            const alerts = useAlerts();

            if(this.user?.token) {
                headers.Authorization = `Bearer ${this.user.token}`;
            }

            try {
                const response = await api(url, data, method, headers);
                if(response.errors?.length) {
                    throw { message: response.errors.join(', ') };
                }
                return await response.data;                
            } catch (error: any) {
                alerts.notifications.push({
                    type: "danger",
                    message: error.message,
                });
            }

        }
    },
})

export interface ApiResult {
    data: any;
    errors?: string[];
    success: boolean;
}