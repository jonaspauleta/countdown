<script setup>
import VueCountdown from '@chenfengyuan/vue-countdown'

const targetDate = new Date('2023-08-19 10:00:00')
const time = targetDate - (new Date())
</script>

<template>
  <vue-countdown :time="time" v-slot="{ days, hours, minutes, seconds }">
    Time remaining to see my love ❤️：{{ days }} days, {{ hours }} hours, {{ minutes }} minutes, {{ seconds }} seconds.
  </vue-countdown>
</template>

<style scoped>
span {
  font-weight: bold;
  font-size: x-large;
}
</style>