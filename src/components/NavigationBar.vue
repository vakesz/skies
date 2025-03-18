<template>
  <div class="drawer sticky top-0 z-50">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    
    <div class="drawer-content">
      <!-- Navbar -->
      <nav class="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4">
        <div class="flex-none">
          <label for="my-drawer" class="btn btn-square btn-ghost drawer-button" aria-label="Toggle Sidebar">
            <MenuIcon />
          </label>
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
    </div>

    <!-- Sidebar Drawer -->
    <div class="drawer-side mt-16">
      <label for="my-drawer" class="drawer-overlay" aria-label="Close Sidebar"></label>
      <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <li><a href="/">Home</a></li>
        <li><a href="#">Activities</a></li>
        <li><a href="#">Forum</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import MenuIcon from '@/components/icons/MenuIcon.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
import UserIcon from '@/components/icons/UserIcon.vue';
import MoreIcon from '@/components/icons/MoreIcon.vue';
</script>
