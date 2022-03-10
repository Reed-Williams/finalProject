import { trackSlotScopes } from '@vue/compiler-core';
import {defineStore} from 'pinia';
import { ref } from 'vue';
import session from "./session";


export const useTasks = defineStore('tasks', {
    state: () => ({
        tasks:[
            {title: 'Do your homework', completed: true, dueDate: new Date("2/2/2022"), assignedBy:'Sally', assignedFor:'Steve' },
            {title: 'Do my homework', completed: true , dueDate: new Date("2/28/2022") , assignedBy:'Sally', assignedFor:'Sally' },
            {title: 'Make Dinner', completed: false, dueDate: new Date("3/9/2018"), assignedBy:'Steve', assignedFor:'Percy' },
            {title: 'Wash the dishes', completed: false, dueDate: new Date("5/6/2023"), assignedBy:'Percy', assignedFor:'Percy' },
            {title: 'Call Mom', completed: false , dueDate: new Date("10/12/2011"), assignedBy:'Percy', assignedFor:'Sally' },
        ],
        titleText: '',
        dueDateText: '',
        assignedByText: '',
        assignedForText: '',
    }),

    getters :{
        getCompletedAssignedTasks() : { title: string, completed: boolean, dueDate: Date, assignedBy: string, assignedFor: string}[] {
            return this.tasks.filter(task => (task.assignedFor === session.user!.name) && (task.completed))
        },
        getUncompletedAssignedTasks() : { title: string, completed: boolean, dueDate: Date, assignedBy: string, assignedFor: string}[] {
            return this.tasks.filter(task => (task.assignedFor === session.user!.name) && (!task.completed))
        },
        getAllAssignedTasks() : { title: string, completed: boolean, dueDate: Date, assignedBy: string, assignedFor: string}[] {
            return this.tasks.filter(task => (task.assignedFor === session.user!.name))
        },


        getCompletedCreatedTasks() : { title: string, completed: boolean, dueDate: Date, assignedBy: string, assignedFor: string}[] {
            return this.tasks.filter(task => (task.assignedBy === session.user!.name) && (task.completed) );
        },
        getUncompletedCreatedTasks() : { title: string, completed: boolean, dueDate: Date, assignedBy: string, assignedFor: string}[] {
            return this.tasks.filter(task => (task.assignedBy === session.user!.name) && (!task.completed));
        },
        getAllCreatedTasks() : { title: string, completed: boolean, dueDate: Date, assignedBy: string, assignedFor: string}[] {
            return this.tasks.filter(task => task.assignedBy === session.user!.name);
        },

        
        getAllUserAssociatedTasks() : { title: string, completed: boolean, dueDate: Date, assignedBy: string, assignedFor: string}[] {
            return this.tasks.filter(task => (task.assignedBy === session.user!.name || task.assignedFor === session.user!.name));
        },
    },

    actions:{
        addNewTask(){
            this.tasks.unshift({title: this.titleText, completed:false, dueDate: new Date(this.dueDateText), assignedBy: session.user!.name, assignedFor: this.assignedForText});
            this.titleText = '';
            this.dueDateText = '';
            this.assignedByText = '';
            this.assignedForText = '';
        }
    }
})