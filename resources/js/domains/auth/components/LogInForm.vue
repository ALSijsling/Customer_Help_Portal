<script setup lang="ts">

</script>

<template>
    <div class="w-2/5 my-10 mx-auto bg-slate-300 rounded-lg">
        <form @click.prevent="" class="w-1/3 mx-auto">
            <div class="pt-5">
                <label for="email" class="block p-2">Email</label>
                <input id="email" type="email" placeholder="email" class="p-2" required />
            </div>
            <div class="pt-5">
                <label for="password" class="block p-2">Password</label>
                <input id="password" type="password" placeholder="password" class="p-2" required />
            </div>
            <div class="py-8">
                <button type="submit" class="px-3 py-1 bg-blue-600 text-white rounded-full">Log In</button>
            </div>
        </form>
    </div>
</template>