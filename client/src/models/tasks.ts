import {defineStore} from 'pinia';
import { User } from './user';
import { useSession } from './session';



export const useTasks = defineStore('tasks', {
    state: () => ({
        list: [] as Task[],
        session: useSession(),
    }),
      actions:{
        async fetchUserTasks() {
            console.log("In fetchUserTasks");
            //if(this.session.user){
                console.log("In fetchUserTasks if statement");
                console.log(this.session.user)
                const tasks = await this.session.api('tasks');
                console.log(tasks);
                this.list = tasks;
                console.log(this.list);
            //}
            return tasks;
        },
        //methods that need to get tasks assigned for the user
        async getAllAssignedTasks() {
            const tasks : Task[] = await this.session.api('tasks/assignedFor/' + this.session.user?.username, undefined, "GET");
            this.list = tasks;
        },

        //methods that need to get tasks assigned by the user
        async getAllCreatedTasks() {
            const tasks : Task[] = await this.session.api('tasks/assignedBy/' + this.session.user?.username, undefined, "GET");
            this.list = tasks;
        },

        //methods that need to get all tasks associated to a user /associatedWith/
        async getAllUserAssociatedTasks() {
            const tasks = await this.session.api('tasks/associatedWith/' + this.session.user?.username, undefined, "GET");
            this.list = tasks;
            return this.list;
        },

        //method to add new task 
        async addNewTask(task: Task){
            if(this.session.user){
                task.assignedBy = this.session.user?.username;
            }
            const newTask = await this.session.api('tasks', task, "POST");
            this.list.push(newTask);
        }
    }
})

export interface Task { 
    _id?: string;
    title: string; 
    completed: boolean;
    dueDate: Date;
    assignedBy: string;
    userAB ?: User;
    assignedFor: string;
    userAF ?: User
 }