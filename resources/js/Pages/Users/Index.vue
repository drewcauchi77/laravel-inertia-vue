<script setup>
import { ref, watch } from 'vue';
import { Link, Head, router } from '@inertiajs/vue3';
import Pagination from '../../Shared/Pagination.vue';
import debounce from 'lodash/debounce';

const props = defineProps({
    users: Object,
    filters: Object,
    can: Object,
})

const search = ref(props.filters.search);

watch(search, debounce(function (value) {
    router.get('/users', { search: value }, {
        preserveState: true,
        replace: true,
    });
}, 300))
</script>

<template>
    <Head title="Users"></Head>
    <div class="flex justify-between mb-6">
        <div class="flex items-center">
            <h1 class="text-3xl">Users</h1>
            <Link href="/users/create" v-if="can.createUser" class="text-blue-500 text-sm ml-3">Create User</Link>
        </div>

        <input v-model="search" type="text" class="border px-2" placeholder="Search...">
    </div>

    <ul role="list" class="divide-y divide-gray-100 mt-6">
        <li v-for="user in users.data" :key="user.id" class="flex justify-between gap-x-6 py-5">
            <div class="flex min-w-0 gap-x-4">
                <div class="min-w-0 flex-auto">
                <p class="text-sm font-semibold leading-6 text-gray-900">{{ user.name }}</p>
                </div>
            </div>
            <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <Link :href="`/users/${user.id}/edit`" v-if="user.can.edit" class="text-indigo-600 hover:text-indigo-900">Edit</Link>
            </div>
        </li>
    </ul>

    <Pagination :links="users.links" />
</template>

<style scoped>
</style>