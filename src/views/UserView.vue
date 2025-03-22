<template>
  <div class="container mx-auto px-4 py-8 flex flex-col items-center">
    <!-- Card Container -->
    <div class="bg-neutral-100 p-8 backdrop-blur-lg rounded-lg shadow-lg max-w-[1200px] w-full">
      <!-- Header Section -->
      <div class="relative text-center mb-8">
        <h2 class="text-3xl font-bold text-gray-800">Account Details</h2>
        <div class="mt-4">
          <img src="https://randomuser.me/api/portraits/men/50.jpg" alt="profile"
            class="w-32 h-32 rounded-full border-4 border-white shadow-md mx-auto" />
          <h3 class="text-xl font-semibold text-gray-700 mt-4">John Doe</h3>
        </div>
      </div>

      <!-- Form Section -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <!-- Personal Info Section -->
        <div class="col-span-2">
          <h3 class="text-lg font-semibold text-gray-800 mt-4 mb-2">Personal Information</h3>
        </div>

        <!-- First Name Field -->
        <div class="flex flex-col">
          <label for="first-name" class="font-medium text-gray-700">First Name</label>
          <input id="first-name" placeholder="First Name"
            class="w-full rounded-md bg-white px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-black"
            aria-label="First Name" />
        </div>

        <!-- Last Name Field -->
        <div class="flex flex-col">
          <label for="last-name" class="font-medium text-gray-700">Last Name</label>
          <input id="last-name" placeholder="Last Name"
            class="w-full rounded-md bg-white px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-black"
            aria-label="Last Name" />
        </div>

        <!-- Personal Email Field -->
        <div class="flex flex-col">
          <label for="personal-email" class="font-medium text-gray-700">Personal Email</label>
          <input id="personal-email" placeholder="john.doe@gmail.com"
            class="w-full rounded-md bg-white px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-black"
            aria-label="Personal Email" />
        </div>

        <!-- Phone Number Field -->
        <div class="flex flex-col">
          <label for="phone-number" class="font-medium text-gray-700">Phone Number</label>
          <input id="phone-number" type="tel" placeholder="Phone Number"
            class="w-full rounded-md bg-white px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-black"
            aria-label="Phone Number" />
        </div>

        <!-- Birthday Field -->
        <div class="flex flex-col">
          <label for="birthday" class="font-medium text-gray-700">Birthday</label>
          <input id="birthday" type="date"
            class="w-full rounded-md bg-white px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-black"
            aria-label="Birthday" />
        </div>

        <!-- Upload Photo -->
        <div class="flex flex-col">

          <label for="photo" class="font-medium text-gray-700">Upload photo</label>
          <input
            class="w-full rounded-md bg-white px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-black"
            aria-describedby="file_input_help" id="photo" type="file">
        </div>

        <!-- Business Info Section -->
        <div class="col-span-2">
          <h3 class="text-lg font-semibold text-gray-800 mt-4 mb-2">Business Information</h3>
        </div>

        <!-- Username Field -->
        <div class="flex flex-col">
          <label for="username" class="font-medium text-gray-700">Username</label>
          <input id="username" placeholder="Username"
            class="w-full rounded-md bg-white px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-black"
            aria-label="Username" />
        </div>

        <!-- Business Email Field -->
        <div class="flex flex-col">
          <label for="business-email" class="font-medium text-gray-700">Email</label>
          <input id="business-email" placeholder="john.doe@company.com"
            class="w-full rounded-md bg-white px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-black"
            aria-label="Business Email" />
        </div>

        <!-- Department Field -->
        <div class="flex flex-col">
          <label for="department" class="font-medium text-gray-700">Department</label>
          <input id="department" placeholder="Department"
            class="w-full rounded-md bg-white px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-black"
            aria-label="Department" />
        </div>

        <!-- Location Field -->
        <div class="flex flex-col">
          <label for="location" class="font-medium text-gray-700">Location</label>
          <select id="location"
            class="w-full rounded-md bg-white px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-black"
            aria-label="Location">
            <option value="" disabled selected>Select a location</option>
            <option value="Hungary__Budapest">Hungary - Budapest</option>
            <option value="Hungary__Szeged">Hungary - Szeged</option>
            <option value="Sweden__City1">Sweden - City1</option>
            <option value="Sweden__City2">Sweden - City2</option>
            <option value="Sweden__City3">Sweden - City3</option>
            <option value="Sweden__City4">Sweden - City4</option>
            <!-- Add more countries as needed -->
          </select>
        </div>

        <!-- Extra Info Section -->
        <div class="col-span-2">
          <h3 class="text-lg font-semibold text-gray-800 mt-4 mb-2">Extra Information</h3>
        </div>

        <!-- Education Field -->
        <div class="flex flex-col">
          <label for="education" class="font-medium text-gray-700">Education</label>
          <input id="education" placeholder="Education (e.g., Bachelor's Degree)"
            class="w-full rounded-md bg-white px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-black"
            aria-label="Education" />
        </div>

        <!-- Food Allergies Field -->
        <div class="flex flex-col">
          <label for="food-allergies" class="font-medium text-gray-700">Food Allergies</label>
          <input id="food-allergies" placeholder="List any food allergies"
            class="w-full rounded-md bg-white px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-black"
            aria-label="Food Allergies" />
        </div>

        <!-- Description Field -->
        <div class="flex flex-col sm:col-span-2">
          <label for="description" class="font-medium text-gray-700">Description</label>
          <textarea id="description" placeholder="Write a brief description"
            class="w-full rounded-md bg-white px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-black"
            aria-label="Description"></textarea>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="mt-8 text-center">
        <button
          class="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Save Changes
        </button>
      </div>
    </div>
  </div>
</template>