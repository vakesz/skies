<template>
	<section class="flex min-h-screen h-full items-center p-16">
	  <div class="container mx-auto flex flex-col items-center justify-center px-5 text-center">
		 <h2 class="text-9xl font-extrabold">404</h2>
		 <p class="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
		 <p class="mt-4 mb-8">But don’t worry, you can find plenty of other things on our homepage.</p>
		 <button @click="goHome" class="btn px-8 py-3 font-semibold rounded">
			Back to homepage
		 </button>
	  </div>
	</section>
 </template>
 
 <script setup>
 import { useRouter } from 'vue-router';
 
 const router = useRouter();
 const goHome = () => router.push('/');
 </script>
 