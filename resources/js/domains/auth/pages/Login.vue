<script setup lang="ts">
    import { ref } from 'vue';
    import { loginUser } from '../store';
    import LogInForm from '../components/LogInForm.vue';

    const user = ref({})
</script>

<template>
    <LogInForm @submitUser="(user) => loginUser('/login', user)" :user="user" />
</template>