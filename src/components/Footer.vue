<template>
    <footer class="bg-gray-900 text-gray-100 p-10">
        <div class="max-w-[1200px] mx-auto flex flex-col">
            <!-- Main content -->
            <div class="flex flex-col sm:flex-row justify-between items-start mb-8">
                <!-- Left section with logo -->
                <aside class="w-full sm:w-auto">
                    <img src="../assets/altlogoinv.png" alt="SKIES Logo" class="h-10" />
                    <p class="mt-4">
                        SKIES Industries Ltd.
                        <br />
                        Providing reliable solutions since 2001
                    </p>
                </aside>

                <!-- Right section with social links -->
                <nav class="mt-8 sm:mt-0">
                    <h6 class="text-sm font-semibold uppercase mb-4 md:text-right sm:text-left">Socials</h6>
                    <div class="flex gap-4">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"
                           class="hover:text-blue-400 transition-colors">
                            <LinkedInIcon />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                           class="hover:text-red-500 transition-colors">
                            <YouTubeIcon />
                        </a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer"
                           class="hover:text-blue-400 transition-colors">
                            <TwitterIcon />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                           class="hover:text-blue-500 transition-colors">
                            <FacebookIcon />
                        </a>
                    </div>
                </nav>
            </div>

            <!-- Copyright section -->
            <div class="pt-8 mt-8 border-t border-gray-700 text-center text-sm text-gray-400">
                <p>&copy; {{ currentYear }} SKIES Industries Ltd. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import FacebookIcon from '@/components/icons/FacebookIcon.vue';
import TwitterIcon from '@/components/icons/TwitterIcon.vue';
import YouTubeIcon from '@/components/icons/YouTubeIcon.vue';
import LinkedInIcon from '@/components/icons/LinkedInIcon.vue';

const currentYear = new Date().getFullYear();
</script>