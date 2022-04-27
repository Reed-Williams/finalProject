<script setup lang="ts">

import {ref, reactive, computed} from 'vue';

import { useSession } from '../models/session';
import { useTasks } from '../models/tasks';
const taskArray = useTasks();
const session = useSession();


taskArray.getAllUserAssociatedTasks();
const sortedTasks = (taskArray.list).sort((a,b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());

  
const today = new Date();
const nextWeek = new Date(((new Date()).getTime() + (7 * 24 * 60 * 60 * 1000)));


const pastDue = computed(() => {
    return sortedTasks.filter(task => (new Date(task.dueDate).getTime() < today.getTime())&& (new Date(task.dueDate).toDateString() !== today.toDateString()));
});
const dueToday = computed(()=> {
    return sortedTasks.filter(task => (new Date(task.dueDate).toDateString() === today.toDateString()));
});
const soonDue = computed(() => {
    return sortedTasks.filter(task => ((new Date(task.dueDate).getTime() > today.getTime())
                                    && (new Date(task.dueDate).getTime() < nextWeek.getTime() ))  );
});
const futureDue = computed(() => {
    return sortedTasks.filter(task => (new Date(task.dueDate).getTime() > nextWeek.getTime())  );
});

</script>

<template>


    <table class="table is-bordered is-fullwidth">
        <thead>
            <tr>
                <th>Done</th>
                <th>Task</th>
                <th>By</th>
                <th>For</th>
                <th>Due</th>
            </tr>
        </thead>
        
        <tbody>

            <tr class="has-background-danger-light">
                <td colspan="5"> <h1 class="subtitle"> Past Due: </h1></td>
            </tr>

            <tr v-for="task in pastDue" class="has-background-danger">
                <td><p v-if="task.completed"><i class="fa-regular fa-square-check"></i></p></td>
                <td>{{task.title}}</td>
                <td v-if="task.assignedBy == session.user!.username"> Me </td>
                <td v-else>{{task.assignedBy}}</td>
                <td v-if="task.assignedFor == session.user!.username"> Me </td>
                <td v-else>{{task.assignedFor}}</td>
                <td>{{new Date(task.dueDate).toDateString()}}</td> 
            </tr>

            <tr class="has-background-primary-light">
                <td colspan="5"> <h1 class="subtitle"> Due Today: {{today.toDateString()}}: </h1></td>
            </tr>

            <tr v-for="task in dueToday" class="has-background-primary">
                <td><p v-if="task.completed"><i class="fa-regular fa-square-check"></i></p></td>
                <td>{{task.title}}</td>
                <td v-if="task.assignedBy == session.user!.username"> Me </td>
                <td v-else>{{task.assignedBy}}</td>
                <td v-if="task.assignedFor == session.user!.username"> Me </td>
                <td v-else>{{task.assignedFor}}</td>
                <td>{{new Date(task.dueDate).toDateString()}}</td> 
            </tr>

            <tr class="has-background-warning-light">
                <td colspan="5"> <h1 class="subtitle">Due In the Upcoming Week: {{today.toDateString()}} - {{nextWeek.toDateString()}}: </h1></td>
            </tr>

            <tr v-for="task in soonDue" class="has-background-warning">
                <td><p v-if="task.completed"><i class="fa-regular fa-square-check"></i></p></td>
                <td>{{task.title}}</td>
                <td v-if="task.assignedBy == session.user!.username"> Me </td>
                <td v-else>{{task.assignedBy}}</td>
                <td v-if="task.assignedFor == session.user!.username"> Me </td>
                <td v-else>{{task.assignedFor}}</td>
                <td>{{new Date(task.dueDate).toDateString()}}</td> 
            </tr>

            <tr class="has-background-success-light">
                <td colspan="5"> <h1 class="subtitle"> Due in the Future, after {{nextWeek.toDateString()}}: </h1></td>
            </tr>

            <tr v-for="task in futureDue" class="has-background-success">
                <td><p v-if="task.completed"><i class="fa-regular fa-square-check"></i></p></td>
                <td>{{task.title}}</td>
                <td v-if="task.assignedBy == session.user!.username"> Me </td>
                <td v-else>{{task.assignedBy}}</td>
                <td v-if="task.assignedFor == session.user!.username"> Me </td>
                <td v-else>{{task.assignedFor}}</td>
                <td>{{new Date(task.dueDate).toDateString()}}</td> 
            </tr>

        </tbody>
    </table>

</template>

<style scoped>

</style>