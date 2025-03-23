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
    <CommentsSection :comments="comments" :currentUser="currentUser" :commenters="commenters" />
  </div>
</template>

<script>
import EventDetails from '@/components/EventDetails.vue';
import AttendeesList from '@/components/AttendeesList.vue';
import CommentsSection from '@/components/CommentsSection.vue';

export default {
  name: 'DetailedPostView',
  components: {
    EventDetails,
    AttendeesList,
    CommentsSection
  },
  data() {
    return {
      eventTitle: "New UI: A Glimpse Into the Future 2025",
      eventImage: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg",
      eventDescription: "JetBrains first released our IDEs in January 2001. Since then, many incremental changes have occurred to the UI we all know and love. Recently, we've made the most significant leap in UI design since launch. New UI will improve the user experience of all products, and we know you'll love its fresh and new perspective on productivity. <br><br>In this webinar, join our JetBrains Advocates as they share the New UI with you, giving you a glimpse at some of the visual improvements. Then, follow along as they code, run, and debug projects in the New UI while offering advice and answering your questions.<br><br>Register for an email reminder and a link to the recoding after the event: <a class=\"font-semibold\" href=\"\">https://info.jetbrains.com/jetbrains-webinar-october31-2022.html</a><br><br>About the Presenters:<br>Khalid Abuhakmeh is a .NET Developer Advocate at JetBrains. He has worked with .NET for over 15 years in various organizations. Khalid is also known for his blogging about .NET topics and helpfulness on social media platforms.<br><br>Paul Everitt is a Developer Advocate at JetBrains. Before that, Paul was a co-founder of Zope Corporation, taking the first open source application server through $14M of funding. Paul has bootstrapped both the Python Software Foundation and the Plone Foundation. Prior to that, Paul was an officer in the US Navy, starting <a class=\"font-semibold\" href=\"\">www.navy.mil</a> in 1993.<br><br>Helen Scott is a Java Developer Advocate at JetBrains. She has worked at numerous software companies in the last 20 years and has experienced the development cycle at all stages in various roles throughout that time. Helen loves to learn new tools and technologies, create content about that journey and share it with the community.",
      eventDate: "March 25, 2025",
      eventTime: "10:00 AM - 12:00 PM",
      eventPlace: "New York, NY",
      writtenBy: "John Doe",
      lastEdited: "March 20, 2025",
      attendees: [
         { img: "https://randomuser.me/api/portraits/men/32.jpg", name: "John Smith", info: "Interested in networking" },
         { img: "https://randomuser.me/api/portraits/women/44.jpg", name: "Jane Doe" },
         { img: "https://randomuser.me/api/portraits/men/50.jpg", name: "John Doe" }
      ],
      currentUser: {
         name: 'Mia Komisky',
         img: 'https://randomuser.me/api/portraits/women/90.jpg'
      },
      commenters: [
         { name: 'Sarah Johnson', img: 'https://randomuser.me/api/portraits/women/32.jpg' },
         { name: 'Michael Chen', img: 'https://randomuser.me/api/portraits/men/44.jpg' },
         { name: 'Emma Davis', img: 'https://randomuser.me/api/portraits/women/65.jpg' }
      ],
      comments: [
         {
            text: "This event looks amazing! Can't wait to attend.",
            user: 0,
            timestamp: "2 hours ago",
            likes: 0,
            isLiked: false
         },
         {
            text: "Great lineup of speakers. Looking forward to it!",
            user: 1,
            timestamp: "1 hour ago",
            likes: 0,
            isLiked: false
         },
         {
            text: "The new UI sounds promising. Excited to see it in action!",
            user: 2,
            timestamp: "30 minutes ago",
            likes: 0,
            isLiked: false
         }
      ]
    }
  }
}
</script>