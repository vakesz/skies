<template>
  <button @click="showModal = true"
    class="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 cursor-pointer">
    Sign Up
  </button>
  
  <teleport to="body">
    <div v-if="showModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      @click.self="showModal = false">
      <div class="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 class="text-xl font-bold mb-4">Sign Up for {{ eventName }}</h3>

        <div class="space-y-4">
          <div class="space-y-2">
            <p v-if="datetime" class="text-gray-600 flex items-center gap-2">
              <CalendarIcon class="w-4 h-4" />{{ new Date(datetime).toLocaleDateString('en-US', {
                year: 'numeric', month:
              'long', day: 'numeric'
              }) }}
            </p>
            <p v-if="datetime" class="text-gray-600 flex items-center gap-2">
              <ClockIcon class="w-4 h-4" />{{ new Date(datetime).toLocaleTimeString('en-US', {
              hour: 'numeric', minute:
              'numeric'
              }) }}
            </p>
            <p v-if="location" class="text-gray-600 flex items-center gap-2">
              <MapPinIcon class="w-4 h-4" />{{ location }}
            </p>
          </div>

          <div class="flex items-center gap-2" v-if="attendees && attendees.length">
            <img v-for="attendee in attendees" :src="attendee.profileImage"
              :title="attendee.firstName + ' ' + attendee.lastName" :alt="attendee.firstName + ' ' + attendee.lastName"
              class="w-8 h-8 rounded-full" />
            <span class="text-sm text-gray-500">and others are going</span>
          </div>
        </div>

        <div class="mt-6 flex justify-end gap-3">
          <button @click="showModal = false"
            class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg inline-flex items-center gap-2">
            <XMarkIcon class="w-4 h-4" />
            Cancel
          </button>
          <button @click="showModal = false"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 inline-flex items-center gap-2">
            <CheckIcon class="w-4 h-4" />
            Confirm
          </button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { ref } from 'vue';
import { XMarkIcon, CheckIcon, CalendarIcon, ClockIcon, MapPinIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
  eventName: String,
  datetime: String,
  location: String,
  attendees: Object
});

const showModal = ref(false);
</script>