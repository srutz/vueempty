<script setup lang="ts">
import { ref } from "vue";
import Box from "./Box.vue" 
import { useWindowSize } from "./useWindowSize";
import { useInterval } from "./useInterval";

const size = useWindowSize()
const time = ref(new Date().toLocaleString())
useInterval(() => {
    time.value = new Date().toLocaleString()
}, 1_000)

</script>

<template>
    <div class="grow bg-gray-300">
        <div>{{ time }}</div>
        <Box title="abcdef" expanded >
            {{ size.height < 300 ? "Zu wenig Höhe!" : ""}}
            Lorem ipsum ...dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </Box>
    </div>
</template>

