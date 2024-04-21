<script setup>
import { Head, useForm } from '@inertiajs/vue3';

defineOptions({
    layout: null,
});

const form = useForm({
    email: '',
    password: ''
});

const submit = () => {
    form.post('/login')
}
</script>

<template>
    <main class="grid place-items-center min-h-screen">
        <Head title="Login"></Head>

        <section class="bg-white p-8 rounded-xl max-w-md mx-auto border">
            <h1 class="text-3xl">Login</h1>

            <form @submit.prevent="submit()" class="mt-6">
                <div class="mb-6">
                    <label for="email" class="block mb-2 uppercase font-bold text-xs text-gray-700">Email</label>
                    <input v-model="form.email" type="email" name="email" id="email" class="border border-gray-400 p-2 w-full" required>
                    <div v-if="form.errors.email" v-html="form.errors.email" class="text-red-500 text-xs mt-1"></div>
                </div>

                <div class="mb-6">
                    <label for="password" class="block mb-2 uppercase font-bold text-xs text-gray-700">Password</label>
                    <input v-model="form.password" type="password" name="password" id="password" class="border border-gray-400 p-2 w-full" required>
                    <div v-if="form.errors.password" v-html="form.errors.password" class="text-red-500 text-xs mt-1"></div>
                </div>

                <div class="mb-6">
                    <button type="submit" class="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500" :disabled="form.processing">Submit</button>
                </div>
            </form>
        </section>
    </main>
</template>

<style lang="scss" scoped>

</style>