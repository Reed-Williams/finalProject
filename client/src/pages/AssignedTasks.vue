<script setup lang="ts">

import {ref, computed} from 'vue';
import { useTasks } from "../models/tasks"
import TaskView from '../components/TaskView.vue';

const tasks = useTasks();
tasks.getAllAssignedTasks();

const description = "was assigned by"
const currentTab = ref ( 'All' );

const tabTasks = computed(() => {
    switch(currentTab.value){
        case 'Completed':
            //return an array of objects where completed == true
            return tasks.list.filter(task=> task.completed);
        case 'Current':
            //return an array of objects where completed == false
            return tasks.list.filter(task=> !task.completed);
        default:
            return tasks.list;
    }
  });



</script>

<template>
    <div class="section">
        <h1 class="title is-2">Tasks that I Have to Complete...</h1>
        <p class="subtitle is-4">Here I can view what tasks I need to do, who the tasks were assigned by, and when the tasks are due. </p>

            <article class="panel">
                <p class="panel-heading"> Tasks for me to do... </p>
                <!--First we have the clickable tabs------------------------------------------------------------------->
                <div class="tabs is-boxed">
                    <!--When a tab is set to currentTab, it is active. When a tab is clicked, it is set to currentTab-->
                    <ul>    
                        <li :class="{ 'is-active': currentTab == 'Current' }" @click=" currentTab = 'Current' ">
                            <a>
                                <span class="icon is-small"><i class="fas fa-clipboard-list"></i></span>
                                <span>Current</span>
                            </a>
                        </li>
                        <li :class="{ 'is-active': currentTab == 'Completed' }" @click=" currentTab = 'Completed' ">
                            <a>
                                <span class="icon is-small"><i class="fas fa-calendar-times"></i></span>
                                <span>Completed</span>
                            </a>
                        </li>
                        <li :class="{ 'is-active': currentTab == 'All' }" @click=" currentTab = 'All' ">
                            <a>
                                <span class="icon is-small"><i class="fas fa-calendar-day"></i></span>
                                <span>All</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <!--Checkbox section-->
                <task-view v-for="task in tabTasks" :key="task._id" :task="task" :words="description" :who="task.assignedBy"> </task-view>

            </article>
        


    </div>
</template>

<style scoped>

</style>