<template>
  <div v-if="weatherStore.weather && weatherStore.address">
    <p style="width: 100%; text-align: center;">{{ weatherStore.address.city }}</p>
    <WeatherCard></WeatherCard>
    <ion-list>
      <ion-list-header>
        <ion-label>
          <h1>Forecast</h1>
        </ion-label>
      </ion-list-header>
      <div class="item-list">

        <ForcastItem v-for="(weather, i) in weatherStore.weather?.daily" :key="i" :weather="weather" />
      </div>
    </ion-list>
  </div>
  <div v-else
    style="width: 100%; height: 100vh; background-image: linear-gradient(135deg, rgba(179,136,23,1) 0%, rgba(148,150,1,1) 50%, rgba(97,152,3,1) 100%); display: flex; justify-content: center; align-items: center;">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud-snow" width="124" height="124"
      viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7" />
      <path d="M11 15v.01m0 3v.01m0 3v.01m4 -4v.01m0 3v.01" />
    </svg>
  </div>
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
.item-list {
  width: 100%;
  height: 410px;
  overflow: auto;
}
</style>