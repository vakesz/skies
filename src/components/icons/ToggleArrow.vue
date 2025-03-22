<template>
  <div class="flex items-center">
    <span class="mr-1">
      <svg v-if="collapsed" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8">
        <path fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L11.586 9 7.293 4.707a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
          clip-rule="evenodd" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8">
        <path fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414L10 13.414 5.293 8.707a1 1 0 010-1.414z"
          clip-rule="evenodd" />
      </svg>
    </span>
    <span>
      <h3 class="font-semibold text-gray-800 items-center m-0">{{ text }}</h3>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ToggleArrow',
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