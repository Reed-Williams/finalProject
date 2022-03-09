<script setup lang="ts">

import { useTasks } from '../models/tasks';
import session from "../models/session";

const taskArray = useTasks();


</script>

<template>
    <div>
        <h1>Below we have a list of tasks that have been assigned to the user: </h1>
        <article class="panel">
            <div v-for="task in taskArray.getAssignedTasks">
                {{ task.title }}
            </div>
        </article>
    </div>





</template>

<style scoped>

</style>