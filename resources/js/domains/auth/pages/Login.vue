<script setup lang="ts">
    import { ref } from 'vue';
    import { loginUser } from '../store';
    import LogInForm from '../components/LogInForm.vue';
    import { goToRoute } from '../../../services/router';
    import { User } from '../types';

    const user = ref({})

    const login = async (user: User) => {
        loginUser('/login', user);
    }
</script>

<template>
    <LogInForm @submitUser="(user) => login(user)" :user="user" />
    
</template>