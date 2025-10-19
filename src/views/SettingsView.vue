<script setup lang="ts">
import { ref } from 'vue'
import FenLabel from '@/components/FenLabel.vue'
import FenInput from '@/components/FenInput.vue'
import { useSettingsStore } from '@/stores/settings'
import { kyvyt, ominaisuudet } from '@/layout'
import FenButton from '@/components/FenButton.vue'

const settingsStore = useSettingsStore()

const clearSettings = () => {
  Object.keys(settingsStore.settings).forEach(key => {
    settingsStore.settings[key] = 0
  })

  window.alert('Settings have been cleared successfully.')
}

const exportSettings = () => {
  const settingsJson = JSON.stringify(settingsStore.settings, null, 2)
  const blob = new Blob([settingsJson], { type: 'application/json' })
  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = 'settings.json'
  a.click()
  URL.revokeObjectURL(url)
}

const importSettings = (event: Event) => {
  const fileInput = event.target as HTMLInputElement
  const file = (event.target as HTMLInputElement).files?.[0]

  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result as string
      try {
        settingsStore.settings = JSON.parse(result)
        fileInput.value = ''
        window.alert('Settings imported successfully')
      } catch (error) {
        window.alert('Invalid settings file: ' + error)
      }
    }
    reader.readAsText(file)
  }
}

const fileInputRef = ref<HTMLInputElement | null>(null)
</script>

<template>
  <main>
    <div
      class="mt-6 p-6 rounded border-2 border-gray-200 bg-gray-50 text-gray-400 dark:border-gray-700 dark:bg-gray-800">
      <div class="my-6 text-center flex flex-col items-center">
        <div class="flex  gap-x-3">
          <fen-button @click="clearSettings" class="mb-4">Clear Settings</fen-button>
          <fen-button @click="exportSettings" class="mb-4">Export Settings</fen-button>
        </div>

        <input type="file" @change="importSettings" ref="fileInputRef" />
      </div>
    </div>

    <div
      class="mt-6 p-6 rounded border-2 border-gray-200 bg-gray-50 text-gray-400 dark:border-gray-700 dark:bg-gray-800">
      <h1 class="text-3xl text-center mb-2">Ominaisuudet</h1>

      <div class="grid grid-cols-3 gap-x-6 mb-6">

        <div v-for="column in ominaisuudet" :key="column.name">
          <h2 class="text-2xl mb-2">{{ column.label }}</h2>

          <div class="flex" v-for="feature in column.features" :key="`${column.name}-${feature.name}`">
            <FenLabel class="flex-grow" :for="feature.name">{{ feature.label }}</FenLabel>
            <div class="w-24">
              <FenInput type="number" min="0" max="5" step="1" :id="feature.name"
                        v-model="settingsStore.settings[feature.name]" />
            </div>
          </div>

        </div>
      </div>

      <h1 class="text-3xl text-center mb-2">Kyvyt</h1>

      <div class="grid grid-cols-3 gap-x-6 mb-6">
        <div v-for="column in kyvyt" :key="column.name">
          <h2 class="text-2xl mb-2">{{ column.label }}</h2>

          <div class="flex" v-for="feature in column.features" :key="`${column.name}-${feature.name}`">
            <FenLabel class="flex-grow" :for="feature.name">{{ feature.label }}</FenLabel>
            <div class="w-24">
              <FenInput type="number" min="0" max="5" step="1" :id="feature.name"
                        v-model="settingsStore.settings[feature.name]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
