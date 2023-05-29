import { defineStore } from "pinia"
import { Geolocation } from '@capacitor/geolocation'
import type { SingleWeather } from "../types"


export const useWeatherStore = defineStore('weatherStore', {
  state: () => {
    return {
      weather: null as SingleWeather | null,
      address: null as any
    }
  },
  actions: {
    async getWeather() {
      const weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,hourly&appid=04da414178ed3d4dccd95cca12d05f1d'
      const { coords } = await Geolocation.getCurrentPosition()
      this.getCityName(coords.latitude, coords.longitude)
      const response = await fetch(`${weatherUrl}&lat=${coords.latitude}&lon=${coords.longitude}&units=metric`)
      this.weather = await response.json()
    },
    async getCityName(lat: number, lng: number) {
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10`

      try {
        const response = await fetch(url)
        const { address } = await response.json()

        if (address) {
          this.address = address
          return
        }

        throw new Error('Unable to get city name from coordinates.')
      } catch (error) {
        console.error(error)
        throw error
      }
    },
    getWeatherImageUrl(iconName: string | undefined, size: '2x' | '4x') {
      return `http://openweathermap.org/img/wn/${iconName}@${size ? size : '1x'}.png`
    },
    formatTemperature(value: number | undefined, format: 'F' | 'C') {
      return value ? `${Math.round(value)}° ${format}` : null
    }
  }
})
