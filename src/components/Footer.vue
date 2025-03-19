<template>
    <footer class="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <aside>
            <img src="../assets/altlogoinv.png" alt="SKIES Logo" class="h-10" />
            <p>
                SKIES Industries Ltd.
                <br />
                Providing reliable solutions since 2001
            </p>
        </aside>
        <nav>
            <h6 class="footer-title">Socials</h6>
            <div class="grid grid-flow-col gap-4">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <YouTubeIcon />
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon />
                </a>
            </div>
        </nav>
    </footer>
</template>

<script setup>
import FacebookIcon from '@/components/icons/FacebookIcon.vue';
import TwitterIcon from '@/components/icons/TwitterIcon.vue';
import YouTubeIcon from '@/components/icons/YouTubeIcon.vue';
import LinkedInIcon from '@/components/icons/LinkedInIcon.vue';
</script>