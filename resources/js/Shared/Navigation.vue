<script setup>
import NavigationLink from './NavigationLink.vue';
</script>

<template>
    <nav>
        <ul class="flex space-x-4 list-inside">
            <li>
                <NavigationLink href="/" :active="$page.component == 'Home'">Home</NavigationLink>
            </li>
            <li>
                <NavigationLink href="/users" :active="$page.component == 'Users'">Users</NavigationLink>
            </li>
            <li>
                <NavigationLink href="/settings" :active="$page.component == 'Settings'">Settings</NavigationLink>
            </li>
            <li>
                <NavigationLink href="/logout" method="post">Log Out</NavigationLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>

</style>