<template>
  <div class="bg-white backdrop-blur-lg rounded-2xl overflow-hidden shadow-md hover:shadow-xl max-w-6xl w-full">
    <!-- Event Header -->
    <div class="relative">
      <img :src="eventImage" :alt="eventTitle" class="w-full h-64 object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent flex items-center justify-center">
        <div class="text-center text-white drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
          <h2 class="text-2xl font-semibold">{{ eventTitle }}</h2>
          <h3 class="text-sm">
            Posted at: {{ formatDate(createdAt) }} by: {{ writtenBy }}
          </h3>
        </div>
      </div>
    </div>

    <div class="p-6">
      <!-- Event Info -->
      <div class="prose prose-gray mt-4" style="white-space: pre-line;">
        {{ eventDescription }}
      </div>

      <!-- Last Edited -->
      <div class="mt-4 text-gray-500 text-sm">
        <p><strong>Last edited:</strong> {{ formatDateTime(lastEdited) }}</p>
      </div>

      <!-- Time and Location -->
      <div class="mt-4 space-y-1 text-gray-500 text-sm">
        <p class="flex items-center gap-2">
          <CalendarIcon class="w-4 h-4" />
          {{ formatDate(eventDate) }}
          <ClockIcon class="w-4 h-4" />
          {{ formatTime(eventDate) }}
          <MapPinIcon class="w-4 h-4" />
          {{ eventPlace }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CalendarIcon, ClockIcon, MapPinIcon } from '@heroicons/vue/24/outline';

defineProps({
  eventTitle: { type: String, required: true },
  eventImage: { type: String, required: true },
  eventDescription: { type: String, required: true },
  writtenBy: { type: String, required: true },
  lastEdited: { type: String, required: true },
  eventDate: { type: Date, required: true },
  eventPlace: { type: String, required: true },
  createdAt: { type: Date, required: true }
});

const formatDate = (date) =>
  new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const formatDateTime = (date) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });

const formatTime = (date) =>
  new Date(date).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
</script>