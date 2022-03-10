<script setup lang="ts">

import {ref, reactive, computed} from 'vue';

import { useTasks } from '../models/tasks';
const taskArray = useTasks();

const sortedTasks = taskArray.getAllUserAssociatedTasks.slice().sort((a,b) => a.dueDate.getTime() - b.dueDate.getTime());

  
const today = new Date();
const nextWeek = new Date(((new Date()).getTime() + (7 * 24 * 60 * 60 * 1000)));


const pastDue = computed(() => {
    return sortedTasks.filter(task => (task.dueDate.getTime() < today.getTime())&& (task.dueDate.toDateString() !== today.toDateString()));
});
const dueToday = computed(()=> {
    return sortedTasks.filter(task => (task.dueDate.toDateString() === today.toDateString()));
});
const soonDue = computed(() => {
    return sortedTasks.filter(task => ((task.dueDate.getTime() > today.getTime())
                                    && (task.dueDate.getTime() < nextWeek.getTime() ))  );
});
const futureDue = computed(() => {
    return sortedTasks.filter(task => (task.dueDate.getTime() > nextWeek.getTime())  );
});

</script>

<template>


    <table class="table is-bordered is-fullwidth">
        <thead>
            <tr>
                <th>Completion Status</th>
                <th>Task</th>
                <th>Assigned By</th>
                <th>Assigned For</th>
                <th>Due Date</th>
            </tr>
        </thead>
        
        <tbody>

            <tr>
                <h1 class="subtitle">
                    Past Due:
                </h1>
            </tr>

            <tr v-for="task in pastDue" class="has-background-danger">
                <td><p v-if="task.completed"><i class="fa-regular fa-square-check"></i></p></td>
                <td>{{task.title}}</td>
                <td>{{task.assignedBy}}</td>
                <td>{{task.assignedFor}}</td>
                <td>{{task.dueDate.toDateString()}}</td>
            </tr>

            <tr>
                <h1 class="subtitle">
                    Due Today:
                </h1>
            </tr>

            <tr v-for="task in dueToday" class="has-background-primary">
                <td><p v-if="task.completed"><i class="fa-regular fa-square-check"></i></p></td>
                <td>{{task.title}}</td>
                <td>{{task.assignedBy}}</td>
                <td>{{task.assignedFor}}</td>
                <td>{{task.dueDate.toDateString()}}</td>
            </tr>

            <tr>
                <h1 class="subtitle">
                    Due In the Upcoming Week:
                </h1>
            </tr>

            <tr v-for="task in soonDue" class="has-background-warning">
                <td><p v-if="task.completed"><i class="fa-regular fa-square-check"></i></p></td>
                <td>{{task.title}}</td>
                <td>{{task.assignedBy}}</td>
                <td>{{task.assignedFor}}</td>
                <td>{{task.dueDate.toDateString()}}</td>
            </tr>

            <tr>
                <h1 class="subtitle">
                    Due in the Future:
                </h1>
            </tr>

            <tr v-for="task in futureDue" class="has-background-success">
                <td><p v-if="task.completed"><i class="fa-regular fa-square-check"></i></p></td>
                <td>{{task.title}}</td>
                <td>{{task.assignedBy}}</td>
                <td>{{task.assignedFor}}</td>
                <td>{{task.dueDate.toDateString()}}</td>
            </tr>

        </tbody>
    </table>

</template>

<style scoped>

</style>