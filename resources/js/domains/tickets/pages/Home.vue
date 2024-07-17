<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import axios from 'axios';

    const user = ref();

    onMounted(async () => {
        axios.get('api/user').then(response => {
            user.value = response.data;
        });
    })
</script>

<template>
    <div>
        <h1 class="text-3xl font-bold text-red-500">Welcome {{ user?.first_name }}</h1>
    </div>
    <router-link :to="{path: '/login'}">Log In</router-link>
</template>