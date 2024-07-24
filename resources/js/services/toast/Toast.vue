<script setup lang="ts">
    import { PropType } from 'vue';
    import { Toast } from './types';

    defineProps({
        toast: {
            required: true,
            type: Object as PropType<Toast>,
        },
    });

    defineEmits(['hide']);
</script>

<template>
    <div :class="[`bg-${toast.variant}`, toast.show ? 'show' : 'hide']" class="flex items-center w-full p-4 text-gray-800 bg-gray-100 rounded-lg shadow">
        <div class="m-3 text-sm font-normal">
            {{ toast.message }}
        </div>
        <div>
            <button @click="$emit('hide')" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8">
                <span class="sr-only">Close</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </button>
        </div>
    </div>
</template>

<style>
    .info {
        background-color: #94a3b8;
    }
    .danger {
        background-color: #ef4444;
    }
    .succes {
        background-color: #22c55e;
    }
</style>