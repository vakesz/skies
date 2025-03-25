<template>
  <div class="container mx-auto px-4 py-8 flex flex-col items-center">
    <EventDetails 
      :eventTitle="eventTitle"
      :eventImage="eventImage"
      :eventDescription="eventDescription"
      :writtenBy="writtenBy"
      :lastEdited="lastEdited"
      :eventDate="eventDate"
      :eventPlace="eventPlace"
      :createdAt="createdAt"
    />
    <AttendeesList :attendees="attendees" />
    <CommentsSection :comments="comments" :currentUser="currentUser" />
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import EventDetails from '@/components/EventDetails.vue';
import AttendeesList from '@/components/AttendeesList.vue';
import CommentsSection from '@/components/CommentsSection.vue';

// TODO: Replace this with your actual data source
import postsJson from '@/assets/posts.json'

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
  data() {
    return {
      createdAt: '',
      eventTitle: '',
      eventImage: '',
      eventDescription: '',
      eventDate: '',
      eventPlace: '',
      writtenBy: '',
      lastEdited: '',
      attendees: [],
      comments: [],
      currentUser: {}
    }
  },
  created() {
    try {
      const key = this.eventKey;
      if (!key) {
        throw new Error('Missing eventKey in component props.');
      }
      let eventsObject = postsJson;

      if (!eventsObject) {
        throw new Error('No events found in the database.');
      }

      const event = eventsObject[key];
      if (!event) {
        throw new Error('Event not found in the database.');
      }

      this.createdAt = event.createdAt;
      this.eventTitle = event.eventTitle;
      this.eventImage = event.eventImage;
      this.eventDescription = event.eventDescription;
      this.eventDate = event.eventDate;
      this.eventPlace = event.eventPlace;
      this.writtenBy = event.writtenBy;
      this.lastEdited = event.lastEdited;
      this.attendees = event.attendees;
      this.comments = event.comments;
      this.currentUser = event.currentUser;
    } catch (error) {
      console.error('Error in DetailedPostView created hook:', error);
      const router = useRouter();
      router.push('/not-found');
    }
  }
}
</script>
