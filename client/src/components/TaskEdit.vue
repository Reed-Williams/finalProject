<script setup lang="ts">
    import { Task } from '../models/tasks';
    const { task } = defineProps<{task: Task}>();

</script>
    
<template>
    <!--Form section-->
            <form @submit.prevent="$emit('save')" class="has-background-primary py-3 px-2">
                <div class="field is-grouped">
                    <p class="control has-icons-left is-expanded"> 
                        <input class="input is-primary" type="text" placeholder="Task title" v-model="task.title">
                        <span class="icon is-left"><i class="fa-solid fa-pencil" aria-hidden="true"></i></span>
                    </p>
                    <p class="control has-icons-left">
                        <input class="input is-primary" type="text" placeholder="Enter a valid username" v-model="task.assignedFor">
                        <span class="icon is-left"><i class="fa-solid fa-user" aria-hidden="true"></i></span>
                    </p>
                    <p class="control has-icons-left">
                        <input class="input is-primary" type="date" placeholder="MM/DD/YYYY" v-model="task.dueDate"> 
                        <span class="icon is-left"><i class="fas fa-calendar-plus" aria-hidden="true"></i></span>
                    </p>
                    <p class="control">
                        <button class="button is-primary is-link" @click.prevent="$emit('save')" >Add</button>
                    </p>
                </div>
            </form>
 </template>

