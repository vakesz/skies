<template>
  <div 
    v-if="show" 
    class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
    @click.self="$emit('close')"
  >
    <div class="bg-white rounded-lg p-6 max-w-md w-full">
      <h3 class="text-xl font-bold mb-4">Sign Up for Event</h3>
      
      <div class="space-y-4">
        <div class="space-y-2">
          <p class="text-gray-600 flex items-center gap-2">
            <CalendarIcon class="w-4 h-4" />{{ date }}
          </p>
          <p class="text-gray-600 flex items-center gap-2">
            <ClockIcon class="w-4 h-4" />{{ time }}
          </p>
          <p class="text-gray-600 flex items-center gap-2">
            <LocationIcon class="w-4 h-4" />{{ location }}
          </p>
        </div>

        <div class="flex items-center gap-2">
          <img 
            v-for="user in users" 
            :key="user.img"
            :src="user.img" 
            class="w-8 h-8 rounded-full" 
            alt="Attendee"
          />
          <span class="text-sm text-gray-500">and others are going</span>
        </div>
      </div>

      <div class="mt-6 flex justify-end gap-3">
        <button 
          @click="$emit('close')"
          class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg inline-flex items-center gap-2"
        >
          <XMarkIcon class="w-4 h-4" />
          Cancel
        </button>
        <button 
          @click="$emit('confirm')"
          class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 inline-flex items-center gap-2"
        >
          <CheckIcon class="w-4 h-4" />
          Confirm
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import XMarkIcon from '@/components/icons/XMarkIcon.vue';
import CheckIcon from '@/components/icons/CheckIcon.vue';
import CalendarIcon from '@/components/icons/CalendarIcon.vue';
import ClockIcon from '@/components/icons/ClockIcon.vue';
import LocationIcon from '@/components/icons/LocationIcon.vue';

defineProps({
  show: Boolean,
  date: String,
  time: {
    type: String,
    default: () => '12:00 PM'
  },
  location: String,
  users: {
    type: Array,
    default: () => []
  }
});

defineEmits(['close', 'confirm']);
</script>