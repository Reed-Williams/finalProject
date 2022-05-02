<script setup lang="ts">

    import { Task } from '../models/tasks';
    import { useSession } from '../models/session';
    const { task } = defineProps<{ task: Task }>();
    const session = useSession();


</script>

<template>
    <tr>
        <td><p v-if="task.completed"><i class="fa-regular fa-square-check"></i></p></td>
        <td>{{task.title}}</td>
        <td v-if="task.assignedBy == session.user!.username"> Me </td>
        <td v-else>{{task.assignedBy}}</td>
        <td v-if="task.assignedFor == session.user!.username"> Me </td>
        <td v-else>{{task.assignedFor}}</td>
        <td>{{new Date(task.dueDate).toDateString()}}</td> 
    </tr>
</template>


<style scoped>

</style>