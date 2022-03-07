<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="columns is-centered">
        <div class="column is-two-thirds">
            <div class="section is-medium is-centered">
                <div class="title">
                    Welcome Back!
                </div>
                <form class="box">
                    <div class="field">
                        <label class="label">Username</label>
                        <div class="control">
                        <input class="input">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                        <input class="input">
                        </div>
                    </div>

                    <button class="button is-primary">Sign in</button>
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