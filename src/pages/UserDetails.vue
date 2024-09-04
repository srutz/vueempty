<script setup lang="ts">

import {UserType,users} from "../UsersData.ts";
import {useRoute} from "vue-router";

const route = useRoute()
const userid = route.params.id || -1
const user: UserType = users.find((user) => user.id == userid)

</script>

<template>
  <div class="flex flex-col gap-2 items-center justify-center grow ">
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
  </div>
</template>

