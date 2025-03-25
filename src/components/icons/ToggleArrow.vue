<template>
  <div class="flex items-center">
    <span class="mr-1">
      <ChevronRightIcon v-if="collapsed" class="w-4 h-4" />
      <ChevronDownIcon v-else class="w-4 h-4" />
    </span>
    <span>
      <h3 class="font-semibold text-gray-800 items-center m-0">{{ text }}</h3>
    </span>
  </div>
</template>

<script>
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/vue/24/outline';
export default {
  name: 'ToggleArrow',
  components: {
    ChevronRightIcon,
    ChevronDownIcon
  },
  props: {
    text: {
      type: String,
      required: true
    },
    collapsed: {
      type: Boolean,
      required: true
    }
  }
}
</script>