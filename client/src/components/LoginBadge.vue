<script setup lang="ts">

import { RouterLink } from 'vue-router';
import { useSession } from '../models/session';
const session = useSession();


</script>

<template>
    <!--Here we have what gets shown if no one is logged in-->
    <div class="buttons" v-if="!session.user">
            <router-link class="button" to = /signup>
              <strong>Sign up</strong>
            </router-link>
            <router-link class="button" to = /login>
              <strong>Login</strong>
            </router-link>
    </div>

    <!--Here we have user information if someone is logged in-->
    <div class="buttons" v-else>
        <div class="avatar">
                {{ session.user.name}} @ {{ session.user.username}}
                <br />
                <i>{{ session.user.email }}</i>
        </div>
        <router-link class="button us-primary" @click="session.Logout()" to = /login>
            <strong>Log out</strong>
        </router-link>
    </div>
</template>

<style scoped>

</style>