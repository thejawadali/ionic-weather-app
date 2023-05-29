<template>
  <ion-card>
    <div class="weather-card-content">

      <ion-card-header>
        <ion-card-subtitle>Sun, 23 April, 11:33</ion-card-subtitle>
        <ion-card-title>32°<sup>c</sup></ion-card-title>
      </ion-card-header>

      <ion-card-content>
        <span>Clear</span>
        <br>
        <span>feels like 34°</span>
      </ion-card-content>
    </div>
    <div class="weather-img-icon">
      <img
        src="https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGhlJTIwc3VuJTIwaWNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        alt="">
    </div>
  </ion-card>
</template>

<script lang="ts" setup>
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue'
import { defineComponent } from 'vue'
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