<script setup lang="ts">
import Postcard from '@/components/Postcard.vue'

//TODO: Replace with actual data from the backend
import postsJson from '@/assets/posts.json'
</script>

<template>
  <div class="flex flex-col items-center justify-center mx-auto max-w-6xl w-full px-4 gap-6 my-6">
    <Postcard
      v-for="(value, key) in postsJson"
      :postId="key"
      :postType="value.postType"
      :event="{
        title: value.eventTitle,
        image: value.eventImage,
        description: value.eventDescription,
        date: value.eventDate,
        time: value.eventTime,
        location: value.eventPlace,
        tags: value.eventTags,
        attendees: value.attendees
      }"
      :stats="{
        likes: value.postLikedBy.length,
        comments: value.comments.length,
        going: value.attendees.length
      }"
    />
  </div>
</template>