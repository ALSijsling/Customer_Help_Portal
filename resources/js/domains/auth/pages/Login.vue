<script setup lang="ts">
    import { ref } from 'vue';
    import { loginUser } from '../store';
    import LogInForm from '../components/LogInForm.vue';
    import { User } from '../types';
    import { getRequest } from '../../../services/http';
    
    const user = ref({})

    const onSubmit = async (user: User) => {
        // try {
            await getRequest('/sanctum/csrf-cookie')
            loginUser(user);
        // } catch (error: any) {
        //    errors.value = error.response.data;
        // }
    }
</script>

<template>
    <LogInForm @submitUser="(user) => onSubmit(user)" :user="user" />
</template>