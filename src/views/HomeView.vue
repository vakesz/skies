<script setup lang="ts">
import PostHero from '../components/PostHero.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-center mx-auto max-w-[1200px] w-full px-4 gap-6 my-6">
    <PostHero v-for="_ in 5" />
  </div>
</template>