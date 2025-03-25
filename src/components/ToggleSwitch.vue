<template>
  <div 
    class="flex items-center space-x-3 cursor-pointer" 
    @click="toggle"
  >
    <SwitchGroup>
      <div class="flex items-center">
        <Switch
          :class="switchClasses"
          class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          :checked="modelValue"
          @change="updateValue"
        >
          <span
            :class="thumbClasses"
            class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
          />
        </Switch>
        <SwitchLabel 
          class="ml-4 text-gray-700 text-sm select-none"
        >
          {{ label }}
        </SwitchLabel>
      </div>
    </SwitchGroup>
  </div>
</template>

<script>
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'

export default {
  name: "ToggleSwitch",
  components: {
    Switch,
    SwitchGroup,
    SwitchLabel
  },
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
  computed: {
    switchClasses() {
      return this.modelValue ? "bg-blue-600" : "bg-gray-200";
    },
    thumbClasses() {
      return this.modelValue ? "translate-x-6" : "translate-x-1";
    },
  },
  methods: {
    updateValue(value) {
      this.$emit("update:modelValue", value);
    },
    toggle() {
      this.updateValue(!this.modelValue);
    },
  },
};
</script>


