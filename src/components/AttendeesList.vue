<template>
  <div class="w-full max-w-6xl mt-8">
    <!-- Attendees Section Toggle -->
    <div class="flex justify-between items-center">
      <ChevronDropdown 
         text="Attendees" 
         :collapsed="!showAttendees" 
         @click="toggleAttendees"
         class="cursor-pointer text-black" 
      />
    </div>
    <!-- Attendees List -->
    <div v-if="showAttendees" class="bg-white rounded-2xl shadow-md p-6 mt-4">
      <div class="space-y-4">
        <div v-for="(user, index) in attendees" :key="user.userid" class="flex items-center gap-4">
          <img :src="user.profileImage" :alt="`${user.firstName} ${user.lastName}`" class="w-10 h-10 rounded-full" />
          <div>
            <p class="font-semibold">{{ user.firstName }} {{ user.lastName }}</p>
            <p v-if="user.info" class="text-gray-600 text-sm">{{ user.info }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="flex items-center gap-2 mt-4">
      <img 
        v-for="(user, index) in displayedAttendees" 
        :key="user.userid" 
        :src="user.profileImage"
        :alt="`${user.firstName} ${user.lastName}`"
        :title="`${user.firstName} ${user.lastName}`"
        class="w-10 h-10 rounded-full border-2 border-white hover:scale-110 transition-transform" 
      />
      <div v-if="extraAttendeesCount > 0"
         class="w-10 h-10 rounded-full border-2 border-white bg-gray-800 text-white flex items-center justify-center text-xs">
         +{{ extraAttendeesCount }}
      </div>
    </div>
  </div>
</template>

<script>
import ChevronDropdown from '@/components/ChevronDropdown.vue';

export default {
  name: 'AttendeesList',
  components: {
    ChevronDropdown
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
      return this.attendees.slice(0, 10);
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