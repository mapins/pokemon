import { defineStore } from 'pinia'
import { ref, watch } from "vue";

export const useGlobalStore = defineStore('global', () => {
    const temperatureUnit = ref()

    function updateTemperatureUnit(newUnit) {
        temperatureUnit.value = newUnit
    }

    watch(temperatureUnit, (newValue, oldValue) => {
        console.log(`La unidad de temperatura cambió de ${oldValue} a ${newValue}`)
    })

    return { updateTemperatureUnit, temperatureUnit }

})