<template>
    <div class="flex items-center justify-between bg-orange-400 px-20 py-2">
        <NuxtLink class="text-xl text-white" to="/">Weather App</NuxtLink>
        <!-- User image -->
        <img
            class="w-12 rounded-full"
            :src="data?.user?.image as (string | undefined)"
            alt="user-profile-image"
        />

        <button v-if="data?.user" @click="signOut()">Sign out</button>
        <button v-else @click="signIn('')">Sign in</button>

        <!-- User name -->
        <p>{{ data?.user?.name }}</p>
    </div>
</template>

<script setup lang="ts">
const { data, signIn, signOut } = useAuth();
</script>

<style scoped></style>
