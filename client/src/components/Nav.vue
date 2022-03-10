<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LoginBadge from './LoginBadge.vue';

</script>

<template>

<nav class="navbar is-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">
      <img src="https://cdn.pixabay.com/photo/2017/07/07/02/06/symbol-2480163__340.png" width="30" height="30">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <router-link class="navbar-item" to =/>
        Home
      </router-link>

      <router-link class="navbar-item" to = /about>
        About Us
      </router-link>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Tasks
        </a>

        <div class="navbar-dropdown">
          <router-link class="navbar-item" to = /assignedTasks>
            Tasks Assigned to Me 
          </router-link>
          <router-link class="navbar-item" to = /createdTasks>
            Tasks Created by Me 
          </router-link>
          <router-link class="navbar-item" to = /calendar>
            Tasks Grouped by Date 
          </router-link>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <login-badge></login-badge>
      </div>
    </div>
  </div>
</nav>

</template>
<style>
</style>
