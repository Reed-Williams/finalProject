<script setup lang="ts">
</script>

<template>
 <article class="panel">
            
            <div class="tabs is-boxed">
                <ul>
                    <li id="Current">
                        <a>
                          <span class="icon is-small"><i class="fas fa-clipboard-list"></i></span>
                          <span>Current</span>
                        </a>
                    </li>
                    <li id="Completed">
                        <a>
                          <span class="icon is-small"><i class="fas fa-calendar-times"></i></span>
                          <span>Completed</span>
                        </a>
                    </li>
                    <li id="All">
                        <a>
                          <span class="icon is-small"><i class="fas fa-calendar-day"></i></span>
                          <span>Upcoming</span>
                        </a>
                    </li>
                    <li class="is-active" id="All">
                        <a>
                          <span class="icon is-small"><i class="fas fa-calendar"></i></span>
                          <span>All</span>
                        </a>
                    </li>
                </ul>
            </div> 
            <!--Here we have the typing in field-->
            <div class="panel-block">
                <p class="control has-icons-left">
                  <input class="input is-primary" placeholder="New Task">
                  <span class="icon is-small is-left">
                    <i class="fas fa-calendar-plus"></i>
                  </span>
                </p>
            </div>
            <!--Here we have the list of checkbox fields-->        
                <a class="panel-block"><input type="checkbox" checked><span> Make Bulma great again</span></a>
                <a class="panel-block"><input type="checkbox"> <span>Add some more features</span></a>
                <a class="panel-block"><input type="checkbox"> <span>Make a github account</span></a>
                <a class="panel-block"><input type="checkbox"> <span>Learn how to use github</span></a>
                <a class="panel-block"><input type="checkbox"> <span>add a .gitignore file</span></a>
        </article>
</template>

<style>
</style>