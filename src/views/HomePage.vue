<template>
  <ion-page>

    <ion-content :fullscreen="true">

      <p>{{ weatherStore.weather }}</p>
      <p>{{ weatherStore.address }}</p>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
import { useWeatherStore } from "../store/weather"
import { onMounted } from "vue"

const weatherStore = useWeatherStore()

onMounted(async () => {
  await weatherStore.getWeather()
})
</script>
