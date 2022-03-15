import { defineStore } from 'pinia'


export const useAlerts = defineStore('alerts', {
  
    state: () => ({
        notifications: [
            {message: '', type: ''}
        ] 
    }),
    actions: {
        close(index: number) {
            this.notifications.splice(index, 1);
        }
    }
})