<script setup lang="ts">

import {UserType,users} from "../UsersData.ts";
import {useRoute} from "vue-router";
import { ref, watchEffect} from "vue";
import BorderBox from "../BorderBox.vue";

const route = useRoute()
const user = ref<UserType>();

// we drive along with the route.params which is reactive
watchEffect(() => {
  const userid = route.params.id || -1
  user.value = users.find((user) => user.id == userid)
})

</script>

<template>
  <BorderBox>
    <div v-if="!user">
      Unbekannter Benutzer
    </div>
    <table v-else>
      <thead>
        <th>Eigenschaft</th>
        <th>Wert</th>
      </thead>
      <tbody>
        <tr>
          <td>Admin?</td>
          <td>{{user.admin}}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{{user.email}}</td>
        </tr>
        <tr>
          <td>Vorname</td>
          <td>{{user.firstname}}</td>
        </tr>
        <tr>
          <td>Nachname</td>
          <td>{{user.lastname}}</td>
        </tr>
      </tbody>
    </table>
  </BorderBox>
</template>

