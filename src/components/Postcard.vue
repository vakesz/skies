<template>
  <div class="bg-white backdrop-blur-lg rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col w-full max-w-6xl md:flex-row">
    <!-- Left Section -->
    <div class="p-8 flex flex-col justify-between w-full md:w-2/3 order-2 md:order-none">
      <!-- Header -->
      <div>
        <div class="flex justify-between items-center">
          <h2 @click="goToPost" class="text-2xl font-bold text-gray-900 cursor-pointer">
            {{ event.title }}
          </h2>
          <button
            @click.stop="showModal = true"
            class="px-4 py-2 border border-gray-300 text-xs md:text-sm rounded-lg hover:bg-gray-100 transition-colors"
          >
            Sign Up
          </button>
        </div>

        <!-- Event Meta -->
        <EventMeta :date="event.date" :location="event.location" />

        <!-- Description -->
        <p @click="goToPost" class="text-gray-600 mt-3 line-clamp-4 cursor-pointer">
          {{ event.description }}
        </p>
      </div>

      <!-- Stats -->
      <EventStats :stats="stats" />
    </div>

    <!-- Right Section -->
    <div class="w-full md:w-1/3 relative order-1 md:order-last">
      <img
        :src="event.image"
        :alt="event.title"
        class="object-cover w-full h-60 md:h-full brightness-90 cursor-pointer"
      />
      <div class="absolute left-4 bottom-4 flex space-x-3">
        <span
          v-for="tag in event.tags"
          :key="tag"
          class="bg-black/60 text-white text-sm px-4 py-1 rounded-full shadow-md"
        >
          #{{ tag }}
        </span>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div
    v-if="showModal"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    @click.self="showModal = false"
  >
    <SignupModal
      :show="showModal"
      :date="event.date"
      :location="event.location"
      :users="users"
      @close="showModal = false"
      @confirm="confirmSignup"
    />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import EventMeta from '@/components/EventMeta.vue';
import EventStats from '@/components/EventStats.vue';
import SignupModal from '@/components/SignupModal.vue';

const router = useRouter();
const showModal = ref(false);

const event = reactive({
  title: "Exciting Event",
  date: "March 25, 2025",
  location: "New York, NY",
  image: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg",
  description:
    "Join us for an unforgettable experience filled with fun and adventure. Join us for an unforgettable experience filled with fun and adventure. Join us for an unforgettable experience filled with fun and adventure. Join us for an unforgettable experience filled with fun and adventure. Join us for an unforgettable experience filled with fun and adventure. Join us for an unforgettable experience filled with fun and adventure.",
  tags: ["Adventure", "Fun"]
});

const users = [
  { img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { img: "https://randomuser.me/api/portraits/men/50.jpg" }
];

const stats = {
  likes: 34,
  going: 56,
  comments: 12
};

const goToPost = () => router.push('/post');

const confirmSignup = () => {
  alert("You have signed up!");
  showModal.value = false;
};
</script>
