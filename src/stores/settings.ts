import { onMounted, ref, watch } from 'vue'
import { defineStore } from 'pinia'

// Define the interface for the settings structure
export interface Settings {
  voimakkuus: number
  ketteryys: number
  kestavyys: number
  karismaattisuus: number
  manipulaatio: number
  havainnointi: number
  alykkyys: number
  viisaus: number
  empatia: number
  harhauttaminen: number
  katuviisaus: number
  suostuttelu: number
  tappeleminen: number
  uhkailu: number
  urheilullisuus: number
  valppaus: number
  vaistaminen: number
  ajaminen: number
  erataidot: number
  esiintyminen: number
  johtajuus: number
  kantamaaseet: number
  kadentaidot: number
  lahiaseet: number
  tiirikointi: number
  vaivihkaisuus: number
  arvoitukset: number
  historia: number
  laki: number
  luonto: number
  laaketiede: number
  perimatieto: number
  politiikka: number
  teknologia: number
  tutkinta: number
}

// Use the interface as a type hint for the settings variable
export const useSettingsStore = defineStore('settings', () => {
  const settings = ref<Settings>({
    voimakkuus: 0,
    ketteryys: 0,
    kestavyys: 0,
    karismaattisuus: 0,
    manipulaatio: 0,
    havainnointi: 0,
    alykkyys: 0,
    viisaus: 0,
    empatia: 0,
    harhauttaminen: 0,
    katuviisaus: 0,
    suostuttelu: 0,
    tappeleminen: 0,
    uhkailu: 0,
    urheilullisuus: 0,
    valppaus: 0,
    vaistaminen: 0,
    ajaminen: 0,
    erataidot: 0,
    esiintyminen: 0,
    johtajuus: 0,
    kantamaaseet: 0,
    kadentaidot: 0,
    lahiaseet: 0,
    tiirikointi: 0,
    vaivihkaisuus: 0,
    arvoitukset: 0,
    historia: 0,
    laki: 0,
    luonto: 0,
    laaketiede: 0,
    perimatieto: 0,
    politiikka: 0,
    teknologia: 0,
    tutkinta: 0
  })

  onMounted(() => {
    const savedSettings = localStorage.getItem('settings')
    if (savedSettings) {
      settings.value = JSON.parse(savedSettings)
    }
  })

  watch(
    settings,
    (newSettings) => {
      localStorage.setItem('settings', JSON.stringify(newSettings))
    },
    { deep: true }
  )

  return { settings }
})
