<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { reactive, ref } from 'vue';
import { User } from '../models/user'
import { api } from '../models/myFetch'
import { useAlerts } from '../models/alerts';
import router from '../router';
import Alerts from '../components/Alerts.vue';

const alerts = useAlerts();

const newUser = reactive<User>({ name:"", username:"", password:"", email:"", id: 0});
const password2 = ref("");

async function addUser(){
    if(newUser.password != password2.value)
    {
        console.log("In the if statement")
        alerts.notifications.push({
            type: "danger",
            message: "Passwords do not match",
        });
    }
    else
    {
        const user = await api('users/', newUser, 'POST');
        console.log(user);
        if(user.success)
        {
            alerts.notifications.push({
                type: "success",
                message: "Welcome! Please log in",
                });
            router.push('/login')
        }
        else
        {
            alerts.notifications.push({
                type: "danger",
                message: user.errors[0],
            });
        }
    }
}

</script>

<template>

<alerts></alerts>
    <div class="columns is-centered">
        <div class="column is-two-thirds">
            <div class="section is-centered">
                <div class="title">
                    We're So Glad You Decided to Join Us:
                </div>
                <div class="subtitle">
                    It's a great day to get things done!
                </div>
                <form class="box">
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="newUser.name">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Username</label>
                        <div class="control">
                        <input class="input" type="text" placeholder="username" v-model="newUser.username">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                        <input class="input" type="text" placeholder="Password" v-model="newUser.password">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Confirm Password</label>
                        <div class="control" >
                        <input class="input" type="text" placeholder="Please retype password" v-model="password2">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                        <input class="input" type="text" placeholder="Email" v-model="newUser.email">
                        </div>
                    </div>

                    <button class="button is-primary" @click.prevent="addUser()">Sign Up</button>
                    <div>
                        <span> Already have an account? <router-link to = /login class="has-text-link"> Click Here </router-link> to get back to work. </span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>