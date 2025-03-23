<template>
  <div class="w-full max-w-6xl mt-8">
    <!-- Comments Section Toggle -->
    <div class="flex justify-between items-center">
      <ToggleArrow 
         text="Comments" 
         :collapsed="!showComments" 
         @click="toggleComments"
         class="cursor-pointer text-black" 
      />
    </div>
    <!-- Comments List and Form -->
    <div v-show="showComments" class="w-full mt-4">
      <!-- Comments List -->
      <div class="space-y-4">
         <div v-for="(comment, index) in comments" :key="index"
              class="bg-white rounded-lg shadow p-4 transition-shadow hover:shadow-md">
            <div class="flex items-start space-x-4">
               <img :src="commenters[comment.user].img" 
                    :alt="commenters[comment.user].name"
                    class="w-12 h-12 rounded-full" />
               <div class="flex-1">
                  <div class="flex items-center justify-between">
                     <h5 class="font-semibold text-gray-800">{{ commenters[comment.user].name }}</h5>
                     <span class="text-sm text-gray-500">{{ comment.timestamp }}</span>
                  </div>
                  <p class="mt-2 text-gray-700">{{ comment.text }}</p>
                  <div class="mt-3 flex items-center space-x-2">
                     <button @click="toggleLike(index)"
                        class="flex items-center space-x-1 text-sm text-gray-500 hover:text-black hover:font-semibold transition-colors"
                        :class="{ 'font-semibold': comment.isLiked }">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"
                           :class="{ 'fill-black': comment.isLiked, 'fill-gray-500': !comment.isLiked }"
                           viewBox="0 0 20 20" fill="currentColor">
                           <path
                              d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                        <span class="leading-none">
                          {{ comment.likes }} {{ comment.likes === 1 ? 'Like' : 'Likes' }}
                        </span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- Comment Form -->
      <form @submit.prevent="addComment" class="mt-6 bg-white rounded-lg shadow transition-shadow hover:shadow-md">
         <div class="relative">
            <!-- User Image -->
            <img :src="currentUser.img" :alt="currentUser.name"
               class="absolute top-3 left-3 w-8 h-8 rounded-full border border-gray-300" />
            <!-- Textarea -->
            <textarea v-model="newComment"
               class="w-full border bg-white/60 rounded-lg p-3 pl-14 pr-12 resize-y focus:ring-2 focus:ring-black focus:outline-none focus:border-transparent min-h-[60px]"
               placeholder="Write a comment...">
            </textarea>
            <!-- Submit Button -->
            <button type="submit"
               class="absolute bottom-3 right-3 text-neutral-600 hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
               :disabled="!newComment.trim()">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                     d="M13 7l5 5m0 0l-5 5m5-5H6" />
               </svg>
            </button>
         </div>
      </form>
    </div>
  </div>
</template>

<script>
import ToggleArrow from '@/components/icons/ToggleArrow.vue';

export default {
  name: 'CommentsSection',
  components: {
    ToggleArrow
  },
  props: {
    comments: {
      type: Array,
      required: true
    },
    currentUser: {
      type: Object,
      required: true
    },
    commenters: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      showComments: true,
      newComment: ""
    }
  },
  methods: {
    toggleComments() {
      this.showComments = !this.showComments;
    },
    addComment() {
      if (this.newComment.trim()) {
         this.comments.push({
            text: this.newComment.trim(),
            user: 0, // Consider mapping currentUser to the correct commenter index
            timestamp: "Just now",
            likes: 0,
            isLiked: false
         });
         this.newComment = "";
      }
    },
    toggleLike(index) {
      const comment = this.comments[index];
      comment.isLiked = !comment.isLiked;
      comment.likes += comment.isLiked ? 1 : -1;
    }
  }
}
</script>