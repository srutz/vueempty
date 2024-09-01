<script setup lang="ts">

import { reactive } from "vue"

const formdata = reactive({
    firstname: "",
    lastname: "",
    email: "",
})

</script>

<template>
    <form class="flex flex-col gap-2 border-solid p-4 border-2 border-red-200">
        <div class="flex gap-2">
            <label class="w-32" for="firstname">Firstname</label><input id="firstname" type="text" v-model="formdata.firstname" />
        </div>
        <div class="flex gap-2">
            <label class="w-32" for="lastname">Lastname</label><input id="lastname" type="text" v-model="formdata.lastname" />
        </div>
        <div class="flex gap-2">
            <label class="w-32" for="email">Email</label><input id="email" type="email" v-model="formdata.email" />
        </div>
        <div>Welcome {{ formdata.firstname }} {{  formdata.lastname }}</div>
    </form>
    
</template>