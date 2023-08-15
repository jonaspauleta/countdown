<script setup>
import VueCountdown from '@chenfengyuan/vue-countdown'
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const time = ref(new Date())

async function getDates() {
  const { data } = await supabase.from('dates').select('date')
  time.value = (new Date(data[0].date)) - (new Date())
}

onMounted(() => {
  getDates()
})
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