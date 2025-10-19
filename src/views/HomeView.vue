<script setup lang="ts">
import { kyvyt, ominaisuudet } from '@/layout'
import type { Settings } from '@/stores/settings'
import { useSettingsStore } from '@/stores/settings'
import FenButton from '@/components/FenButton.vue'
import { ref } from 'vue'

const settingsStore = useSettingsStore()

const selected = ref<Array<keyof Settings>>([])
const search = ref<number | null>(null)

const title = ref<string>('/roll 0d10')
const titleRef = ref<HTMLInputElement>()

// Simple toast state
const showToast = ref<boolean>(false)
const toastMessage = ref<string>('')
let toastTimeout: number | undefined

const triggerToast = (message: string) => {
  toastMessage.value = message
  showToast.value = true
  if (toastTimeout) {
    window.clearTimeout(toastTimeout)
  }
  toastTimeout = window.setTimeout(() => {
    showToast.value = false
  }, 2000)
}

const makeTitle = () => {
  const usableDices = selected.value.reduce((carry, name) => {
    return carry + settingsStore.settings[name]
  }, 0)

  let searchValue = ''
  if (search.value !== null) {
    searchValue = `>${search.value}`
  }

  return `/roll ${usableDices}d10${searchValue}`
}

const clickButton = (name: keyof Settings) => {
  let index = selected.value.indexOf(name)

  if (index > -1) {
    selected.value.splice(index, 1)
  } else {
    selected.value.push(name)
  }

  title.value = makeTitle()
}

const reset = () => {
  selected.value = []
  search.value = null
  title.value = '/roll 0d10'
}

const copyTitle = (selectedSearch: number | null) => {
  search.value = selectedSearch
  title.value = makeTitle()

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(title.value)
      .then(() => {
        triggerToast('Copied to clipboard')
      })
      .catch(() => {
        alert('Failed to copy to clipboard.')
      })
  } else {
    alert('Copy to clipboard is not supported in this browser.')
  }
}
</script>

<template>
  <div
    class="mt-6 p-6 rounded border-2 border-gray-200 bg-gray-50 text-gray-400 dark:border-gray-700 dark:bg-gray-800"
  >
    <div class="flex flex-col gap-y-3 justify-items-stretch mb-6">
      <input
        type="text"
        class="text-5xl text-center mb-3 bg-gray-50 text-gray-400 dark:border-gray-700 dark:bg-gray-800"
        :value="title"
        ref="titleRef"
      />

      <h2 class="text-2xl mb-2">Search</h2>

      <div class="flex gap-x-6">
        <FenButton
          v-for="search in [...Array(11).keys()]"
          :key="search"
          @click="copyTitle(search)"
          class="w-full"
        >
          {{ search }}
        </FenButton>
      </div>

      <div class="flex gap-x-6">
        <FenButton @click="copyTitle(null)" class="w-full">No search</FenButton>
        <FenButton @click="reset" class="w-full">Clear Selection</FenButton>
      </div>
    </div>
  </div>

  <div
    class="mt-6 p-6 rounded border-2 border-gray-200 bg-gray-50 text-gray-400 dark:border-gray-700 dark:bg-gray-800"
  >
    <h1 class="text-3xl text-center mb-2">Ominaisuudet</h1>

    <div class="grid grid-cols-3 gap-x-6 mb-6">
      <div v-for="column in ominaisuudet" :key="column.name">
        <h2 class="text-2xl mb-2">{{ column.label }}</h2>

        <div class="flex flex-col gap-3">
          <FenButton
            v-for="feature in column.features"
            :key="`${column.name}-${feature.name}`"
            @click.prevent="clickButton(feature.name)"
            :kind="selected.indexOf(feature.name) > -1 ? 'danger' : 'default'"
          >
            {{ feature.label }}: {{ settingsStore.settings[feature.name] }}
          </FenButton>
        </div>
      </div>
    </div>
  </div>

  <div
    class="mt-6 p-6 rounded border-2 border-gray-200 bg-gray-50 text-gray-400 dark:border-gray-700 dark:bg-gray-800"
  >
    <h1 class="text-3xl text-center mb-2">Kyvyt</h1>

    <div class="grid grid-cols-3 gap-x-6 mb-6">
      <div v-for="column in kyvyt" :key="column.name">
        <h2 class="text-2xl mb-2">{{ column.label }}</h2>

        <div class="flex flex-col gap-3">
          <FenButton
            v-for="feature in column.features"
            :key="`${column.name}-${feature.name}`"
            @click.prevent="clickButton(feature.name)"
            :kind="selected.indexOf(feature.name) > -1 ? 'danger' : 'default'"
          >
            {{ feature.label }}: {{ settingsStore.settings[feature.name] }}
          </FenButton>
        </div>
      </div>
    </div>

    <!-- Simple toast -->
    <div
      v-show="showToast"
      role="status"
      aria-live="polite"
      class="fixed top-6 left-1/2 -translate-x-1/2 transform px-4 py-2 rounded bg-gray-900 text-white dark:bg-gray-700 shadow-lg"
    >
      {{ toastMessage }}
    </div>
  </div>
</template>
