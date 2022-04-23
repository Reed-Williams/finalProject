<script setup lang="ts">

import { Task } from '../models/tasks';
import { useSession } from '../models/session';
const session = useSession();
const { task } = defineProps<{ task: Task }>();


</script>

<template>
<!--Checkbox section-->
                <!--<a class="panel-block" v-for="task in tabTasks" :key="task.title" :class="{ 'is-completed': currentTab != 'Completed' && task.completed }">
                    -->
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
                <!-- </a> -->
</template>

<style scoped>

</style>