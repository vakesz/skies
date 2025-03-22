<template>
  <div class="flex items-center space-x-3 cursor-pointer" @click="toggle">
    <!-- Custom Checkbox -->
    <div
      class="relative w-6 h-6 flex items-center justify-center border-2 rounded-md transition-all duration-200"
      :class="{
        'bg-blue-500 border-blue-500': modelValue,
        'bg-white border-gray-300': !modelValue
      }"
    >
      <svg
        v-if="modelValue"
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>

    <!-- Label -->
    <span class="text-gray-700 text-sm select-none">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  methods: {
    toggle() {
      this.$emit("update:modelValue", !this.modelValue);
    },
  },
};
</script>

<style scoped>
/* Add hover effect */
div:hover > .relative {
  border-color: #2563eb; /* Blue-500 */
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.5);
}
</style>