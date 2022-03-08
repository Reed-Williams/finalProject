<script setup lang="ts">
import { RouterLink } from 'vue-router';
import {ref} from 'vue';

import { Login } from '../models/session';

const kbUsername = ref('');
const kbPassword = ref('');

function login()
{
    Login(kbUsername.value, kbPassword.value)
}

function sallyLogin()
{
    Login('seashellSeller', 'starfish')
}

</script>

<template>
    <div class="columns is-centered">
        <div class="column is-two-thirds">

            <!--Button to display a login that works-->
            <div class="box">
                <h1>Example of a successful Login</h1>
                <br>
                <button class="button is-primary" @click="sallyLogin">
                    <span class="icon">
                        <i class="fa fa-sign-in"></i>
                    </span>
                    <span>SallyLoginTest</span>
                </button>
            </div>
            <!--End Button to display a login that works-->

            <div class="section is-medium is-centered">
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

                    <button class="button is-primary" @click.prevent="login">Sign in</button>
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