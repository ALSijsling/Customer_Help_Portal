<script setup lang="ts">
    import { isLoggedIn } from './services/auth';
    import Navigation from './components/NavBar.vue';
</script>

<template>
    <Navigation v-if="isLoggedIn"/>
    <RouterView />
</template>