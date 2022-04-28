<script setup lang="ts">

import { computed} from 'vue';
import { useTasks } from "../models/tasks"
import colorTaskView from '../components/colorTaskView.vue';

const taskArray = useTasks();
taskArray.getAllUserTasksSorted();
  
const today = new Date();
const nextWeek = new Date(((new Date()).getTime() + (7 * 24 * 60 * 60 * 1000)));
const tomorrow = new Date(((new Date()).getTime() + (1 * 24 * 60 * 60 * 1000)));

const pastDue = computed(() => {
    return taskArray.list.filter(task => (new Date(task.dueDate).getTime() < today.getTime())
                                      && (new Date(task.dueDate).toDateString() !== today.toDateString()));
});
const dueToday = computed(()=> {
    return taskArray.list.filter(task => (new Date(task.dueDate).toDateString() === today.toDateString()));
});
const soonDue = computed(() => {
    return taskArray.list.filter(task => (  ( new Date(task.dueDate).getTime() > today.getTime() )
                                         && ( new Date(task.dueDate).getTime() < nextWeek.getTime() )
                                         && ( new Date(task.dueDate).toDateString() !== today.toDateString() ) 
                                         )
                                );
});
const futureDue = computed(() => {
    return taskArray.list.filter(task => (new Date(task.dueDate).getTime() > nextWeek.getTime())  );
});

</script>

<template>
    <div class="section">
        <h1 class="title is-2"> Calendar Page </h1>
        <p class="subtitle is-4"> All the tasks I have either created or been assigned are listed from oldest at the top to newest at the bottom.
            Tasks are color coded with relation to the task's due date and the current date. 
        </p>
        <div class="columns is-centered">
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
                        <color-task-view class="has-background-danger" v-for="task in pastDue" :key="task._id" :task="task"></color-task-view>
                    <tr class="has-background-primary-light">
                        <td colspan="5"> <h1 class="subtitle"> Due Today: {{today.toDateString()}}: </h1></td>
                    </tr>
                        <color-task-view class="has-background-primary" v-for="task in dueToday" :key="task._id" :task="task"></color-task-view>
                    <tr class="has-background-warning-light">
                        <td colspan="5"> <h1 class="subtitle">Due In the Upcoming Week: {{tomorrow.toDateString()}} - {{nextWeek.toDateString()}}: </h1></td>
                    </tr>
                        <color-task-view class="has-background-warning" v-for="task in soonDue" :key="task._id" :task="task"></color-task-view>
                    <tr class="has-background-success-light">
                        <td colspan="5"> <h1 class="subtitle"> Due in the Future, after {{nextWeek.toDateString()}}: </h1></td>
                    </tr>
                        <color-task-view class="has-background-success" v-for="task in futureDue" :key="task._id" :task="task"></color-task-view>

                </tbody>
            </table>
        </div>
        
    </div>
</template>

<style scoped>

</style>