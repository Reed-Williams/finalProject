<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
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
                        <input class="input">
                        </div>
                    </div>

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

                    <div class="field">
                        <label class="label">Confirm Password</label>
                        <div class="control">
                        <input class="input">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                        <input class="input">
                        </div>
                    </div>

                    <div class="block">
                        <label class="checkbox">
                            <input type="checkbox">
                                Please email me when deadlines are near and when my friends assign me new tasks. 
                        </label>
                    </div>

                    <div class="field">
                        <label class="label">Phone Number</label>
                        <div class="control">
                        <input class="input">
                        </div>
                    </div>

                    <div class="block">
                        <label class="checkbox">
                            <input type="checkbox">
                                Please send me text notifications when deadlines are near and when my friends assign me new tasks. 
                        </label>
                    </div>

                    <button class="button is-primary">Sign Up</button>
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