<template>
  <div class="flex items-center gap-4 mt-2 text-sm text-gray-500">
    <div class="flex items-center gap-1">
      <CalendarIcon class="w-4 h-4" />
      {{ date }}
    </div>
    <div class="flex items-center gap-1">
      <LocationIcon class="w-4 h-4" />
      {{ location }}
    </div>
  </div>
</template>

<script setup>
import CalendarIcon from '@/components/icons/CalendarIcon.vue';
import LocationIcon from '@/components/icons/LocationIcon.vue';
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