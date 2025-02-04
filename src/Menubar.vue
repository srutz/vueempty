<template>
    <div class="h-16 border-b border-gray-500 bg-white flex gap-4 items-center px-4">
        <div class="font-bold">MyApp</div>
        <a>Home</a>
        <a>About</a>
        <div class="grow"></div>
        <button class="button" @click="c.loggedIn=!c.loggedIn">{{ c.loggedIn ? "Logout" : "Login"}}</button>
        <div v-if="c.loggedIn">{{c.user}}</div>
    </div>
</template>
<script setup lang="ts">
import { useUserContext } from './useUserContext';

const c = useUserContext()
console.log("from menubar", c)
</script>