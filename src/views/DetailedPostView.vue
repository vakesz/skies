<template>
   <div class="container mx-auto px-4 py-8 flex flex-col items-center">
      <!-- Main Event Card -->
      <div class="bg-white/70 backdrop-blur-lg rounded-lg overflow-hidden shadow-md hover:shadow-xl max-w-[1200px] w-full">
         <!-- Event Header -->
         <div class="relative">
            <img :src="eventImage" :alt="eventTitle" class="w-full h-64 object-cover" />
            <div
               class="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent flex items-center justify-center">
               <h2 class="text-2xl font-semibold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,1)] p-4">{{ eventTitle }}</h2>
            </div>
         </div>

         <div class="p-6">
            <!-- Event Info -->
            <div class="prose prose-gray">
               <div v-html="eventDescription"></div>
            </div>

            <!-- Time and Location -->
            <div class="mt-4 space-y-1 text-gray-500 text-sm">
               <p>📅 {{ eventTime }}</p>
               <p>📍 {{ eventPlace }}</p>
            </div>

            <!-- Attendees -->
            <div class="mt-4">
               <h4 class="font-semibold text-gray-800 mb-2">Attendees</h4>
               <div class="flex -space-x-2">
                  <img v-for="(user, index) in displayedAttendees" :key="index" :src="user.img"
                     :alt="`Attendee ${index + 1}`"
                     class="w-10 h-10 rounded-full border-2 border-white hover:scale-110 transition-transform" />
                  <div v-if="extraAttendeesCount > 0"
                     class="w-10 h-10 rounded-full border-2 border-white bg-gray-800 text-white flex items-center justify-center text-xs">
                     +{{ extraAttendeesCount }}
                  </div>
               </div>
            </div>
         </div>
      </div>

      <!-- Comments Section -->
      <div class="overflow-hidden max-w-[1200px] w-full mt-8">
         <h4 class="font-semibold text-gray-800 mb-4">Comments</h4>
         
         <!-- Comment Cards -->
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
                                class="flex items-center space-x-1 text-sm text-gray-500 hover:text-blue-500 transition-colors"
                                :class="{ 'text-blue-500': comment.isLiked }">
                           <svg xmlns="http://www.w3.org/2000/svg" 
                                class="h-5 w-5" 
                                :class="{ 'fill-blue-500': comment.isLiked, 'fill-gray-500': !comment.isLiked }"
                                viewBox="0 0 20 20" 
                                fill="currentColor">
                              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                           </svg>
                           <span>{{ comment.likes }} {{ comment.likes === 1 ? 'Like' : 'Likes' }}</span>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <!-- Comment Form -->
         <form @submit.prevent="addComment" class="mt-6 bg-white rounded-lg shadow p-4 transition-shadow hover:shadow-md">
            <div class="flex items-center space-x-3 mb-2">
               <img :src="currentUser.img" 
                    :alt="currentUser.name"
                    class="w-8 h-8 rounded-full" />
               <span class="font-medium text-gray-700">{{ currentUser.name }}</span>
            </div>
            <div class="relative">
               <textarea 
                  v-model="newComment" 
                  class="w-full border rounded-lg p-3 pr-12 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[60px]" 
                  placeholder="Write a comment...">
               </textarea>
               <button 
                  type="submit" 
                  class="absolute bottom-3 right-3 text-blue-500 hover:text-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  :disabled="!newComment.trim()">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
               </button>
            </div>
         </form>
      </div>
   </div>
</template>

<script>
export default {
   name: 'EventCard',
   data() {
      return {
         eventTitle: "New UI: A Glimpse Into the Future 2025",
         eventImage: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?cs=srgb&dl=pexels-joshsorenson-976866.jpg&fm=jpg",
         eventDescription: "JetBrains first released our IDEs in January 2001. Since then, many incremental changes have\
          occurred to the UI we all know and love. Recently, weve made the most significant leap in UI design since launch.\
          New UI will improve the user experience of all products, and we know youll love its fresh and new perspective on productivity.<br>\
          <br>In this webinar, join our JetBrains Advocates as they share the New UI with you, giving you a glimpse at some of the visual \
          improvements. Then, follow along as they code, run, and debug projects in the New UI while offering advice and answering your questions.<br> \
          <br>Register for an email reminder and a link to the recoding after the event: \
          <a class=\"font-semibold\" href=\"\">https://info.jetbrains.com/jetbrains-webinar-october31-2022.html</a><br> \
          <br>About the Presenters:<br>Khalid Abuhakmeh is a .NET Developer Advocate at JetBrains. He has worked with .NET for over 15 years in various \
          organizations. Khalid is also known for his blogging about .NET topics and helpfulness on social media platforms.<br><br>Paul Everitt \
          is a Developer Advocate at JetBrains. Before that, Paul was a co-founder of Zope Corporation, taking the first open source application \
          server through $14M of funding. Paul has bootstrapped both the Python Software Foundation and the Plone Foundation. Prior to that, \
          Paul was an officer in the US Navy, starting <a class=\"font-semibold\" href=\"\">www.navy.mil</a> in 1993.<br><br>Helen Scott is a Java Developer Advocate at JetBrains. \
          She has worked at numerous software companies in the last 20 years and has experienced the development cycle at all stages in \
          various roles throughout that time. Helen loves to learn new tools and technologies, create content about that journey and \
          share it with the community.",
         eventTime: "March 25, 2025 | 9:00 AM - 6:00 PM",
         eventPlace: "New York, NY",
         attendees: [
            { img: "https://randomuser.me/api/portraits/men/32.jpg" },
            { img: "https://randomuser.me/api/portraits/women/44.jpg" },
            { img: "https://randomuser.me/api/portraits/men/50.jpg" }
         ],
         currentUser: {
            name: 'Current User',
            img: 'https://randomuser.me/api/portraits/women/85.jpg'
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
         ], // Array to store comments
         newComment: "" // Model for the new comment input
      }
   },
   computed: {
      displayedAttendees() {
         return this.attendees.slice(0, 5)
      },
      extraAttendeesCount() {
         return Math.max(0, this.attendees.length - 5)
      }
   },
   methods: {
      addComment() {
         if (this.newComment.trim()) {
            this.comments.push({
               text: this.newComment.trim(),
               user: 0, // You might want to update this to match currentUser's index in commenters array
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