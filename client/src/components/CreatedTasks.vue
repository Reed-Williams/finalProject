<script setup lang="ts">

import { useTasks } from '../models/tasks';
import session from "../models/session";
const taskArray = useTasks();


</script>

<template>
    <div>
        <h1>Below we have a list of tasks that the user has assigned to others </h1>
        <article class="panel">
            <div v-for="task in taskArray.getCreatedTasks">
                <p v-if="task.assignedFor == session.user!.name "> You told <strong>yourself</strong> to <strong>{{task.title}}</strong> </p>
                <p v-else>You told <strong>{{ task.assignedFor }}</strong> to <strong>{{task.title}}</strong></p>
            </div>
        </article>
    </div>
</template>

<style scoped>

</style>