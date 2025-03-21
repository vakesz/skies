<template>
   <div class="container mx-auto px-4 py-8">
      <!-- White card with event details -->
      <div class="bg-white/70 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-2xl w-full max-w-[1200px] overflow-hidden">
         <!-- Event image with title overlay -->
         <div class="relative overflow-hidden">
            <img :src="eventImage" alt="Event Image" class="w-full h-64 object-cover" />
            <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-white via-transparent to-transparent">
               <h2 class="text-3xl text-center font-semibold p-8 text-white text-shadow-lg drop-shadow-lg">{{ eventTitle }}</h2>
            </div>
         </div>
         <!-- Event description -->
         <p class="mt-6 pl-8 pr-8 text-lg text-gray-700 leading-relaxed" v-html="eventDescription"></p>

         <!-- Event time and place -->
         <div class="mt-6 pl-8 pr-8">
            <p class="text-sm text-gray-500 flex items-center">
               <span class="mr-2">📅</span>{{ eventTime }}
            </p>
            <p class="text-sm text-gray-500 mt-1 flex items-center">
               <span class="mr-2">📍</span>{{ eventPlace }}
            </p>
         </div>

         <!-- Attendee list -->
         <h4 class="mt-6 pl-8 pr-8 text-lg font-semibold text-gray-800">Attendees</h4>
         <div class="flex pl-8 pr-8 pb-8 mt-2 -space-x-2">
            <img v-for="(user, index) in attendees.slice(0, 5)" :key="index" :src="user.img" :alt="`User ${index + 1}`"
               class="w-12 h-12 rounded-full border-2 border-white transform hover:scale-110 transition duration-300" />
            <div v-if="attendees.length > 5"
               class="w-12 h-12 flex items-center justify-center bg-gray-800 text-white text-xs font-semibold rounded-full border-2 border-white">
               +{{ attendees.length - 5 }}
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
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
      };
   },
};
</script>
