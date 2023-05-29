<template>
  <ion-card>
    <div class="weather-card-content">
      <ion-card-header>
        <ion-card-title>{{ weatherStore.formatTemperature(weatherStore.weather?.current.temp, 'C') }}</ion-card-title>
        <ion-card-subtitle>{{ new Date().toLocaleString('en-us', options) }}</ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        <span
          style="text-transform: capitalize; font-size: 14px;">{{ weatherStore.weather?.current.weather[0].description }}</span>
        <br>
        <span style="text-transform: capitalize; font-size: 14px;">Feels like
          {{ parseInt(String(weatherStore.weather?.current.feels_like)) }} &deg; C</span>

      </ion-card-content>
    </div>
    <div class="weather-img-icon">
      <img :src="weatherStore.getWeatherImageUrl(weatherStore.weather?.current?.weather[0].icon, '4x')" />
    </div>
  </ion-card>
</template>

<script lang="ts" setup>
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue'
import { useWeatherStore } from "../store/weather"

const weatherStore = useWeatherStore()

const options: any = { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' };


</script>

<style scoped>
ion-card {
  max-width: 350px;
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.weather-card-content {
  width: 100%;

}

.weather-img-icon {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

ion-card-title {
  font-size: 35px;
}


ion-card-content {
  color: #000;
}
</style>