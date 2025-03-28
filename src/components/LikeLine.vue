<template>
  <div 
    class="flex items-center gap-2 cursor-pointer group" 
    @click="toggleLike"
  >
    <component
      :is="isLiked ? FilledHeartIcon : HeartIcon"
      :class="[ 
        isLiked ? 'text-pink-500' : 'text-gray-400',
        'w-5 h-5 transition-colors group-hover:text-pink-500 group-hover:animate-pulse'
      ]"
    />
    <span 
      class="text-gray-500 text-sm"
    >
      {{ likedBy.length }} {{ showText === 'true' && likedBy.length === 1 ? 'like' : 'likes' }}
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { HeartIcon } from '@heroicons/vue/24/outline';
import { HeartIcon as FilledHeartIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
  likedBy: {
    type: Array,
    required: true,
  },
  currentUserId: {
    type: Number,
    required: true,
  },
  showText: {
    type: String,
    default: 'true', // Default value to avoid undefined errors
  }
});

const emit = defineEmits(['update:likedBy']);

const isLiked = computed(() => props.likedBy.includes(props.currentUserId));

function toggleLike() {
  const updatedLikes = [...props.likedBy];
  if (isLiked.value) {
    const index = updatedLikes.indexOf(props.currentUserId);
    if (index > -1) updatedLikes.splice(index, 1);
  } else {
    updatedLikes.push(props.currentUserId);
  }
  emit('update:likedBy', updatedLikes);
}
</script>

<style scoped>
/* Add hover and pulse animation */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.hover\:animate-pulse:hover,
.group-hover\:animate-pulse:hover {
  animation: pulse 0.3s ease-in-out;
}
</style>