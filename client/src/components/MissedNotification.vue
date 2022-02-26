<script setup lang="ts">
defineProps<{ msg: string }>()
</script>
<template>

<div class="notification is-danger">
  <button class="delete"></button>
  <h1>Missed Activity:</h1>
  <p>{{msg}}</p>
</div>

</template>
<style>
</style>