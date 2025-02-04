<template>
    <div class="h-16 border-b border-gray-500 bg-white flex gap-4 items-center px-4">
        <div class="font-bold">MyApp</div>
        <a>Home</a>
        <a>About</a>
        <div class="grow"></div>
        <button class="button" @click="loggedIn=!loggedIn">{{ c.loggedIn ? "Logout" : "Login"}}</button>
        <div v-if="c.loggedIn">{{c.user}}</div>
        <teleport to="body" v-if="c.loggedIn">
            <div class="text-white fixed p-1 bg-green-700 bottom-0 right-0">{{c.user}}</div>
        </teleport>
    </div>
</template>
<script setup lang="ts">
import { toRefs } from 'vue';
import { useUserContext } from './useUserContext';

const c = useUserContext()

// toRefs connects the ref "c" with loggedIn bidirectionally
const { loggedIn } = toRefs(c.value)
</script>