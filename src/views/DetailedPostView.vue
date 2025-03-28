<template>
  <div class="flex flex-col items-center justify-center mx-auto max-w-6xl w-full px-4 gap-6 my-6">
    <EventDetails 
      :eventTitle="eventData.eventTitle"
      :eventImage="eventData.eventImage"
      :eventDescription="eventData.eventDescription"
      :writtenBy="eventData.writtenBy"
      :lastEdited="eventData.lastEdited"
      :eventDate="eventData.eventDate"
      :eventPlace="eventData.eventPlace"
      :createdAt="eventData.createdAt"
      :postLikedBy="eventData.postLikedBy"
      :currentUserId="eventData.currentUser.userid"
    />
    <AttendeesList v-if="eventData.attendees.length" :attendees="eventData.attendees" />
    <CommentsSection :comments="eventData.comments" :currentUser="eventData.currentUser" />
  </div>
</template>

<script>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import EventDetails from '@/components/EventDetails.vue';
import AttendeesList from '@/components/AttendeesList.vue';
import CommentsSection from '@/components/CommentsSection.vue';

// TODO: Replace this with your actual data source
import postsJson from '@/assets/posts.json';

export default {
  name: 'DetailedPostView',
  props: {
    eventKey: {
      type: String,
      required: true
    }
  },
  components: {
    EventDetails,
    AttendeesList,
    CommentsSection
  },
  setup(props) {
    const router = useRouter();
    const eventData = reactive({
      createdAt: {type: Date, default: null},
      eventTitle: '',
      eventImage: '',
      eventDescription: '',
      eventDate: {type: Date, default: null},
      eventPlace: '',
      writtenBy: '',
      postLikedBy: [],
      lastEdited: {type: Date, default: null},
      attendees: [],
      comments: [],
      currentUser: {}
    });

    try {
      const key = props.eventKey;
      if (!key) {
        throw new Error('Missing eventKey in component props.');
      }

      const eventsObject = postsJson;
      if (!eventsObject) {
        throw new Error('No events found in the database.');
      }

      const event = eventsObject[key];
      if (!event) {
        throw new Error('Event not found in the database.');
      }

      Object.assign(eventData, event);
    } catch (error) {
      console.error('Error in DetailedPostView setup:', error);
      router.push('/not-found');
    }

    return {
      eventData
    };
  }
};
</script>
