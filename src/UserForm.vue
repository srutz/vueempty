<script setup lang="ts">

import FormRow from "./FormRow.vue"
import { reactive } from "vue"

const formdata = reactive({
    firstname: "",
    lastname: "",
    email: "",
})

</script>

<template>
    <form class="flex flex-col font-sans gap-2 m-2 p-4 border border-gray-300 shadow-xl rounded-lg">
        <FormRow label="Vorname" labelfor="firstname"><input id="firstname" type="text" v-model="formdata.firstname" /></FormRow>
        <FormRow label="Nachname" labelfor="lastname"><input id="lastname" type="text" v-model="formdata.lastname" /></FormRow>
        <FormRow bold label="Email" labelfor="email"><input id="email" type="email" v-model="formdata.email" /></FormRow>
        <div>Welcome {{ formdata.firstname }} {{  formdata.lastname }}</div>
    </form>
    
</template>