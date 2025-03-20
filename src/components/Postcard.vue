<template>
  <div
    class="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-[1200px]">
    
    <!-- Left Section -->
    <div class="p-8 flex flex-col justify-between w-full md:w-2/3">
      <div>
        <!-- Title and Event Details -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <h2 class="text-2xl font-bold text-gray-900">Exciting Event</h2>

          <!-- Event Details -->
          <div class="flex items-center text-sm text-gray-500 space-x-4">
            <span class="flex items-center space-x-1">
              📅 <span class="font-medium">March 25, 2025</span>
            </span>
            <span class="flex items-center space-x-1">
              📍 <span class="font-medium">New York, NY</span>
            </span>
          </div>
        </div>

        <p class="text-gray-600 mt-3">
          Join us for an unforgettable experience filled with fun and adventure. Join us for an unforgettable experience filled with fun and adventure. Join us for an unforgettable experience filled with fun and adventure. Join us for an unforgettable experience filled with fun and adventure. Join us for an unforgettable experience filled with fun and adventure. Join us for an unforgettable experience filled with fun and adventure. Join us for an unforgettable experience filled with fun and adventure.
        </p>
      </div>

      <!-- Buttons & Avatars -->
      <div class="mt-6 flex items-center justify-between">
        <div class="flex space-x-2">
          <button class="btn btn-neutral px-3 rounded-lg">
            Read More
          </button>
          <button class="btn btn-outline px-3 rounded-lg">
            Sign Up
          </button>
        </div>

        <!-- Avatars -->
        <div class="flex -space-x-3">
          <img 
            v-for="(user, index) in users" 
            :key="index" 
            :src="user.img" 
            :alt="`User ${index + 1}`" 
            class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-white"
          />
          <div
            class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center bg-gray-700 text-white text-sm font-semibold rounded-full border-2 border-white">
            +99
          </div>
        </div>
      </div>
    </div>

    <!-- Right Section (Image with Tags) -->
    <div class="w-full md:w-1/3 relative">
      <img
        src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?cs=srgb&dl=pexels-joshsorenson-976866.jpg&fm=jpg"
        alt="Event"
        class="object-cover h-full w-full brightness-90" />
      
      <!-- Tags -->
      <div class="absolute top-4 left-4 md:bottom-4 md:top-auto flex space-x-3">
        <span class="bg-black/60 text-white text-sm px-4 py-1 rounded-full shadow-md">#Adventure</span>
        <span class="bg-black/60 text-white text-sm px-4 py-1 rounded-full shadow-md">#Fun</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const users = [
  { img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { img: "https://randomuser.me/api/portraits/men/50.jpg" }
];
</script>
