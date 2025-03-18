<template>
  <div class="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-[1200px]">
    <!-- Left Section -->
    <div class="p-6 flex flex-col justify-between w-full md:w-2/3">
      <div>
        <h2 class="text-2xl font-bold text-gray-900">Exciting Event</h2>
        <p class="text-gray-600 mt-2">Join us for an unforgettable experience filled with fun and adventure.</p>
      </div>
      <!-- Tags & Date -->
      <div class="mt-4 flex items-center text-sm text-gray-500 space-x-3">
        <span>📅 March 25, 2025</span>
        <span>📍 New York, NY</span>
      </div>
    </div>

    <!-- Right Section (Image with Tags on Top) -->
    <div class="w-full md:w-1/3 relative">
      <img
        src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?cs=srgb&dl=pexels-joshsorenson-976866.jpg&fm=jpg"
        alt="Event" class="object-cover h-full w-full" />
      <!-- Tags on Top -->
      <div class="absolute top-4 left-4 md:bottom-4 md:top-auto flex space-x-3">
        <span class="bg-gray-700 text-white bg-opacity-50 shadow-md px-3 py-1 rounded-full">#Adventure</span>
        <span class="bg-gray-700 text-white bg-opacity-50 shadow-md px-3 py-1 rounded-full">#Fun</span>
      </div>
    </div>
  </div>
</template>
