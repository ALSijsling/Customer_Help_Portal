<script setup lang="ts">
    import { ref } from 'vue';
    import { login } from '../../../services/auth';
    import LogInForm from '../components/LogInForm.vue';
    import { User } from '../types';
    import { getRequest } from '../../../services/http';
    
    const user = ref({})

    const onSubmit = async (user: User) => {
        await getRequest('/sanctum/csrf-cookie')
        await login(user);
    }
</script>

<template>
    <LogInForm @submitUser="(user) => onSubmit(user)" :user="user" />
</template>