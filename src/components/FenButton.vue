<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'button' | 'submit' | 'reset'
    kind?: 'default' | 'danger'
  }>(),
  {
    type: 'submit',
    kind: 'default'
  }
)
</script>

<template>
  <button
    :type="type"
    class="px-6 py-2 font-medium tracking-wide text-black dark:text-white transition-colors duration-300 transform rounded focus:outline-none focus:ring focus:ring-opacity-80"
    :class="{
      'bg-[var(--color12)] dark:bg-[var(--color4)] hover:brightness-110 focus:ring-[var(--color12)] dark:focus:ring-[var(--color4)]':
        kind === 'default',
      'bg-[var(--color9)] dark:bg-[var(--color1)] hover:brightness-110 focus:ring-[var(--color9)] dark:focus:ring-[var(--color1)] shadow-[inset_0_2px_6px_rgba(0,0,0,0.5)]':
        kind === 'danger'
    }"
  >
    <slot />
  </button>
</template>
