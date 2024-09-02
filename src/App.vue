<script setup lang="ts">

import {onMounted, ref } from "vue";
import TogglePanel from "./TogglePanel.vue"

</script>

<template>
  <div>
    <TogglePanel caption="Viele Lorems">
      <p>Lorem ipsum lorem Lorem ipsum lorem</p>
      <p>Lorem ipsum lorem Lorem ipsum lorem</p>
      <p>Lorem ipsum lorem Lorem ipsum lorem</p>
      <p>Lorem ipsum lorem Lorem ipsum lorem</p>
      <p>Lorem ipsum lorem Lorem ipsum lorem</p>
    </TogglePanel>
    <TogglePanel caption="Wiesbadentruth">
      <p>Wiesbaden ist 100% Hessen</p>
    </TogglePanel>
  </div>
</template>

