<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="section is-medium">
        <div class="columns is-centered">
            <div class="column is-half">
                <h1 class="title is-4 has-text-success"> Successful Login! </h1>
                <p class="subtitle is-2"> You may now view your tasks.</p>
                <router-link class="button" to = /assignedTasks>
                    Tasks Assigned to Me
                </router-link>
                <router-link class="button" to = /createdTasks>
                    Tasks Created for Me
                </router-link>
                <router-link class="button" to = /calendar>
                    Tasks Grouped by Date
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>