<script setup lang="ts">

import {useRouter} from "vue-router";
import {users} from "../UsersData.ts";

const router = useRouter()

const showAbout = () => {
  router.push('/about')
}

</script>/
<template>
  <div class="flex flex-col gap-2 items-center justify-center grow ">
    USERS PAGE
    <div v-for="user in users" :key="user.email">
      <RouterLink :to="'/users/' + user.id">
        {{user.email}}
      </RouterLink>
    </div>
  </div>
</template>
