<template>
   <div class="flex items-center justify-center py-12">
      <div class="bg-white rounded-lg shadow-xl max-w-6xl w-full p-8">
         <div class="mb-8 text-center">
            <h2 class="text-3xl font-extrabold text-gray-900">Settings</h2>
            <p class="mt-2 text-sm text-gray-600">Customize your preferences below</p>
         </div>

         <!-- Settings Form -->
         <form @submit.prevent="saveSettings" class="space-y-8">
            <!-- General Settings -->
            <div>
               <h3 class="text-2xl font-bold text-gray-800 mb-4">General Settings</h3>
               <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <label class="block text-sm text-gray-700">Posts on Home Page</label>
                  <select v-model="settings.postsOnHomePage"
                     class="mt-2 mb-2 p-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-700 focus:border-blue-700">
                     <option value="10">10</option>
                     <option value="25">25</option>
                     <option value="50">50</option>
                  </select>

                  <label class="block text-sm text-gray-700">Language Settings</label>
                  <select v-model="settings.language"
                     class="mt-2 p-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-700 focus:border-blue-700">
                     <option value="hu">Hungarian</option>
                     <option value="en">English</option>
                     <option value="swe">Swedish</option>
                  </select>
               </div>
            </div>

            <!-- UI Settings -->
            <div>
               <h3 class="text-2xl font-bold text-gray-800 mb-4">UI Settings</h3>
               <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <label class="block text-sm text-gray-700">Theme Settings</label>
                  <select v-model="settings.theme"
                     class="mt-2 p-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-700 focus:border-blue-700">
                     <option value="light">Light</option>
                     <option value="dark">Dark</option>
                     <option value="auto">Auto</option>
                  </select>

                  <ToggleSwitch v-model="settings.openComments" label="Open Comments by Default" />
                  <ToggleSwitch v-model="settings.openAttendeeList" label="Open Attendee List by Default" />
                  <ToggleSwitch v-model="settings.showAddToCalendar" label="Show Add to Calendar Button" />
                  <ToggleSwitch v-model="settings.hideCreateEvent" label="Hide Create Event Button" />
                  <ToggleSwitch v-model="settings.enableEditor" label="Enable Markdown or Rich Text Editor" />
                  <ToggleSwitch v-model="settings.enableCompactMode" label="Enable Compact Mode" />
               </div>
            </div>

            <!-- Notification Settings -->
            <div>
               <h3 class="text-2xl font-bold text-gray-800 mb-4">Notification Settings</h3>
               <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <label class="block text-sm text-gray-700">Allow New Colleague Notifications</label>
                  <select v-model="settings.newColleagueNotifications"
                     class="mt-2 p-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-700 focus:border-blue-700">
                     <option value="all">All</option>
                     <option value="location">Your Location</option>
                     <option value="none">None</option>
                  </select>

                  <label class="block text-sm text-gray-700">Allow Birthday Notifications</label>
                  <select v-model="settings.birthdayNotifications"
                     class="mt-2 p-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-700 focus:border-blue-700">
                     <option value="all">All</option>
                     <option value="location">Your Location</option>
                     <option value="none">None</option>
                  </select>
                  <ToggleSwitch v-model="settings.enableDesktopNotifications" label="Enable Desktop Notifications" />
                  <ToggleSwitch v-model="settings.enableEmailNotifications" label="Enable Email Notifications" />
                  <ToggleSwitch v-model="settings.disableHelpTips" label="Disable Help Tips" />
               </div>
            </div>

            <!-- Calendar Settings -->
            <div>
               <h3 class="text-2xl font-bold text-gray-800 mb-4">Calendar Settings</h3>
               <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <label class="block text-sm text-gray-700">Calendar Settings</label>
                  <select v-model="settings.calendarSettings"
                     class="mt-2 p-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-700 focus:border-blue-700">
                     <option value="7">7 Days</option>
                     <option value="14">14 Days</option>
                     <option value="30">30 Days</option>
                  </select>
               </div>
            </div>
            <div class="mt-8 text-center">
               <button type="submit"
                  class="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2">
                  Save Settings
               </button>
            </div>
         </form>
      </div>
   </div>
</template>

<script>
import VueCookies from 'vue-cookies';
import ToggleSwitch from '@/components/ToggleSwitch.vue';

const defaultSettings = {
   postsOnHomePage: '10',
   language: 'en',
   theme: 'light',
   openComments: true,
   openAttendeeList: false,
   showAddToCalendar: false,
   hideCreateEvent: false,
   enableEditor: false,
   enableCompactMode: false,
   newColleagueNotifications: 'all',
   birthdayNotifications: 'all',
   enableDesktopNotifications: false,
   enableEmailNotifications: false,
   calendarSettings: '7',
   disableHelpTips: false,
};

export default {
   name: 'SettingsView',
   components: {
      ToggleSwitch,
   },
   data() {
      return {
         settings: { ...defaultSettings },
      };
   },
   created() {
      Object.keys(this.settings).forEach(key => {
         const cookieVal = VueCookies.get(key);
         if (cookieVal !== undefined) {
            this.settings[key] = typeof defaultSettings[key] === 'boolean'
               ? cookieVal === 'true'
               : cookieVal;
         }
      });
   },
   methods: {
      saveSettings() {
         Object.entries(this.settings).forEach(([key, value]) => {
            VueCookies.set(key, value, '7d');
         });
         alert('Settings saved!');
      },
   },
};
</script>