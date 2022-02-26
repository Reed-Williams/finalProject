<script setup lang="ts">
defineProps<{ msg: string }>()
</script>
<template>

<div class="notification is-warning">
  <button class="delete"></button>
  <h1>Upcoming Activity:</h1>
  <p>{{msg}}</p>
</div>

</template>
<style>
</style>