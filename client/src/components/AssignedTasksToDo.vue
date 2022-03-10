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
            return taskArray.getCompletedAssignedTasks;
        case 'Current':
            //return an array of objects where completed == false
            return taskArray.getUncompletedAssignedTasks;
        default:
            //return the entire array
            return taskArray.getAllAssignedTasks;
    }
  });


</script>

<template>
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
                            <p v-if="task.assignedBy == session.user!.name"> Was assigned by: &nbsp <strong> Me </strong> </p>
                            <p v-else> Was assigned by:  &nbsp <strong>{{task.assignedBy}} </strong> </p>
                        </div>
                      </div>

                      <!-- Right side -->
                      <div class="level-right">
                        <p class="level-item">Due: &nbsp <strong>{{ task.dueDate.toDateString() }}</strong></p>
                      </div>
                    </div>
                </a>

            </article>
</template>

<style scoped>

</style>