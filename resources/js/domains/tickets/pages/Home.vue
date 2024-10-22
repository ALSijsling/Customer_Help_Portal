<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { checkIfLoggedIn, getLoggedInUser } from '../../../services/auth';
    import TicketTable from '../components/TicketTable.vue';

    const user = ref();

    onMounted(async () => {
        await checkIfLoggedIn();
        user.value = getLoggedInUser();
    })
</script>

<template>
    <TicketTable />
</template>