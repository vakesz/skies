<template>
   <div class="max-w-[1200px] min-h-screen w-full mx-auto px-4 py-6 flex flex-col gap-6">
     <div class="flex flex-col sm:flex-row sm:items-start py-4">
       <div class="mr-auto sm:py-3">
         <p class="font-medium">Account Details</p>
         <p class="text-sm text-gray-600">Edit your account details</p>
       </div>
     </div>
 
     <div class="flex flex-col sm:flex-row gap-4 py-4">
       <label for="name" class="w-32 font-medium">Name</label>
       <input
         id="name"
         placeholder="Name"
         class="w-full rounded-md bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1 sm:mr-4"
       />
     </div>
 
     <div class="flex flex-col sm:flex-row gap-4 py-4">
       <label for="email" class="w-32 font-medium">Email</label>
       <input
         id="email"
         placeholder="your.email@domain.com"
         class="w-full rounded-md bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
       />
     </div>
 
     <!-- Description Field -->
     <div class="flex flex-col sm:flex-row gap-4 py-4">
       <label for="description" class="w-32 font-medium">Description</label>
       <textarea
         id="description"
         placeholder="Write a brief description"
         class="w-full rounded-md bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1 sm:mr-4"
       ></textarea>
     </div>
 
     <!-- Upload Photo -->
     <div class="flex flex-col sm:flex-row gap-4 py-4">
       <label for="photo" class="w-32 font-medium">Upload Photo</label>
       <input
         id="photo"
         type="file"
         class="w-full rounded-md bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1 sm:mr-4"
       />
     </div>
   </div>
 </template>
 