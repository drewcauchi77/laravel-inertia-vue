<script setup>
import { computed } from 'vue';
import { usePage, Head } from '@inertiajs/vue3';
import Navigation from './Navigation.vue';

const page = usePage();

const username = computed(() => {
    return page.props.auth.user.username;
});
</script>

<template>
    <Head title="My App" />
    <section class="p-6 bg-gray-200">
        <header class="flex justify-between">
            <div class="flex items-center">
                <h1 class="font-bold text-lg">My App</h1>
                <span class="text-sm ml-4">Welcome back, {{ username }}!</span>
            </div>
            <Navigation />
        </header>
    </section>
    <section class="p-6">
        <div class="max-w-3xl m-auto">
            <slot />
        </div>
    </section>
</template>



<style lang="scss" scoped>

</style>