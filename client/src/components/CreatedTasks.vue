<script setup lang="ts">
import {ref, reactive, computed} from 'vue';

import { useTasks } from '../models/tasks';
import session from "../models/session";

const taskArray = useTasks();

const currentTab = ref ( 'All' );
  
const tabTasks = computed(() => {
    switch(currentTab.value){
        case 'Completed':
            //return an array of objects where completed == true
            return taskArray.getCompletedCreatedTasks;
        case 'Current':
            //return an array of objects where completed == false
            return taskArray.getUncompletedCreatedTasks;
        default:
            //return the entire array
            return taskArray.getAllCreatedTasks;
    }
  });


</script>

<template>
    <div>
        <h1>Below we have a list of tasks that have been assigned to the user: </h1>
        <div class="columns is-centered">
            <div class="column is-half">
                <article class="panel">
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
                    <form @submit.prevent="taskArray.addNewTask">
                        <div class="field has-addons">
                            <div class="control has-icons-left is-expanded">
                                <!--v-model="userInput" will take the user's input and store it in our vue data item named userInput-->
                                <input class="input is-primary" type="text" placeholder="title" v-model="taskArray.titleText">
                                <input class="input is-primary" type="text" placeholder="assigned for" v-model="taskArray.assignedForText">
                                <input class="input is-primary" type="text" placeholder="date in form YYYY-MM-DD" v-model="taskArray.dueDateText"> 
                                <span class="icon is-left"><i class="fas fa-calendar-plus" aria-hidden="true"></i></span>
                            </div>
                            <div class="control">
                                <button class="button" @click.prevent="taskArray.addNewTask" >Add</button>
                            </div>
                        </div>
                    </form>

                    <!--Checkbox section-->
                    <a class="panel-block" v-for="task in tabTasks" :key="task.title" :class="{ 'is-completed': currentTab != 'Completed' && task.completed }">
                      <input type="checkbox" v-model="task.completed" />
                      
                        <div class="tags has-addons is-rounded">
                            <span class="tag is-medium"><strong>{{ task.title}}</strong></span>
                            <span class="tag" v-if="task.assignedFor == session.user!.name"> Was created for: <strong> Self </strong></span>
                            <span class="tag" v-else> Was created for: <strong>{{task.assignedFor}} </strong></span>
                            <span class="tag"> Due: <strong>{{ task.dueDate.getMonth() + 1}} / {{task.dueDate.getDate() + 1}} / {{task.dueDate.getFullYear() }}</strong> </span>
                        </div> 

                    </a>

                </article>
            </div>
        </div>
    </div>





</template>

<style scoped>

</style>