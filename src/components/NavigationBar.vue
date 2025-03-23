<template>
  <nav :class="navClass">
    <button class="p-2 rounded-full" aria-label="Main Menu">
      <MenuIcon class="hover:scale-110 cursor-pointer" />
    </button>

    <div class="flex-1 flex justify-center items-center">
      <img
        class="h-8 transition-transform duration-300 hover:scale-105 cursor-pointer"
        @click="goHome"
        src="../assets/altlogo.png"
        alt="Company Logo"
      />
    </div>

    <!-- Search Icon with Dropdown -->
    <div class="relative" ref="searchDropdown">
      <button class="p-2 rounded-full" aria-label="Search" @click="toggleSearchDropdown">
        <SearchIcon class="hover:scale-110 cursor-pointer" />
      </button>
      <div
        v-if="isSearchDropdownOpen"
        class="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-20"
      >
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
        <UserIcon class="hover:scale-110 cursor-pointer" />
      </button>
      <div
        v-if="isUserDropdownOpen"
        class="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 z-20"
      >
        <div class="flex items-center">
          <p class="text-sm font-semibold flex-1">
            Welcome, <br />{{ user.firstName }} {{ user.lastName }}!
          </p>
          <img class="w-8 h-8 rounded-full" :src="user.profilePicture" alt="Profile Picture" />
        </div>
        <hr class="my-2" />
        <a href="/user"
          ><button class="w-full text-left p-2 hover:bg-gray-100 rounded cursor-pointer">
            Profile
          </button></a
        >
        <a href="/settings"
          ><button class="w-full text-left p-2 hover:bg-gray-100 rounded cursor-pointer">
            Settings
          </button></a
        >
        <a href="/logout"
          ><button class="w-full text-left p-2 hover:bg-gray-100 rounded cursor-pointer">
            Logout
          </button></a
        >
      </div>
    </div>

    <!-- More Options Icon (currently commented out) -->
    <!--
    <button class="p-2 rounded-full" aria-label="More Options">
      <MoreIcon class="hover:scale-110" />
    </button>
    -->
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import MenuIcon from '@/components/icons/MenuIcon.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
import UserIcon from '@/components/icons/UserIcon.vue';
import MoreIcon from '@/components/icons/MoreIcon.vue';

const router = useRouter();
const goHome = () => router.push('/');

const isScrolled = ref(false);
const isUserDropdownOpen = ref(false);
const isSearchDropdownOpen = ref(false);

const userDropdown = ref(null);
const searchDropdown = ref(null);
const searchInput = ref(null);

// Group user data in one object
const user = {
  firstName: 'John',
  lastName: 'Doe',
  profilePicture: 'https://randomuser.me/api/portraits/men/50.jpg'
};

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

const navClass = computed(() => {
  const baseClasses =
    'flex mx-auto sticky bg-neutral-200 backdrop-blur-md shadow-md p-2 px-4 transition-all duration-100 z-10 items-center max-w-[1200px]';
  return isScrolled.value ? `${baseClasses} top-0 rounded-b-2xl` : `${baseClasses} top-3 rounded-2xl`;
});
</script>
