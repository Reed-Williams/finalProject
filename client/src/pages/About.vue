<script setup lang="ts">

</script>

<template>
    <div class="container columns is-centered">
        <div class="column is-two-thirds">
            <h1 class="title">About Page</h1>
            <h2 class="subtitle">Description of my App</h2>
            <div class="content">
                <p> You can log into one of three accounts at the <strong>Login</strong> page by typing in a matching username and password from the table below:</p>
                    <div class="columns is-centered">
                        <div class="column is-half">
                            <table class="table is-bordered is-narrow is-hoverable">
                                <thead>
                                    <th>UserName</th>
                                    <th>Password</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>seashellSeller</td>
                                        <td>starfish</td>
                                    </tr>
                                    <tr>
                                        <td>stevenWilliams67</td>
                                        <td>mustang</td>
                                    </tr>
                                    <tr>
                                        <td>percyJackson</td>
                                        <td>blueberry</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                <p> OR you can simply click the <strong>SallyLoginTest</strong> button to login to Sally's account. A list of user information can be found in <em>/models/user.ts</em>. </p>
                </div>
                <br>
                <div class="content">
                    Once you are logged in, you can view the protected routes to the three pages in the <strong>Task</strong> dropdown menu in the nav bar:
                    <ul>
                        <li>Tasks Assigned to Me</li>
                        <li>Tasks Created by Me</li>
                        <li>Tasks Grouped by Date</li>
                    </ul>
                    <br>
                    <div class="columns is-centered">
                        <div class="column is-2">
                            <h1 class="title is-6">Tasks For Me</h1>
                            <p >This section shows all the tasks that are <em>assigned to</em> the user who is logged in. There are clickable tabs to see either all tasks, completed tasks, or uncompleted tasks.</p>
                        </div>
                        <div class="column is-2">
                            <h1 class="title is-6">Tasks I Made</h1>
                            <p>This section is similar to <strong>Tasks For Me</strong>, but the tasks the user has <em>created</em> are visible.
                            The user can also create new task for either themselves or for others in this segment.</p>
                        </div>
                        <div class="column is-8">
                            <h1 class="title is-6">Tasks Organized By Due Date</h1>
                            <p>This section has a table displaying all tasks associated with the current user, so the current user could be the person who was assigned the task, created the task, or both.</p>
                            <p>The tasks are shown in order from oldest at the top to newest at the bottom, and are color coded to display the following:
                                <ul>
                                    <li class="has-background-danger">Past Due</li>
                                    <li class="has-background-primary">Due Today</li>
                                    <li class="has-background-warning">Due in the upcoming week</li>
                                    <li class="has-background-success">Due beyond the upcoming week</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<style scoped>

</style>