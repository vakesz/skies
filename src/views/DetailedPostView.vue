<template>
  <div class="container mx-auto px-4 py-8 flex flex-col items-center">
    <EventDetails 
      :eventTitle="eventTitle"
      :eventImage="eventImage"
      :eventDescription="eventDescription"
      :writtenBy="writtenBy"
      :lastEdited="lastEdited"
      :eventTime="eventTime"
      :eventDate="eventDate"
      :eventPlace="eventPlace"
    />
    <AttendeesList :attendees="attendees" />
    <CommentsSection :comments="comments" :currentUser="currentUser" />
  </div>
</template>

<script>
import { ref } from 'vue';
import EventDetails from '@/components/EventDetails.vue';
import AttendeesList from '@/components/AttendeesList.vue';
import CommentsSection from '@/components/CommentsSection.vue';
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
      eventTitle: '',
      eventImage: '',
      eventDescription: '',
      eventDate: '',
      eventTime: '',
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
      console.log('key:', key);
      
      let eventsObject = postsJson;

      if (!eventsObject) {
        throw new Error('No events found in the database.');
      }

      const event = eventsObject[key];
      if (!event) {
        throw new Error('Event not found in the database.');
      }

      this.eventTitle = event.eventTitle;
      this.eventImage = event.eventImage;
      this.eventDescription = event.eventDescription;
      this.eventDate = event.eventDate;
      this.eventTime = event.eventTime;
      this.eventPlace = event.eventPlace;
      this.writtenBy = event.writtenBy;
      this.lastEdited = event.lastEdited;
      this.attendees = event.attendees;
      this.comments = event.comments;
      this.currentUser = event.currentUser;
      
      
    } catch (error) {
      console.error('Error in DetailedPostView created hook:', error);
      // Optionally navigate to a "not found" pa  ge or display a user-friendly error message.
      this.$router.replace({ name: 'NotFoundView' });
    }
  }
}
</script>