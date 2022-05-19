<script setup lang="ts">
    import { Task } from '../models/tasks';
    import { User } from '../models/user';
    import {ref, computed} from 'vue';
    import { useSession } from '../models/session';
    
    const { task } = defineProps<{task: Task}>();
    const session = useSession;

    //everytime we get this array we need to be passing what has been typed in by the user
    //const users = session.getUsersByPattern();

    const userIn = ref ( '' );
    const filteredDataObj = computed(() => {
        return userList.filter(option => {
          return (
            option.userList.username
              .toString()
              .toLowerCase()
              .indexOf(userIn.toLowerCase()) >= 0
          )
        })
    });


</script>
    
<template>
    <!--Form section-->
            <form @submit.prevent="$emit('save')" class="has-background-primary py-3 px-2">
                <div class="field is-grouped">
                    <p class="control has-icons-left is-expanded"> 
                        <input class="input is-primary" type="text" placeholder="Task title" v-model="task.title">
                        <span class="icon is-left"><i class="fa-solid fa-pencil" aria-hidden="true"></i></span>
                    </p>
                    <!-- Here is the section with the user selection:-->
                    <!--
                    <p class="control has-icons-left">
                        <input class="input is-primary" type="text" placeholder="Enter a valid username" v-model="task.assignedFor">
                        <span class="icon is-left"><i class="fa-solid fa-user" aria-hidden="true"></i></span>
                    </p>
                    -->

                      <section>
                        <o-field label="Find a username">
                            <!-- if userIn is the v-model, at the end of all this how do we update the assigned task?-->
                          <o-autocomplete
                            v-model="userIn"
                            placeholder="Enter a valid username"
                            :keep-first="true"
                            :open-on-focus="true"
                            :data="filteredDataObj"
                            field="username"
                            @select="option => selected = option"
                          >
                          </o-autocomplete>
                        </o-field>
                      </section>




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

