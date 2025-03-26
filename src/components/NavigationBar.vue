<template>
  <nav :class="navClass">
    <DropdownMenu :triggerIcon="Bars3Icon" :menuItems="menuItems" openfrom="left" />

    <div class="flex-1 flex justify-center items-center">
      <img class="h-8 transition-transform duration-300 hover:scale-105 cursor-pointer" @click="goHome"
        src="../assets/altlogo.png" alt="Company Logo" />
    </div>

    <DropdownSearch />

    <DropdownMenu :triggerIcon="UserCircleIcon" :menuItems="userItems" openfrom="right" />
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { Bars3Icon, HomeIcon, CalendarIcon, ChatBubbleLeftRightIcon, UserCircleIcon, UserIcon, WrenchIcon, ArrowLeftEndOnRectangleIcon, ArrowLeftStartOnRectangleIcon } from '@heroicons/vue/24/outline';
import DropdownMenu from '@/components/DropdownMenu.vue';
import DropdownSearch from '@/components/DropdownSearch.vue';

const router = useRouter();
const goHome = () => router.push('/');

const menuItems = [
  { icon: HomeIcon, name: 'Home', link: '/' },
  { icon: CalendarIcon, name: 'Calendar', link: '/calendar' },
  { icon: ChatBubbleLeftRightIcon, name: 'Forum', link: '/forum' },
];

const userItems = [
  { icon: UserIcon, name: 'Profile', link: '/user' },
  { icon: WrenchIcon, name: 'Settings', link: '/settings' },
  { icon: ArrowLeftEndOnRectangleIcon, name: 'Login', link: '/login' },
  { icon: ArrowLeftStartOnRectangleIcon, name: 'Logout', link: '/logout' },
];

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const navClass = computed(() => {
  const baseClasses =
    'flex mx-auto sticky bg-neutral-200 backdrop-blur-md shadow-md p-2 px-4 transition-all duration-100 z-10 items-center max-w-[1200px]';
  return isScrolled.value ? `${baseClasses} top-0 rounded-b-2xl` : `${baseClasses} top-3 rounded-2xl`;
});
</script>
