<script setup>
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    links: Array
})
</script>

<template>
    <div class="mt-6">
        <template v-for="link in links">
            <Link v-if="link.url" :href="link.url" v-html="link.label" class="px-1" :class="{ 'font-bold' : link.active }"></Link>
            <span v-else v-html="link.label" class="text-gray-400"></span>
        </template>
    </div>
</template>

<style lang="scss" scoped>

</style>