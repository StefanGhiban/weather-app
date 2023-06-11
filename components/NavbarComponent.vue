<template>
    <div class="flex items-center justify-around bg-orange-600 py-2">
        <!-- User name -->
        <span>{{ data?.user?.name }}</span>

        <!-- User image -->
        <img
            class="w-12 rounded-full"
            :src="data?.user?.image as (string | undefined)"
            alt="user-profile-image"
        />
    </div>
</template>

<script setup lang="ts">
const { data } = useAuth();
</script>

<style scoped></style>
