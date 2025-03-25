<template>
  <div class="flex items-center gap-4 mt-2 text-sm text-gray-500">
    <div class="flex items-center gap-1">
      <CalendarIcon class="w-4 h-4" />
      {{ date }}
    </div>
    <div class="flex items-center gap-1">
      <MapPinIcon class="w-4 h-4" />
      {{ location }}
    </div>
  </div>
</template>

<script setup>
import { CalendarIcon, MapPinIcon } from '@heroicons/vue/24/outline';

defineProps({
  date: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
});
</script>