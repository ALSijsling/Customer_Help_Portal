<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { getRequest } from '../../../services/http';

    const user = ref();

    onMounted(async () => {
        getRequest('me').then(response => {
            user.value = response.data.user;
        });
    })
</script>

<template>
    <div>
        <h1 class="text-3xl font-bold text-red-500">Welcome {{ user?.first_name }}</h1>
    </div>
    <router-link :to="{path: '/login'}">Log In</router-link>
</template>