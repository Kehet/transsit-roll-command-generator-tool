<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { ominaisuudet, kyvyt } from '@/layout'
import type { Settings } from '@/stores/settings'
import { useSettingsStore } from '@/stores/settings'

const props = defineProps<{
  open: boolean
  selected: Array<keyof Settings>
  search: number | null
}>()

const emit = defineEmits<{
  close: []
  toggle: [name: keyof Settings]
  setSearch: [value: number | null]
  reset: []
}>()

const settingsStore = useSettingsStore()
const query = ref('')
const activeIndex = ref(0)
const searchInput = ref<HTMLInputElement>()
const listRef = ref<HTMLUListElement>()
const mode = ref<'features' | 'search'>('features')

type FeatureItem = {
  kind: 'feature'
  name: keyof Settings
  label: string
  category: string
  value: number
  isSelected: boolean
}
type SearchItem = { kind: 'search' }
type ResetItem = { kind: 'reset' }
type ListItem = FeatureItem | SearchItem | ResetItem

const allFeatures = computed<FeatureItem[]>(() => {
  const result: FeatureItem[] = []
  for (const cat of [...ominaisuudet, ...kyvyt]) {
    for (const f of cat.features) {
      result.push({
        kind: 'feature',
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

const listItems = computed<ListItem[]>(() => {
  const q = query.value.toLowerCase()
  const features = q
    ? allFeatures.value.filter((f) => f.label.toLowerCase().includes(q))
    : allFeatures.value

  const showSearchItem = !q || 'haetaan'.includes(q) || 'haku'.includes(q)
  const showResetItem = !q || 'tyhjennä'.includes(q) || 'valinta'.includes(q) || 'tyhjenna'.includes(q)
  const specials: ListItem[] = []
  if (showSearchItem) specials.push({ kind: 'search' })
  if (showResetItem) specials.push({ kind: 'reset' })
  return [...features, ...specials]
})

watch(
  () => props.open,
  (val) => {
    if (val) {
      query.value = ''
      activeIndex.value = 0
      mode.value = 'features'
      nextTick(() => searchInput.value?.focus())
    }
  }
)

watch(query, () => {
  activeIndex.value = 0
})

watch(activeIndex, (i) => {
  nextTick(() => {
    listRef.value?.children[i]?.scrollIntoView({ block: 'nearest' })
  })
})

const enterSearchMode = () => {
  mode.value = 'search'
  query.value = ''
  nextTick(() => searchInput.value?.focus())
}

const confirmSearch = () => {
  const raw = query.value.trim()
  if (raw === '') {
    emit('setSearch', null)
  } else {
    const n = parseInt(raw, 10)
    if (!isNaN(n) && n >= 0 && n <= 10) {
      emit('setSearch', n)
    }
  }
}

const exitSearchMode = () => {
  mode.value = 'features'
  query.value = ''
  activeIndex.value = 0
  nextTick(() => searchInput.value?.focus())
}

const handleKeydown = (e: KeyboardEvent) => {
  if (mode.value === 'search') {
    if (e.key === 'Enter') {
      e.preventDefault()
      confirmSearch()
    } else if (e.key === 'Escape' || (e.key === 'Backspace' && query.value === '')) {
      e.preventDefault()
      exitSearchMode()
    }
    return
  }

  if (e.key === 'ArrowDown') {
    e.preventDefault()
    activeIndex.value = Math.min(activeIndex.value + 1, listItems.value.length - 1)
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    activeIndex.value = Math.max(activeIndex.value - 1, 0)
  } else if (e.key === 'Enter') {
    e.preventDefault()
    const item = listItems.value[activeIndex.value]
    if (!item) return
    if (item.kind === 'feature') { emit('toggle', item.name); query.value = '' }
    else if (item.kind === 'search') enterSearchMode()
    else { emit('reset'); emit('close') }
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
            :placeholder="mode === 'search' ? 'Hakuarvo 0–10 tai tyhjä = ilman hakua' : 'Hae ominaisuutta tai kykyä...'"
            class="w-full px-3 py-2 rounded bg-white dark:bg-gray-900 text-black dark:text-white placeholder-gray-400 focus:outline-none"
            @keydown="handleKeydown"
          />
        </div>

        <!-- Features list -->
        <ul v-if="mode === 'features'" ref="listRef" class="max-h-80 overflow-y-auto">
          <li
            v-if="listItems.length === 0"
            class="px-4 py-3 text-gray-500 dark:text-gray-400 text-center"
          >
            Ei tuloksia
          </li>
          <template v-for="(item, index) in listItems" :key="item.kind === 'feature' ? item.name : '__search__'">
            <!-- Feature item -->
            <li
              v-if="item.kind === 'feature'"
              @click="emit('toggle', item.name); query = ''"
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
                <span class="text-xs text-gray-500 dark:text-gray-400 shrink-0">{{ item.category }}</span>
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

            <!-- Search item -->
            <li
              v-else-if="item.kind === 'search'"
              @click="enterSearchMode"
              @mouseenter="activeIndex = index"
              class="flex items-center gap-2 px-4 py-2.5 cursor-pointer transition-colors duration-100"
              :class="{
                'bg-[var(--color12)] dark:bg-[var(--color4)] text-black dark:text-white': index === activeIndex
              }"
            >
              <span class="font-medium">Mitä haetaan</span>
              <span v-if="props.search !== null" class="text-xs">(nyt: {{ props.search }})</span>
              <span v-else class="text-xs">(nyt: ilman hakua)</span>
            </li>

            <!-- Reset item -->
            <li
              v-else
              @click="emit('reset'); emit('close')"
              @mouseenter="activeIndex = index"
              class="flex items-center gap-2 px-4 py-2.5 cursor-pointer transition-colors duration-100"
              :class="{
                'bg-[var(--color12)] dark:bg-[var(--color4)] text-black dark:text-white': index === activeIndex
              }"
            >
              <span class="font-medium">Tyhjennä valinta</span>
            </li>
          </template>
        </ul>

        <!-- Search mode -->
        <div v-else class="px-4 py-4 text-sm text-gray-500 dark:text-gray-400">
          Syötä numero 0–10 tai jätä tyhjäksi (= ilman hakua) ja paina Enter.
          <br />
          Backspace tyhjällä palaa takaisin.
        </div>

        <div
          class="px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-400 dark:text-gray-500 flex gap-4"
        >
          <template v-if="mode === 'features'">
            <span>↑↓ navigoi</span>
            <span>↵ valitse</span>
            <span>Esc sulkee</span>
          </template>
          <template v-else>
            <span>↵ vahvista</span>
            <span>Esc / ← palaa</span>
          </template>
        </div>
      </div>
    </div>
  </Teleport>
</template>
