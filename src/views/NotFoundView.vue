<template>
    <section class="flex min-h-screen h-full items-center p-16">
        <div class="container mx-auto flex flex-col items-center justify-center px-5 text-center">
            <h2 class="text-9xl font-extrabold">404</h2>
            <p class="text-2xl font-semibold md:text-3xl">
                Sorry, we couldn't find this page.
            </p>
            <p class="mt-4 mb-8">
                But don’t worry, you can find plenty of other things on our homepage.
            </p>
            <button
                @click="goHome"
                class="px-8 py-3 font-semibold rounded bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-200 cursor-pointer"
            >
                Back to homepage
            </button>
        </div>
    </section>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goHome() {
    router.push('/');
}
</script>
