import {defineStore} from 'pinia';
import { ref } from 'vue';
import session from "./session";


export const useTasks = defineStore('tasks', {
    state: () => ({
        tasks:[
            {title: 'Do your homework', completed: true, dueDate: new Date("2019-01-16"), assignedBy:'Sally', assignedFor:'Steve' },
            {title: 'Do my homework', completed: true , dueDate: new Date("2019-01-16") , assignedBy:'Sally', assignedFor:'Sally' },
            {title: 'Make Dinner', completed: false, dueDate: new Date("2019-01-16"), assignedBy:'Steve', assignedFor:'Percy' },
            {title: 'Wash the dishes', completed: false, dueDate: new Date("2019-01-16"), assignedBy:'Percy', assignedFor:'Percy' },
            {title: 'Call Mom', completed: false , dueDate: new Date("2019-01-16"), assignedBy:'Percy', assignedFor:'Sally' },
        ],
        titleText: '',
        dueDateText: '',
        assignedByText: '',
        assignedForText: ''
    }),

    getters :{
        getAssignedTasks() : { title: string, completed: boolean, dueDate: Date, assignedBy: string, assignedFor: string}[] {
            return this.tasks.filter(task => task.assignedFor === session.user!.name)
        },
        getCreatedTasks() : { title: string, completed: boolean, dueDate: Date, assignedBy: string, assignedFor: string}[] {
            return this.tasks.filter(task => task.assignedBy === session.user!.name);
        },
        getAllUserAssociatedTasks() : { title: string, completed: boolean, dueDate: Date, assignedBy: string, assignedFor: string}[] {
            return this.tasks.filter(task => (task.assignedBy === session.user!.name || task.assignedFor === session.user!.name));
        },
    },

    actions:{
        addNewTask(){
            this.tasks.unshift({title: this.titleText, completed:false, dueDate: new Date(this.dueDateText), assignedBy: this.assignedByText, assignedFor: this.assignedForText});
            this.titleText = '';
            this.dueDateText = '';
            this.assignedByText = '';
            this.assignedForText = '';
        }
    }
})