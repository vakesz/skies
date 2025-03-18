<template>
  <nav :class="[
    'flex p-3 sticky bg-base-300 shadow-md px-6 transition-all duration-100 z-10',
    isScrolled ? 'top-0 w-full rounded-md p-2' : 'top-2 rounded-full'
  ]">
    <div class="flex-none">
      <div class="dropdown dropdown-bottom">
        <label tabindex="0" class="btn btn-square btn-ghost" aria-label="Main Menu">
          <MenuIcon />
        </label>
        <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li><a href="/">Home</a></li>
          <li><a href="#">Activities</a></li>
          <li><a href="#">Forum</a></li>
        </ul>
      </div>
    </div>

    <div class="flex-1 flex justify-center">
      <img class="h-10" src="../assets/altlogo.png" alt="Company Logo" />
    </div>

    <div class="flex-none flex items-center gap-2">
      <button class="btn btn-ghost btn-circle" aria-label="Search">
        <SearchIcon />
      </button>

      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-square btn-ghost" aria-label="User Menu">
          <UserIcon />
        </label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40">
          <li><a href="/profile">Profile</a></li>
          <li><a href="/settings">Settings</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </div>

      <button class="btn btn-square btn-ghost" aria-label="More Options">
        <MoreIcon />
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MenuIcon from '@/components/icons/MenuIcon.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
import UserIcon from '@/components/icons/UserIcon.vue';
import MoreIcon from '@/components/icons/MoreIcon.vue';

const isScrolled = ref(false);

const handleScroll = () => {
  if (window.scrollY > 100) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

</script>
