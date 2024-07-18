<script setup lang="ts">
    import { getErrorByProperty } from '../services/error';
    
    defineProps<{name: string}>();
</script>

<template>
    <slot />
    <div v-for="error in getErrorByProperty(name).value" :key="error" class="text-red-500">
        {{ error }}
    </div>
</template>