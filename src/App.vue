<template>
  <WeatherCard></WeatherCard>
  <ion-list>
    <ion-list-header>
      <ion-label>
        <h1>Forecast</h1>
      </ion-label>
    </ion-list-header>
    <ForcastItem v-for="i in 3" :key="i" />
  </ion-list>
</template>

<script setup lang="ts">
import WeatherCard from "./components/WeatherCard.vue"
import ForcastItem from "./components/ForcastItem.vue"
import { IonList } from '@ionic/vue'
import { useWeatherStore } from "./store/weather"
import { onMounted } from "vue"

const weatherStore = useWeatherStore()

onMounted(async () => {
  await weatherStore.getWeather()
})
</script>

<style scoped>
ion-list {
  max-width: 350px;
}
</style>