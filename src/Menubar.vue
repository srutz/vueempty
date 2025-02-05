<template>
    <div :data-yo="console.log('template mb')" class="h-16 border-b border-gray-500 bg-white flex gap-4 items-center px-4">
        <div class="font-bold">MyApp</div>
        <a>Home</a>
        <a>About</a>
        <div class="grow"></div>
        <button class="button" @click="loggedIn=!loggedIn">{{ loggedIn ? "Logout" : "Login"}}</button>
        <div v-if="loggedIn">{{user}}</div>
        <teleport to="body" v-if="loggedIn">
            <div class="text-white fixed p-1 bg-green-700 bottom-0 right-0">{{user}}</div>
        </teleport>
    </div>
</template>
<script setup lang="ts">
import axios from 'axios';
import { toRefs, watch } from 'vue';
import { useUserContext } from './useUserContext';

const { user, loggedIn } = toRefs(useUserContext())


watch([ loggedIn], async () => {
    if (loggedIn.value) {
        const result = await axios.get("https://icanhazdadjoke.com", {
            headers: {
                "Accept": "application/json"
            }
        })
        console.log("... loading extra infos", result.data)
    }
})

</script>