<script setup lang="ts">
    import { Task } from '../models/tasks';
    import { useSession } from '../models/session';
    const { task, words, who } = defineProps<{ task: Task, words: string, who: string }>();
    const session = useSession();
    const taskDate = (new Date (task.dueDate)).toDateString();

</script>

<template>
<a class="panel-block" >
    <div class="container level"> 
        <div class="level-left">
            <input type = "checkbox" v-model="task.completed" />
        </div>

        <div class="level-item">
            <p><strong>{{task.title}}</strong></p>
            &nbsp
            <p v-if="who == session.user!.username"> {{words}} &nbsp <strong> Me </strong> </p>
            <p v-else> {{words}}  &nbsp <strong>{{who}} </strong> </p>
        </div>

        <div class="level-right">
            <p class="level-item">Due: &nbsp <strong> {{taskDate}}</strong></p>
        </div>
    </div>
</a>

    

</template>


<style scoped>
</style>