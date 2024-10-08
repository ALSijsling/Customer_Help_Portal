<script setup lang="ts">
    import { logout } from '../services/auth';
</script>

<template>
    <nav class="flex justify-between items-center bg-gray-900 text-slate-50 text-xl p-3">
        <div>
            <router-link :to="{name: 'Home'}" class="hover:bg-gray-700 py-1 px-2 rounded-md">Home</router-link>
        </div>
        <div>
            <button @click="logout" class="hover:bg-gray-700 py-1 px-2 rounded-md">Log Out</button>
        </div>
    </nav>
</template>