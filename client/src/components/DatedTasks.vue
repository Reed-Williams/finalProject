<script setup lang="ts">
import { useTasks } from '../models/tasks';
const taskArray = useTasks();

const sortedTasks = taskArray.getAllUserAssociatedTasks.slice().sort((a,b) => b.dueDate - a.dueDate);

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
        
        <tbody v-for="task in sortedTasks">
            <tr v-if="task.completed" class="has-background-success">
                <td><p>case1</p></td>
                <td>{{task.title}}</td>
                <td>{{task.assignedBy}}</td>
                <td>{{task.assignedFor}}</td>
                <td>{{task.dueDate.toDateString()}}</td>
            </tr>
            <tr v-else class="has-background-danger">
                <td><p>case1</p></td>
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