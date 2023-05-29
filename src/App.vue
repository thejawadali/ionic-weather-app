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