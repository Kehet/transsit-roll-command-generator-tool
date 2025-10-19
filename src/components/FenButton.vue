<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'submit'
  },
  kind: {
    type: String,
    default: 'default'
  }
})
</script>

<template>

  <button :type="type"
          class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-lg focus:outline-none focus:ring focus:ring-opacity-80"
          :class="{
            'bg-blue-600 hover:bg-blue-500 focus:ring-blue-300': kind === 'default',
            'bg-red-600 hover:bg-red-500 focus:ring-red-300': kind === 'danger',
          }">
    <slot />
  </button>

</template>
