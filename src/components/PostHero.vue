<template>
  <div class="bg-white rounded-2xl shadow-lg overflow-hidden flex w-full max-w-[1200px]">
    <!-- Left Section -->
    <div class="p-6 flex flex-col justify-between w-2/3">
      <div>
        <h2 class="text-2xl font-bold text-gray-900">Exciting Event</h2>
        <p class="text-gray-600 mt-2">Join us for an unforgettable experience filled with fun and adventure.</p>
      </div>
      <!-- Tags & Date -->
      <div class="mt-4 flex items-center text-sm text-gray-500 space-x-3">
        <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">#Adventure</span>
        <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">#Fun</span>
        <span>📅 March 25, 2025</span>
      </div>
    </div>

    <!-- Right Section (Image) -->
    <div class="w-1/3">
      <img 
        src="https://images.ctfassets.net/3dar4x4x74wk/48LO8M4jbhPFbFIfgNO6nG/89b7b5c992cdf2628b6a047edacaf120/Delux_Tablescape_275.jpg"
        alt="Event"
        class="object-cover h-full w-full"
      />
    </div>
  </div>
</template>
