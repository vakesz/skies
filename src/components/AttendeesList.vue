<template>
  <div class="w-full max-w-6xl mt-8">
    <!-- Attendees Section Toggle -->
    <div class="flex justify-between items-center">
      <ToggleArrow 
         text="Attendees" 
         :collapsed="!showAttendees" 
         @click="toggleAttendees"
         class="cursor-pointer text-black" 
      />
    </div>
    <!-- Attendees List -->
    <div class="bg-white rounded-lg shadow-md p-6 mt-4">
      <div class="space-y-4">
        <div v-if="showAttendees" v-for="(user, index) in attendees" :key="index" class="flex items-center gap-4">
          <img :src="user.img" :alt="user.name" class="w-10 h-10 rounded-full" />
          <div>
            <p class="font-semibold">{{ user.name }}</p>
            <p v-if="user.info" class="text-gray-600 text-sm">{{ user.info }}</p>
          </div>
        </div>
        <div v-else class="flex items-center -space-x-2">
          <img 
            v-for="(user, index) in displayedAttendees" 
            :key="index" 
            :src="user.img"
            :alt="`Attendee ${index + 1}`"
            :title="user.name"
            class="w-10 h-10 rounded-full border-2 border-white hover:scale-110 transition-transform" 
          />
          <div v-if="extraAttendeesCount > 0"
             class="w-10 h-10 rounded-full border-2 border-white bg-gray-800 text-white flex items-center justify-center text-xs">
             +{{ extraAttendeesCount }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToggleArrow from '@/components/icons/ToggleArrow.vue';

export default {
  name: 'AttendeesList',
  components: {
    ToggleArrow
  },
  props: {
    attendees: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      showAttendees: false
    }
  },
  computed: {
    displayedAttendees() {
      return this.attendees.slice(0, 5);
    },
    extraAttendeesCount() {
      return Math.max(0, this.attendees.length - 5);
    }
  },
  methods: {
    toggleAttendees() {
      this.showAttendees = !this.showAttendees;
    }
  }
}
</script>