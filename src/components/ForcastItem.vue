<template>
  <ion-item lines="none">
    <ion-avatar slot="start">
      <img :src="weatherStore.getWeatherImageUrl(weather.weather[0].icon, '2x')">
    </ion-avatar>
    <ion-label>
      <h2>{{ weatherStore.formatTemperature(weather.temp.day, 'C') }}</h2>
      <!-- <h2>{{ daily.weather[0].description }}</h2> -->
      <h3 style="color: #555;">{{ weather.weather[0].description }}</h3>
    </ion-label>
    <p style="color: #666;">
      {{ new Date(weather.dt * 1000).toLocaleDateString(undefined, { weekday: 'short', month: 'short', year: '2-digit', day: 'numeric' }) }}
    </p>
  </ion-item>
</template>

<script setup lang="ts">
import { IonItem, IonLabel } from '@ionic/vue'
import type { DailyWeather } from "../types"

import { useWeatherStore } from "../store/weather"

const weatherStore = useWeatherStore()

defineProps<{
  weather: DailyWeather
}>()

</script>
<style scoped></style>