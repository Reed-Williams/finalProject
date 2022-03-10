<script setup lang="ts">
import CreatedTasks from '../components/CreatedTasks.vue'
</script>

<template>
   <div class="section">
        <h1 class="title is-2">Tasks that I Have Created...</h1>
        <p class="subtitle is-4">Here I can create new tasks and view what tasks I have already created, who the tasks were assigned for, and when the tasks are due. </p>
        <p class="has-text-danger"> Be sure to input the <strong>name</strong> of a valid user to correctly assign the task. </p>
        <created-tasks></created-tasks>
    </div>
</template>

<style scoped>

</style>