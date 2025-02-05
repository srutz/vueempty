<script setup lang="ts">

import {useRouter} from "vue-router";
import {users} from "../UsersData.ts";
import BorderBox from "../BorderBox.vue";

const router = useRouter()

const showAbout = () => {
  router.push('/about')
}

</script>/
<template>
  <div class="flex flex-col gap-2 items-center justify-center grow mt-8">
    USERS PAGE
    <div class="flex flex-row gap-4">
      <BorderBox>
        <div class="flex flex-col gap-2">
          <div v-for="user in users" :key="user.email">
            <RouterLink :to="'/users/' + user.id + '/details'">
              {{user.email}}
            </RouterLink>
          </div>
        </div>
      </BorderBox>
      <RouterView></RouterView>
    </div>
    <div class="grow"></div>
  </div>
</template>
