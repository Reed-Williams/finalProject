<script setup lang="ts">
import { RouterLink } from 'vue-router';
import {ref} from 'vue';

import { useSession } from '../models/session';

import { useAlerts } from '../models/alerts'
import Alerts from '../components/Alerts.vue';


const kbUsername = ref('');
const kbPassword = ref('');
const alerts = useAlerts();
const session = useSession();

function login()
{
    session.Login(kbUsername.value, kbPassword.value)
}

function sallyLogin()
{
    session.Login('seashellSeller', 'starfish')
}

</script>

<template>
<alerts />
    <div class="columns is-centered">
        <div class="column is-two-thirds">

            <!--Button to display a login that works-->
            <div class="section">
                <h1>Shortcut to login to Sally's account:</h1>
                <button class="button is-primary" @click.prevent="sallyLogin">
                    <span class="icon">
                        <i class="fa fa-sign-in"></i>
                    </span>
                    <span>SallyLoginTest</span>
                </button>
                <p class="pt-3">You may also type in a valid username and password below.</p>
            </div>
            <!--End Button to display a login that works-->

            <div class="section is-centered">
                <div class="title">
                    Welcome Back!
                </div>
                <form class="box">
                    <div class="field">
                        <label class="label">Username</label>
                        <div class="control">
                        <input class="input" v-model="kbUsername">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                        <input class="input" v-model="kbPassword">
                        </div>
                    </div>

                    
                    <button v-if="alerts.notifications.length ==2" class="button is-primary" @click.prevent="alerts.close(1); login()">Sign in</button>
                    <button v-else class="button is-primary" @click.prevent="login">Sign in</button>

                    <div>
                        <span> Don't have an account? <router-link to = /signUp class="has-text-link"> Click Here </router-link> to join us. </span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>