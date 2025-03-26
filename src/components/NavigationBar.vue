<template>
  <nav :class="navClass">
    <Menu as="div" class="relative">
      <MenuButton class="mr-2 h-5 w-5 hover:scale-110 cursor-pointer flex items-center">
        <Bars3Icon />
      </MenuButton>
      <MenuItems
        class="absolute left-0 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
        <div class="px-1 py-1">
          <MenuItem v-slot="{ active }">
          <button :class="[
            active ? 'bg-blue-600 text-white' : 'text-gray-900',
            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
          ]" @click="goHome">
            <HomeIcon :active="active" class="mr-2 h-5 w-5" aria-hidden="true" />
            Home
          </button>
          </MenuItem>
        </div>
        <div class="px-1 py-1">
          <MenuItem v-slot="{ active }">
          <button :class="[
            active ? 'bg-blue-600 text-white' : 'text-gray-900',
            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
          ]" @click="goToCalendar">
            <CalendarIcon :active="active" class="mr-2 h-5 w-5" aria-hidden="true" />
            Calendar
          </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
          <button :class="[
            active ? 'bg-blue-600 text-white' : 'text-gray-900',
            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
          ]" @click="goToForum">
            <ChatBubbleLeftRightIcon :active="active" class="mr-2 h-5 w-5" aria-hidden="true" />
            Forum
          </button>
          </MenuItem>
        </div>
        <!-- Socials -->
        <div class="px-1 py-1">
          <MenuItem v-slot="{ active }">
          <button :class="[
            active ? 'bg-blue-600 text-white' : 'text-gray-900',
            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
          ]">
            <FacebookIcon :active="active" class="mr-2 h-5 w-5" aria-hidden="true" />
            Facebook
          </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
          <button :class="[
            active ? 'bg-blue-600 text-white' : 'text-gray-900',
            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
          ]">
            <LinkedInIcon :active="active" class="mr-2 h-5 w-5" aria-hidden="true" />
            LinkedIn
          </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
          <button :class="[
            active ? 'bg-blue-600 text-white' : 'text-gray-900',
            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
          ]">
            <TwitterIcon :active="active" class="mr-2 h-5 w-5" aria-hidden="true" />
            Twitter
          </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
          <button :class="[            active ? 'bg-blue-600 text-white' : 'text-gray-900',
            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
          ]">
            <YouTubeIcon :active="active" class="mr-2 h-5 w-5" aria-hidden="true" />
            YouTube
          </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>

    <div class="flex-1 flex justify-center items-center">
      <img class="h-8 transition-transform duration-300 hover:scale-105 cursor-pointer" @click="goHome"
        src="../assets/altlogo.png" alt="Company Logo" />
    </div>

   <!-- Search Icon with Dropdown -->
   <div class="relative" ref="searchDropdown">
      <MagnifyingGlassIcon
        class="mr-2 h-5 w-5 hover:scale-110 cursor-pointer"
        aria-label="Search"
        @click="toggleSearchDropdown" 
      />
      <div v-if="isSearchDropdownOpen" ref="searchDropdown" class="absolute right-0 mt-2 p-2 w-64 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
        <input ref="searchInput" type="text"
          class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-600"
          placeholder="Search..." />
      </div>
    </div>

    <!-- User Icon with Dropdown -->
    <Menu as="div" class="relative">
      <MenuButton class="ml-2 h-5 w-5 hover:scale-110 cursor-pointer flex items-center">
        <UserCircleIcon />
      </MenuButton>
      <MenuItems
        class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
        <div class="px-1 py-1">
          <MenuItem v-slot="{ active }">
          <button :class="[
            active ? 'bg-blue-600 text-white' : 'text-gray-900',
            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
          ]"  @click="goToUser">
            <UserIcon :active="active" class="mr-2 h-5 w-5" aria-hidden="true" />
            Profile
          </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
          <button :class="[
            active ? 'bg-blue-600 text-white' : 'text-gray-900',
            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
          ]" @click="goToSettings">
            <WrenchIcon :active="active" class="mr-2 h-5 w-5" aria-hidden="true" />
            Settings
          </button>
          </MenuItem>

        </div>
        <div class="px-1 py-1">
          <!-- User Login -->
          <MenuItem v-if="user" v-slot="{ active }">
          <button :class="[
            active ? 'bg-blue-600 text-white' : 'text-gray-900',
            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
          ]">
            <ArrowLeftEndOnRectangleIcon :active="active" class="mr-2 h-5 w-5" aria-hidden="true" />
            Login
          </button>
          </MenuItem>
          <!-- User Logout -->
          <MenuItem v-else v-slot="{ active }">
          <button :class="[
            active ? 'bg-blue-600 text-white' : 'text-gray-900',
            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
          ]">
            <ArrowLeftStartOnRectangleIcon :active="active" class="mr-2 h-5 w-5" aria-hidden="true" />
            Logout
          </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import { Bars3Icon, HomeIcon, CalendarIcon, ChatBubbleLeftRightIcon, MagnifyingGlassIcon, UserCircleIcon, UserIcon, WrenchIcon, ArrowLeftEndOnRectangleIcon, ArrowLeftStartOnRectangleIcon } from '@heroicons/vue/24/outline';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import FacebookIcon from './icons/FacebookIcon.vue';
import LinkedInIcon from './icons/LinkedInIcon.vue';
import TwitterIcon from './icons/TwitterIcon.vue';
import YouTubeIcon from './icons/YouTubeIcon.vue';

const router = useRouter();
const goHome = () => router.push('/');
const goToUser = () => router.push('/user');
const goToSettings = () => router.push('/settings');
const goToCalendar = () => router.push('/calendar');
const goToForum = () => router.push('/forum');

const isScrolled = ref(false);
const isSearchDropdownOpen = ref(false);

const searchDropdown = ref(null);

const user = {
  firstName: 'John',
  lastName: 'Doe',
  profilePicture: 'https://randomuser.me/api/portraits/men/50.jpg'
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};


const toggleSearchDropdown = () => {
  isSearchDropdownOpen.value = !isSearchDropdownOpen.value;
  if (isSearchDropdownOpen.value) {
    nextTick(() => searchInput.value?.focus());
  }
};

const handleClickOutside = (event) => {
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
