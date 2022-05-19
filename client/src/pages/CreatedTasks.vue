<script setup lang="ts">

import {ref, reactive, computed} from 'vue';
import { Task, useTasks } from "../models/tasks"
import { useSession } from '../models/session';
import TaskView from '../components/TaskView.vue';
import TaskEdit from '../components/TaskEdit.vue'


const tasks = useTasks();
tasks.getAllCreatedTasks();

const session = useSession();
const users = session.getUsers();

const newTask = reactive<Task>( {  title: "", completed: false, dueDate: new Date(), assignedBy: session.user?.username || "", assignedFor: "" });


const description = "was assigned for"

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
        <h1 class="title is-2">Tasks that I Have Created...</h1>
        <p class="subtitle is-4">Here I can view what tasks I made, who the tasks were assigned to, and when the tasks are due. </p>

            <article class="panel">
                <p class="panel-heading"> Tasks I made... </p>
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
                <!--Form section-->
                <task-edit :task="newTask" :userList="users" @save="tasks.addNewTask(newTask)"> </task-edit>
                <!--Checkbox section-->
                <task-view v-for="task in tabTasks" :key="task._id" :task="task" :words="description" :who="task.assignedFor"> </task-view>

            </article>
        


    </div>
</template>

<style scoped>

</style>