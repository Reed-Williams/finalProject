<script setup lang="ts">
import { useAlerts } from '../models/alerts';
const alerts = useAlerts();

</script>
<template>
<div class="columns mt-3">
    <div class="column is-10"></div>
    <div v-for=" (x, i) in alerts.notifications">
        <div v-if="x.message != '' " :class="`column notification is-light is-${x.type}`">
            <button class="delete" @click="alerts.close(i)" ></button>
            {{ x.message }}
        </div>
    </div>
</div>
</template>


<style scoped>

</style>