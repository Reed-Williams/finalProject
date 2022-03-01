<script setup lang="ts">
  import {ref, reactive, computed} from 'vue';

  const userInput = ref ( '' );
  const currentTab = ref ( 'All' );
  const taskArray = reactive ([ 
                        {taskName : 'Do the dishes', completed: true},
                        {taskName : 'Take out the trash', completed: false},      
                        {taskName : 'Grade Labs', completed: false}
                    ]);

  function addCurrentTask() {
    //use user input to create a new array element
    taskArray.unshift({taskName : userInput.value, completed : false});
    //resent user input to empty string
    userInput.value = '';
  }
  
  const tabTasks = computed(() => {
    switch(currentTab.value){
        case 'Completed':
            //return an array of objects where completed == true
            return taskArray.filter(task => task.completed);
        case 'Current':
            //return an array of objects where completed == false
            return taskArray.filter(task => !task.completed);
        default:
            //return the entire array
            return taskArray;
    }
  });

</script>

<template>
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
      <!--Next we have the input text field-------------------------------------------------------------------->
      <!--When something is entered, the page is prevented from reloading and addCurrentTask is called-->
      <form @submit.prevent="addCurrentTask">
          <div class="field has-addons">
              <div class="control has-icons-left is-expanded">
                  <!--v-model="userInput" will take the user's input and store it in our vue data item named userInput-->
                  <input class="input is-primary" type="text" placeholder="What else do you need to do?" v-model="userInput">
                  <span class="icon is-left"><i class="fas fa-calendar-plus" aria-hidden="true"></i></span>
              </div>
              <div class="control">
                  <button class="button">Add</button>
              </div>
          </div>
      </form>
      <!--Next we have the list of checkboxes section------------------------------------------------------------>
      <!--We want a for loop that will display the disired tasks for the current tab-->
          <!--
              -tabTasks will return an array with the desired tasks for the given currentTab
              -:key is needed to iterate through the list
              -if the current tab is All and a task is completed, the checkbox should apprear active
          -->
      
          <a class="panel-block" v-for="task in tabTasks" :key="task.taskName" :class="{ 'is-completed': currentTab != 'Completed' && task.completed }">
              <input type="checkbox" v-model="task.completed" />
              {{ task.taskName }}
            </a>
     
  </article>
</template>

<style>
</style>