<script setup lang="ts">
defineProps<{ msg: string }>()
</script>
<template>

<div class="notification is-success">
  <button class="delete"></button>
  <h1>Future Activity:</h1>
  <p>{{msg}}</p>
</div>

</template>
<style>
</style>