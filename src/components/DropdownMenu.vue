<template>
  <div class="relative" ref="dropdown">
    <!-- Trigger -->
    <button
      @click="toggleDropdown"
      class="h-5 w-5 hover:scale-110 cursor-pointer flex items-center"
    >
      <component :is="triggerIcon" />
    </button>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <!-- Dropdown Content -->
      <div
        v-if="isOpen"
        :class="dropdownPositionClass"
      >
        <div v-for="(item, index) in menuItems" :key="index">
          <button
            class="p-4 md:p-2 w-full text-left text-gray-900 hover:bg-blue-600 hover:text-white rounded-lg flex items-center cursor-pointer "
            @click="navigateTo(item.link)"
          >
            <component :is="item.icon" class="inline-block mr-2 h-5 w-5" aria-hidden="true" />
            {{ item.name }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRouter } from 'vue-router';

// Props
defineProps({
  triggerIcon: {
    type: Function,
    required: true,
  },
  menuItems: {
    type: Array,
    required: true,
  },
});

const isOpen = ref(false);
const dropdown = ref(null);
const router = useRouter();
const dropdownPositionClass = ref('left-0');

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    adjustDropdownPosition();
  }
};

const handleClickOutside = (event) => {
  if (dropdown.value && !dropdown.value.contains(event.target)) {
    isOpen.value = false;
  }
};

const navigateTo = (link) => {
  if (link) {
    router.push(link);
    isOpen.value = false;
  }
};

const adjustDropdownPosition = () => {
  if (!dropdown.value) return;

  const dropdownRect = dropdown.value.getBoundingClientRect();
  const viewportWidth = window.innerWidth;

  const baseClasses = `absolute top-8 p-2 w-full w-52 rounded-2xl bg-white shadow-lg focus:outline-none`
  dropdownPositionClass.value = (dropdownRect.right + 200 > viewportWidth) ? `${baseClasses} right-0` : `${baseClasses} left-0`;
}; 

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>