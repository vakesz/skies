<template>
  <nav :class="navClass">
    <button class="p-2 rounded-full" aria-label="Main Menu">
      <MenuIcon class="hover:scale-110" />
    </button>

    <div class="flex-1 flex justify-center items-center">
      <img class="h-8 transition-transform duration-300 hover:scale-105" @click="goHome" src="../assets/altlogo.png"
        alt="Company Logo" />
    </div>

    <button class="p-2 rounded-full" aria-label="Search">
      <SearchIcon class="hover:scale-110" />
    </button>

    <!-- User Icon with Dropdown -->
    <div class="relative">
      <button class="p-2 rounded-full" aria-label="User Menu" @click="toggleDropdown">
        <UserIcon class="hover:scale-110" />
      </button>
      <div v-if="isDropdownOpen" class="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 z-20">
        <div class="flex items-center">
          <p class="text-sm font-semibold flex-1">Welcome, <br />{{ firstName }} {{ lastName }}!</p>
          <img class="w-8 h-8 rounded-full" :src="profilePicture" alt="Profile Picture" />
        </div>
        <hr class="my-2" />
        <button class="w-full text-left p-2 hover:bg-gray-100 rounded">Profile</button>
        <button class="w-full text-left p-2 hover:bg-gray-100 rounded">Settings</button>
        <button class="w-full text-left p-2 hover:bg-gray-100 rounded">Logout</button>
      </div>
    </div>

    <button class="p-2 rounded-full" aria-label="More Options">
      <MoreIcon class="hover:scale-110" />
    </button>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import MenuIcon from '@/components/icons/MenuIcon.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
import UserIcon from '@/components/icons/UserIcon.vue';
import MoreIcon from '@/components/icons/MoreIcon.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goHome = () => router.push('/');

const isScrolled = ref(false);
const isDropdownOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const navClass = computed(() => [
  'flex w-full sticky bg-neutral-200 backdrop-blur-md shadow-md p-2 px-4 transition-all duration-100 z-10 items-center',
  isScrolled.value ? 'top-0 rounded-none' : 'top-3 rounded-full',
]);

// User data
const firstName = ref('John');
const lastName = ref('Doe');
const profilePicture = ref('https://randomuser.me/api/portraits/men/50.jpg'); // Replace with actual profile picture URL
</script>
