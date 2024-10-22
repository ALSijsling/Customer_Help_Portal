<script setup lang="ts">
    import { ticketStore } from '..';
    import { lightFormat } from 'date-fns';

    ticketStore.actions.getAll();

    const tickets = ticketStore.getters.all;
</script>

<template>
    <div >
        <table class="table-fixed w-2/3 mx-auto my-10 rounded-t-lg bg-gray-600 text-center">
            <caption class="font-bold text-xl">
                Tickets
            </caption>
            <thead class="text-slate-50">
                <tr>
                    <th>ID</th>
                    <th class="w-5/12">Title</th>
                    <th class="w-1/12">Categories</th>
                    <th class="w-1/12">Status</th>
                    <th class="w-1/12">Created By</th>
                    <th class="w-1/12">Created At</th>
                    <th class="w-1/12">Last Updated</th>
                    <th class="w-1/12">Assigned To</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="ticket in tickets" :key="ticket.id"
                    class="odd:bg-gray-200 even:bg-gray-100">
                    <td class="border border-gray-200">{{ ticket.id }}</td>
                    <td class="border border-gray-200">{{ ticket.title }}</td>
                    <td class="border border-gray-200"><p v-for="category in ticket.categories" :key="category.id" >{{ category.name }}</p></td>
                    <td class="border border-gray-200">{{ ticket.status.name }}</td>
                    <td class="border border-gray-200">{{ ticket.creator.first_name }}</td>
                    <td class="border border-gray-200">{{ lightFormat(new Date(ticket.created_at), 'yyyy-MM-dd') }}</td>
                    <td class="border border-gray-200">{{ lightFormat(new Date(ticket.updated_at), 'yyyy-MM-dd') }}</td>
                    <td class="border border-gray-200">{{ ticket.admin.first_name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>