<script setup lang="ts">
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
import Menu from './components/Menu.vue';
import UpcommingNotification from './components/UpcommingNotification.vue';
import MissedNotification from './components/MissedNotification.vue';
import FutureNotification from './components/FutureNotification.vue';
import ToDoBlock from './components/toDoBlock.vue';

</script>

<template>
<Nav></Nav>
<div>
  <router-view />
</div>
<Footer></Footer>
</template>

<style>

</style>
