<template>
  <nav :class="navClass">
    <button class="p-2 rounded-full" aria-label="Main Menu">
      <MenuIcon class="hover:scale-110" />
    </button>

    <div class="flex-1 flex justify-center items-center">
      <img class="h-8 transition-transform duration-300 hover:scale-105" @click="goHome" src="../assets/altlogo.png"
        alt="Company Logo" />
    </div>

    <!-- Search Icon with Dropdown -->
    <div class="relative" ref="searchDropdown">
      <button class="p-2 rounded-full" aria-label="Search" @click="toggleSearchDropdown">
        <SearchIcon class="hover:scale-110" />
      </button>
      <div v-if="isSearchDropdownOpen" class="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-20">
        <input
          ref="searchInput"
          type="text"
          class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-black"
          placeholder="Search..."
        />
      </div>
    </div>

    <!-- User Icon with Dropdown -->
    <div class="relative" ref="userDropdown">
      <button class="p-2 rounded-full" aria-label="User Menu" @click="toggleUserDropdown">
        <UserIcon class="hover:scale-110" />
      </button>
      <div v-if="isUserDropdownOpen" class="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 z-20">
        <div class="flex items-center">
          <p class="text-sm font-semibold flex-1">Welcome, <br />{{ firstName }} {{ lastName }}!</p>
          <img class="w-8 h-8 rounded-full" :src="profilePicture" alt="Profile Picture" />
        </div>
        <hr class="my-2" />
        <a href="/user"><button class="w-full text-left p-2 hover:bg-gray-100 rounded">Profile</button></a>
        <a href="/settings"><button class="w-full text-left p-2 hover:bg-gray-100 rounded">Settings</button></a>
        <a href="/logout"><button class="w-full text-left p-2 hover:bg-gray-100 rounded">Logout</button></a>
      </div>
    </div>

    <!-- More Options Icon 
    <button class="p-2 rounded-full" aria-label="More Options">
      <MoreIcon class="hover:scale-110" />
    </button>-->
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue';
import MenuIcon from '@/components/icons/MenuIcon.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
import UserIcon from '@/components/icons/UserIcon.vue';
import MoreIcon from '@/components/icons/MoreIcon.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goHome = () => router.push('/');

const isScrolled = ref(false);
const isUserDropdownOpen = ref(false);
const isSearchDropdownOpen = ref(false);
const userDropdown = ref(null);
const searchDropdown = ref(null);
const searchInput = ref(null);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleUserDropdown = () => {
  isUserDropdownOpen.value = !isUserDropdownOpen.value;
};

const toggleSearchDropdown = () => {
  isSearchDropdownOpen.value = !isSearchDropdownOpen.value;
  if (isSearchDropdownOpen.value) {
    nextTick(() => searchInput.value?.focus());
  }
};

const handleClickOutside = (event) => {
  if (userDropdown.value && !userDropdown.value.contains(event.target)) {
    isUserDropdownOpen.value = false;
  }
  if (searchDropdown.value && !searchDropdown.value.contains(event.target)) {
    isSearchDropdownOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('click', handleClickOutside);
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
