<script setup lang="ts">
defineProps({
  value: String,
});
</script>

<template>
  <label class="block text-gray-500 dark:text-gray-300">
    <span v-if="value">{{ value }}</span>
    <span v-else><slot /></span>
  </label>
</template>
