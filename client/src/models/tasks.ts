import {defineStore} from 'pinia';

import session from "./session";


export const useTasks = defineStore('tasks', {
    state: () => ({
        tasks:[
            {title: 'Do your homework', completed: true, dueDate: new Date("2/2/2022"), assignedBy:'Sally', assignedFor:'Steve' },
            {title: 'Do my homework', completed: true , dueDate: new Date("2/28/2022") , assignedBy:'Sally', assignedFor:'Sally' },
            {title: 'Make Dinner', completed: false, dueDate: new Date("3/9/2022"), assignedBy:'Sally', assignedFor:'Percy' },
            {title: 'Wash the dishes', completed: false, dueDate: new Date("3/10/2022"), assignedBy:'Sally', assignedFor:'Steve' },
            {title: 'Call Mom', completed: true , dueDate: new Date("3/11/2022"), assignedBy:'Percy', assignedFor:'Sally' },
            {title: 'Lab prep', completed: true , dueDate: new Date("3/18/2022"), assignedBy:'Percy', assignedFor:'Sally' },
            {title: 'Get car inspected', completed: false , dueDate: new Date("3/16/2022"), assignedBy:'Percy', assignedFor:'Sally' },
            {title: 'Schedule dentist appointment', completed: false , dueDate: new Date("3/17/2022"), assignedBy:'Steve', assignedFor:'Sally' },
            {title: 'Homework', completed: false , dueDate: new Date("10/12/2023"), assignedBy:'Percy', assignedFor:'Sally' },
            {title: 'Study for test', completed: true , dueDate: new Date("4/5/2022"), assignedBy:'Sally', assignedFor:'Sally' },
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