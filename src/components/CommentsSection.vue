<template>
  <div class="w-full max-w-6xl mt-8">
    <!-- Comments Section Toggle -->
    <div class="flex justify-between items-center">
      <ChevronDropdown text="Comments" :collapsed="!showComments" @click="toggleComments"
        class="cursor-pointer text-black" />
    </div>
    <!-- Comments List and Form -->
    <div v-show="showComments" class="w-full mt-4">
      <!-- Comments List -->
      <div class="space-y-4">
        <div v-for="(comment, index) in comments" :key="index"
          class="bg-white rounded-2xl shadow p-4 transition-shadow hover:shadow-md">
          <div class="flex items-start space-x-4">
            <img :src="comment.profileImage" :alt="`${comment.firstName} ${comment.lastName}`"
              class="w-12 h-12 rounded-full" />
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <h5 class="font-semibold text-gray-800">
                  {{ comment.firstName }} {{ comment.lastName }}
                </h5>
                <span class="text-sm text-gray-500">
                  {{ new Date(comment.commentedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }) }}
                </span>
              </div>
              <p class="mt-2 text-gray-700">
                {{ comment.comment }}
              </p>
              <div class="mt-2 flex items-center">
                <LikeLine :likedBy=comment.commentLikedBy :currentUserId=currentUser.userid />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Comment Form -->
      <form @submit.prevent="addComment" class="mt-6">
        <div class="relative">
          <!-- User Image -->
          <img :src="currentUser.profileImage" :alt="`${currentUser.firstName} ${currentUser.lastName}`"
            class="absolute top-3 left-3 w-8 h-8 rounded-full " />
          <!-- Textarea -->
          <textarea v-model="newComment"
            class="w-full border bg-white/90 rounded-2xl p-3 pl-14 pr-12 resize-y focus:ring-2 focus:ring-black focus:outline-none focus:border-transparent min-h-[60px]"
            placeholder="Write a comment...">
            </textarea>
          <!-- Submit Button -->
          <button type="submit"
            class="absolute bottom-3 right-3 text-neutral-600 hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="!newComment.trim()">
            <ArrowRightIcon class="h-6 w-6" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ArrowRightIcon, HeartIcon } from '@heroicons/vue/24/outline';
import ChevronDropdown from '@/components/ChevronDropdown.vue';
import LikeLine from '@/components/LikeLine.vue';

export default {
  name: 'CommentsSection',
  components: {
    ChevronDropdown,
    ArrowRightIcon,
    HeartIcon,
    LikeLine
  },
  props: {
    comments: {
      type: Array,
      required: true
    },
    currentUser: {
      type: Object,
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
          userid: this.currentUser.userid,
          firstName: this.currentUser.firstName,
          lastName: this.currentUser.lastName,
          profileImage: this.currentUser.profileImage,
          comment: this.newComment.trim(),
          commentLikedBy: [],
          commentedByUserId: this.currentUser.userid,
          commentedAt: new Date().toISOString()
        });
        this.newComment = "";
      }
    },
    toggleLike(index) {
      const comment = this.comments[index];
      const currentUserId = String(this.currentUser.userid);
      if (comment.commentLikedBy.includes(currentUserId)) {
        comment.commentLikedBy = comment.commentLikedBy.filter(id => id !== currentUserId);
      } else {
        comment.commentLikedBy.push(currentUserId);
      }
    }
  }
}
</script>
