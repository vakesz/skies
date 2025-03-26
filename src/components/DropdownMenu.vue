<template>
  <div ref="dropdown">
    <!-- Trigger -->
    <button @click="toggleDropdown" class="sm:h-5 h-6 sm:w-5 w-6 hover:scale-110 cursor-pointer flex items-center">
      <component :is="triggerIcon" />
    </button>

    <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
      <!-- Dropdown Content -->
      <div v-if="isOpen" :class="[
        'absolute m-0 p-2 rounded-2xl bg-white shadow-lg focus:outline-none top-13 sm:w-52 w-full',
        openfrom === 'right' ? 'right-0' : 'left-0'
      ]">
        <div v-for="(item, index) in menuItems" :key="index"
          class="flex sm:p-2 p-4  w-full text-left text-gray-900 hover:bg-blue-600 hover:text-white rounded-lg items-center cursor-pointer"
          @click="navigateTo(item.link)">
          <component :is="item.icon" class="inline-block mr-2 h-5 w-5" aria-hidden="true" />
          {{ item.name }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
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
  openfrom: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'right'].includes(value),
  },
});

const isOpen = ref(false);
const dropdown = ref(null);
const router = useRouter();

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const handleClickOutside = (event) => {
  if (dropdown.value && !dropdown.value.contains(event.target)) {
    isOpen.value = false;
  }
};

const navigateTo = (link) => {
  if (link) {
    router.push(link).catch((err) => {
      if (!err.message.includes('NavigationDuplicated')) {
        console.error(err);
      }
    });
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