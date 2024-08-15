<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { getRequest } from '../../../services/http';
    import { checkIfLoggedIn, getLoggedInUser } from '../../../services/auth';

    const user = ref();

    onMounted(async () => {
        await checkIfLoggedIn()
        user.value = getLoggedInUser();
    })
</script>

<template>
    <div>
        <h1 class="text-3xl font-bold text-red-500">Welcome {{ user?.first_name }}</h1>
    </div>
</template>