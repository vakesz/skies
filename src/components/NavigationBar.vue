<template>
  <nav :class="navClass">
    <button class="btn btn-square btn-ghost" aria-label="Main Menu">
      <MenuIcon />
    </button>

    <div class="flex-1 flex justify-center">
      <img class="h-10 transition-transform duration-300 hover:scale-105" @click="goHome" src="../assets/altlogo.png" alt="Company Logo" />
    </div>

    <button class="btn btn-ghost btn-circle" aria-label="Search">
      <SearchIcon />
    </button>

    <button class="btn btn-square btn-ghost" aria-label="User Menu">
      <UserIcon />
    </button>

    <button class="btn btn-square btn-ghost hidden md:inline-flex" aria-label="More Options">
      <MoreIcon />
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

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const navClass = computed(() => [
  'flex w-full sticky bg-base-300 shadow-md p-3 px-6 transition-all duration-100 z-10',
  isScrolled.value ? 'top-0 rounded-none' : 'top-3 rounded-full',
]);
</script>
