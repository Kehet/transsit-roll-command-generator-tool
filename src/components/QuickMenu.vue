<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { ominaisuudet, kyvyt } from '@/layout'
import type { Settings } from '@/stores/settings'
import { useSettingsStore } from '@/stores/settings'

const props = defineProps<{
  open: boolean
  selected: Array<keyof Settings>
}>()

const emit = defineEmits<{
  close: []
  toggle: [name: keyof Settings]
}>()

const settingsStore = useSettingsStore()
const query = ref('')
const activeIndex = ref(0)
const searchInput = ref<HTMLInputElement>()

type MenuItem = {
  name: keyof Settings
  label: string
  category: string
  value: number
  isSelected: boolean
}

const allFeatures = computed<MenuItem[]>(() => {
  const result: MenuItem[] = []
  for (const cat of [...ominaisuudet, ...kyvyt]) {
    for (const f of cat.features) {
      result.push({
        name: f.name,
        label: f.label,
        category: cat.label,
        value: settingsStore.settings[f.name],
        isSelected: props.selected.includes(f.name)
      })
    }
  }
  return result
})

const filteredFeatures = computed(() => {
  if (!query.value) return allFeatures.value
  const q = query.value.toLowerCase()
  return allFeatures.value.filter((f) => f.label.toLowerCase().includes(q))
})

watch(
  () => props.open,
  (val) => {
    if (val) {
      query.value = ''
      activeIndex.value = 0
      nextTick(() => searchInput.value?.focus())
    }
  }
)

watch(query, () => {
  activeIndex.value = 0
})

const select = (name: keyof Settings) => {
  emit('toggle', name)
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    activeIndex.value = Math.min(activeIndex.value + 1, filteredFeatures.value.length - 1)
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    activeIndex.value = Math.max(activeIndex.value - 1, 0)
  } else if (e.key === 'Enter') {
    e.preventDefault()
    const item = filteredFeatures.value[activeIndex.value]
    if (item) select(item.name)
  } else if (e.key === 'Escape') {
    emit('close')
  }
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4"
      role="dialog"
      aria-modal="true"
    >
      <!-- Backdrop -->
      <div class="fixed inset-0 bg-black/50" aria-hidden="true" @click="$emit('close')" />

      <!-- Panel -->
      <div
        class="relative z-10 w-full max-w-md rounded-lg shadow-xl bg-gray-50 dark:bg-gray-800 overflow-hidden"
      >
        <div class="p-3 border-b border-gray-200 dark:border-gray-700">
          <input
            ref="searchInput"
            v-model="query"
            type="text"
            placeholder="Hae ominaisuutta tai kykyä..."
            class="w-full px-3 py-2 rounded bg-white dark:bg-gray-900 text-black dark:text-white placeholder-gray-400 focus:outline-none"
            @keydown="handleKeydown"
          />
        </div>

        <ul class="max-h-80 overflow-y-auto">
          <li
            v-if="filteredFeatures.length === 0"
            class="px-4 py-3 text-gray-500 dark:text-gray-400 text-center"
          >
            Ei tuloksia
          </li>
          <li
            v-for="(item, index) in filteredFeatures"
            :key="item.name"
            @click="select(item.name)"
            @mouseenter="activeIndex = index"
            class="flex items-center justify-between px-4 py-2.5 cursor-pointer transition-colors duration-100"
            :class="{
              'bg-[var(--color9)] dark:bg-[var(--color1)] text-black dark:text-white':
                item.isSelected && index !== activeIndex,
              'bg-[var(--color12)] dark:bg-[var(--color4)] text-black dark:text-white':
                index === activeIndex
            }"
          >
            <span class="flex items-center gap-2 min-w-0">
              <span class="font-medium truncate">{{ item.label }}</span>
              <span class="text-xs text-gray-500 dark:text-gray-400 shrink-0">{{
                item.category
              }}</span>
            </span>

            <span class="flex gap-1 shrink-0 ml-2">
              <span
                v-for="n in 5"
                :key="n"
                class="inline-block w-2 h-2 rounded-full"
                :class="n <= item.value ? 'bg-[var(--color11)]' : 'bg-gray-400 dark:bg-gray-600'"
              />
            </span>
          </li>
        </ul>

        <div
          class="px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-400 dark:text-gray-500 flex gap-4"
        >
          <span>↑↓ navigoi</span>
          <span>↵ valitse</span>
          <span>Esc sulkee</span>
        </div>
      </div>
    </div>
  </Teleport>
</template>
