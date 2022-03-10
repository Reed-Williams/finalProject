<script setup lang="ts">
import DatedTasks from '../components/DatedTasks.vue'
</script>

<template>
    <div class="section">
        <h1 class="title is-2"> Calendar Page </h1>
        <p class="subtitle is-4"> All the tasks I have either created or been assigned are listed from oldest at the top to newest at the bottom.
            Tasks are color coded with relation to the task's due date and the current date. 
        </p>
        <div class="columns is-centered">
            <div class="column is-12">
                <dated-tasks> </dated-tasks>
            </div>
        </div>
        
    </div>
</template>

<style scoped>

</style>