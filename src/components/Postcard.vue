<template>
  <div class="bg-white/70 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col w-full max-w-[1200px] md:flex-row">
    
    <!-- Left Section -->
    <div class="p-8 flex flex-col justify-between w-full md:w-2/3 order-2 md:order-none">
      <div>
        <!-- Title and Top Bar -->
        <div class="flex flex-row items-center justify-between gap-2">
          <h2 class="text-2xl font-bold text-gray-900">Exciting Event</h2>
          
          <!-- Signup Button -->
          <button @click="showModal = true" class="btn btn-outline px-2 text-xs md:text-sm rounded-lg">
            Sign Up
          </button>
        </div>

        <!-- Event Details -->
        <div class="flex items-center text-sm text-gray-500 space-x-4 mt-2">
          <span class="flex items-center space-x-1">
            📅 <span class="font-medium">March 25, 2025</span>
          </span>
          <span class="flex items-center space-x-1">
            📍 <span class="font-medium">New York, NY</span>
          </span>
        </div>

        <!-- Description -->
        <p class="text-gray-600 mt-3">
          {{ truncatedDescription }}
        </p>
        <span v-if="showReadMore" class="text-black font-semibold cursor-pointer mt-2 block">Read More</span>
      </div>
    </div>
    
    <!-- Right Section (Image with Tags) - Stays on Right on Larger Screens, Moves to Top on Mobile -->
    <div class="w-full md:w-1/3 relative order-1 md:order-last">
      <img
        src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?cs=srgb&dl=pexels-joshsorenson-976866.jpg&fm=jpg"
        alt="Event"
        class="object-cover w-full h-60 md:h-full brightness-90" />
      
      <!-- Tags -->
      <div class="absolute left-4 bottom-4 flex space-x-3">
        <span class="bg-black/60 text-white text-sm px-4 py-1 rounded-full shadow-md">#Adventure</span>
        <span class="bg-black/60 text-white text-sm px-4 py-1 rounded-full shadow-md">#Fun</span>
      </div>
    </div>
  </div>

<!-- Signup Modal -->
<transition 
  enter-active-class="transition-opacity duration-300 ease-out" 
  enter-from-class="opacity-0 scale-95" 
  enter-to-class="opacity-100 scale-100"
  leave-active-class="transition-opacity duration-100 ease-in"
  leave-from-class="opacity-100 scale-100"
  leave-to-class="opacity-0 scale-100"
>
  <div v-if="showModal" class="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <h3 class="text-xl font-bold">Event Details</h3>
      <p class="text-sm text-gray-500 mt-2">📅 March 25, 2025</p>
      <p class="text-sm text-gray-500">📍 New York, NY</p>
      
      <h4 class="mt-4 text-lg font-semibold">Attendees</h4>
      <div class="flex mt-2 -space-x-2">
        <img 
          v-for="(user, index) in users" 
          :key="index" 
          :src="user.img" 
          :alt="`User ${index + 1}`" 
          class="w-10 h-10 rounded-full border-2 border-white" 
        />
        <div class="w-10 h-10 flex items-center justify-center bg-gray-700 text-white text-xs font-semibold rounded-full border-2 border-white">
          +99
        </div>
      </div>

      <button @click="confirmSignup" class="btn btn-primary w-full mt-4">Confirm</button>
      <button @click="showModal = false" class="btn btn-outline w-full mt-2">Cancel</button>
    </div>
  </div>
</transition>

</template>

<script setup>
import { ref, computed } from 'vue';

const users = [
  { img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { img: "https://randomuser.me/api/portraits/men/50.jpg" }
];

const description = "Join us for an unforgettable experience filled with fun and adventure. Join us for an unforgettable experience filled with fun and adventure. Join us for an unforgettable experience filled with fun and adventure. Join us for an unforgettable experience filled with fun and adventure. Join us for an unforgettable experience filled with fun and adventure. Join us for an unforgettable experience filled with fun and adventure.";

const TRUNCATION_LENGTH = 300; // Number of characters to show before truncating 

const truncatedDescription = computed(() => {
  return description.length > TRUNCATION_LENGTH ? description.substring(0, TRUNCATION_LENGTH) + '...' : description;
});

const showReadMore = computed(() => description.length > TRUNCATION_LENGTH);
const showModal = ref(false);

const confirmSignup = () => {
  alert("You have signed up!");
  showModal.value = false;
};
</script>