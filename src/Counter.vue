<script lang="ts">
import {defineComponent,watch} from 'vue'
import WindowSizeMixin from "./WindowSizeMixin.ts";

export default defineComponent({
  mounted() {
    console.log("Counter mounted " + this.counter)
  },
  mixins: [ WindowSizeMixin ],
  methods: {
    onclick() {
      this.counter++
    }
  },
  data() {
    return {
      counter: 1,
    }
  }
})
</script>

<template>
  <button @click="onclick">
    Count is {{counter}} {{windowWidth}} x {{windowHeight}}</button>
</template>

