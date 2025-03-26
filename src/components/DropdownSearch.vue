<template>
   <div ref="dropdown">
      <!-- Trigger -->
      <MagnifyingGlassIcon @click="toggleDropdown" class="sm:h-5 h-6 sm:w-5 w-6 mr-2 hover:scale-110 cursor-pointer flex items-center"
         aria-label="Search" />

      <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0"
         enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in"
         leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
         <!-- Dropdown Content -->

         <div v-if="isOpen" ref="searchDropdown"
            class="absolute right-0 top-12 p-2 sm:w-64 w-full origin-top-right rounded-2xl bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <input ref="searchInput" type="text" v-model="searchQuery"
               class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-600"
               placeholder="Search..." />
            <button type="submit"
               class="absolute bottom-[19px] right-5 text-neutral-600 hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
               :disabled="!searchQuery.trim()">
               <ArrowRightIcon class="h-5 w-5" />
            </button>
         </div>
      </transition>
   </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { MagnifyingGlassIcon, ArrowRightIcon } from '@heroicons/vue/24/outline';

const isOpen = ref(false);
const dropdown = ref(null);
const searchQuery = ref('');

const toggleDropdown = () => {
   isOpen.value = !isOpen.value;
};

const handleClickOutside = (event) => {
   if (dropdown.value && !dropdown.value.contains(event.target)) {
      isOpen.value = false;
   }
};

onMounted(() => {
   document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
   document.removeEventListener('click', handleClickOutside);
});
</script>