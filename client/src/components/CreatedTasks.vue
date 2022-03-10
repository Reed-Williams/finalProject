<script setup lang="ts">
import {ref, computed} from 'vue';

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
        <div class="columns is-centered">
            <div class="column is-half">
                <article class="panel">
                    <p class="panel-heading"> Tasks I have created... </p>
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
                <div class="panel-block has-background-primary">
                    <form @submit.prevent="taskArray.addNewTask">
                        <div class="field has-addons">
                            <div class="control has-icons-left"> 
                                <input class="input is-primary" type="text" placeholder="Task title" v-model="taskArray.titleText">
                                <span class="icon is-left"><i class="fa-solid fa-pencil" aria-hidden="true"></i></span>
                            </div>

                            <div class="control has-icons-left">
                                <input class="input is-primary" type="text" placeholder="Who is this task for?" v-model="taskArray.assignedForText">
                                <span class="icon is-left"><i class="fa-solid fa-user" aria-hidden="true"></i></span>
                            </div>

                            <div class="control has-icons-left">
                                <input class="input is-primary" type="text" placeholder="MM/DD/YYYY" v-model="taskArray.dueDateText"> 
                                <span class="icon is-left"><i class="fas fa-calendar-plus" aria-hidden="true"></i></span>
                            </div>

                            <div class="control">
                                <button class="button is-primary is-link" @click.prevent="taskArray.addNewTask" >Add</button>
                            </div>
                        </div>
                    </form>
                </div>

                    
                <!--Checkbox section-->
                <a class="panel-block" v-for="task in tabTasks" :key="task.title" :class="{ 'is-completed': currentTab != 'Completed' && task.completed }">
                    <!-- Main container -->
                    <div class="container level">
                      <!-- Left side -->
                      <div class="level-left">
                          <div class="level-item">
                              <input type="checkbox" v-model="task.completed" />
                          </div>
                        <div class="level-item">
                            <p> <strong>{{ task.title}}</strong></p>
                            &nbsp
                            <p v-if="task.assignedBy == session.user!.name"> Was assigned by: &nbsp <strong> Self </strong> </p>
                            <p v-else> Was assigned by: <strong>{{task.assignedBy}} &nbsp </strong> </p>
                        </div>
                      </div>

                      <!-- Right side -->
                      <div class="level-right">
                        <p class="level-item">Due: &nbsp <strong>{{ task.dueDate.toDateString() }}</strong></p>
                      </div>
                    </div>
                </a>

                </article>
            </div>
        </div>
    </div>





</template>

<style scoped>

</style>