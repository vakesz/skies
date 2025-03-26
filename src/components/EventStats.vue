<template>
  <div class="mt-6 flex items-center gap-6 text-sm text-gray-500">
    <div class="flex items-center gap-2">
      <HeartIcon class="w-4 h-4" />
      {{ stats.likes }}
    </div>
    <div v-if="stats.going" class="flex items-center gap-2">
      <UserIcon class="w-4 h-4" />
      {{ stats.going }}
    </div>
    <div class="flex items-center gap-2">
      <ChatBubbleBottomCenterIcon class="w-4 h-4" />
      {{ stats.comments }}
    </div>
  </div>
</template>

<script setup>
import { ChatBubbleBottomCenterIcon, UserIcon, HeartIcon } from '@heroicons/vue/24/outline';

defineProps({
  stats: {
    type: Object,
    required: true,
    validator: (value) => {
      return ['likes', 'going', 'comments'].every(key => key in value)
    }
  }
});
</script>