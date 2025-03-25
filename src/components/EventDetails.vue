<template>
   <div class="bg-white backdrop-blur-lg rounded-2xl overflow-hidden shadow-md hover:shadow-xl max-w-6xl w-full">
     <!-- Event Header -->
     <div class="relative">
       <img :src="eventImage" :alt="eventTitle" class="w-full h-64 object-cover" />
       <div class="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent flex items-center justify-center">
          <h2 class="text-2xl text-center font-semibold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,1)] p-4">
            {{ eventTitle }}
          </h2>
       </div>
     </div>
     <div class="p-6">
       <!-- Event Info -->
       <div class="prose prose-gray">
          <div style="white-space: pre-line;">{{ eventDescription }}</div>
       </div>
       <!-- Written By and Last Edited -->
       <div class="mt-4 text-gray-500 text-sm">
          <p><strong>Written by:</strong> {{ writtenBy }}</p>
          <p><strong>Last edited:</strong> {{ lastEdited }}</p>
       </div>
       <!-- Time and Location -->
       <div class="mt-4 space-y-1 text-gray-500 text-sm">
          <p class="flex items-center gap-2">
             <ClockIcon class="w-4 h-4" /> {{ eventTime }}
          </p>
          <p class="flex items-center gap-2">
             <CalendarIcon class="w-4 h-4" /> {{ eventDate }}
          </p>
          <p class="flex items-center gap-2">
             <MapPinIcon class="w-4 h-4" /> {{ eventPlace }}
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
   eventTime: { type: String, required: true },
   eventDate: { type: String, required: true },
   eventPlace: { type: String, required: true }
 });
 </script>