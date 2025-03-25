<template>
  <div class="flex items-center justify-center py-12">
    <div class="bg-white rounded-lg shadow-xl max-w-6xl w-full p-8">
      <div class="mb-8 text-center">
        <h2 class="text-3xl font-extrabold text-gray-900">Account Details</h2>
        <p class="mt-2 text-sm text-gray-600">Manage your personal and business information below</p>
      </div>

      <!-- Form Section -->
      <form class="space-y-8" @submit.prevent="handleSubmit">
        <!-- Personal Information Section -->
        <section>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Personal Information</h3>
          <div class="flex flex-col md:flex-row md:space-x-6">
            <!-- Profile Picture -->
            <div class="flex flex-col items-center md:w-1/3">
              <img src="https://randomuser.me/api/portraits/men/50.jpg" alt="profile"
                   class="w-24 h-24 md:w-46 md:h-46 rounded-full border-2 border-white shadow-md cursor-pointer" />
              <p class="mt-2 text-sm text-gray-600">Click picture to update</p>
            </div>
            <!-- Name & Email Fields -->
            <div class="md:w-2/3 grid grid-cols-1 gap-4">
              <div>
                <label for="first-name" class="block text-sm font-medium text-gray-700">First Name</label>
                <input id="first-name" type="text" placeholder="First Name"
                       v-model="form.firstName"
                       class="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label for="last-name" class="block text-sm font-medium text-gray-700">Last Name</label>
                <input id="last-name" type="text" placeholder="Last Name"
                       v-model="form.lastName"
                       class="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label for="personal-email" class="block text-sm font-medium text-gray-700">Personal Email</label>
                <input id="personal-email" type="email" placeholder="john.doe@gmail.com"
                       v-model="form.personalEmail"
                       class="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
            </div>
          </div>
          <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="phone-number" class="block text-sm font-medium text-gray-700">Phone Number</label>
              <input id="phone-number" type="tel" placeholder="Phone Number"
                     v-model="form.phoneNumber"
                     class="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label for="birthday" class="block text-sm font-medium text-gray-700">Birthday</label>
              <input id="birthday" type="date" 
                     v-model="form.birthday"
                     class="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
          </div>
        </section>

        <!-- Business Information Section -->
        <section>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Business Information</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
              <input id="username" type="text" placeholder="Username"
                     v-model="form.username"
                     class="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label for="business-email" class="block text-sm font-medium text-gray-700">Email</label>
              <input id="business-email" type="email" placeholder="john.doe@company.com"
                     v-model="form.businessEmail"
                     class="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label for="department" class="block text-sm font-medium text-gray-700">Department</label>
              <input id="department" type="text" placeholder="Department"
                     v-model="form.department"
                     class="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
          </div>
          <div class="mt-6">
            <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
            <select id="location"
                    v-model="form.location"
                    class="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
              <option value="" disabled>Select a location</option>
              <option value="Hungary__Budapest">Hungary - Budapest</option>
              <option value="Hungary__Szeged">Hungary - Szeged</option>
              <option value="Sweden__City1">Sweden - City1</option>
              <option value="Sweden__City2">Sweden - City2</option>
              <option value="Sweden__City3">Sweden - City3</option>
              <option value="Sweden__City4">Sweden - City4</option>
            </select>
          </div>
        </section>

        <!-- Extra Information Section -->
        <section>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Extra Information</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="education" class="block text-sm font-medium text-gray-700">Education</label>
              <input id="education" type="text" placeholder="Education (e.g., Bachelor's Degree)"
                     v-model="form.education"
                     class="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label for="food-allergies" class="block text-sm font-medium text-gray-700">Food Allergies</label>
              <input id="food-allergies" type="text" placeholder="List any food allergies"
                     v-model="form.foodAllergies"
                     class="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
          </div>
          <div class="mt-4">
            <label for="website" class="block text-sm font-medium text-gray-700">Website</label>
            <input id="website" type="url" placeholder="https://yourwebsite.com"
                   v-model="form.website"
                   class="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div class="mt-4">
            <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
            <textarea id="description" placeholder="Write a brief description"
                      v-model="form.description"
                      class="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
          </div>
        </section>

        <!-- Submit Button -->
        <div class="mt-8 text-center">
          <button type="submit"
                  class="w-full md:w-auto bg-indigo-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserView",
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        personalEmail: "",
        phoneNumber: "",
        birthday: "",
        username: "",
        businessEmail: "",
        department: "",
        location: "",
        education: "",
        foodAllergies: "",
        website: "",
        description: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      // TODO: implement form submission logic
      console.log("Form submitted:", this.form);
    }
  }
};
</script>