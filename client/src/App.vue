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
<div class="columns">
  <div class="column is-one-quarter">
    <h1 class="title">Activity Notifications:</h1>
    <MissedNotification msg="Lift"></MissedNotification>
    <UpcommingNotification msg="Run with Coach"></UpcommingNotification>
    <FutureNotification msg="Hike in Minnewaska"></FutureNotification>
    <FutureNotification msg="Yoga"></FutureNotification>
  </div>
  <div class="column is-half">
    <ToDoBlock></ToDoBlock>
  </div>
  <div class="column is-one-quarter">
    <Menu></Menu>
  </div>
</div>
<Footer></Footer>
</template>

<style>

</style>
