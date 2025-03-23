<script setup lang="ts">
import Postcard from '@/components/Postcard.vue'

const postcards = Array.from({ length: 3 });
</script>

<template>
  <div class="flex flex-col items-center justify-center mx-auto max-w-6xl w-full px-4 gap-6 my-6">
    <Postcard
      v-for="(card, index) in postcards"
      :key="index"
    />
  </div>
</template>