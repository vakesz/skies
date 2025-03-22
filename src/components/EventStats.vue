<template>
  <div class="mt-6 flex items-center gap-6 text-sm text-gray-500">
    <div class="flex items-center gap-2">
      <HeartIcon class="w-4 h-4" />
      {{ stats.likes }}
    </div>
    <div class="flex items-center gap-2">
      <UsersIcon class="w-4 h-4" />
      {{ stats.going }}
    </div>
    <div class="flex items-center gap-2">
      <ChatIcon class="w-4 h-4" />
      {{ stats.comments }}
    </div>
  </div>
</template>

<script setup>
import HeartIcon from '@/components/icons/HeartIcon.vue';
import UsersIcon from '@/components/icons/UsersIcon.vue';
import ChatIcon from '@/components/icons/ChatIcon.vue';

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