<template>
    <div>
        <div>I'm protected! Session data: {{ data }}</div>
        <button class="m-2 rounded-xl p-2 shadow-xl" @click="signOut()">sign out</button>
    </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: "auth" });

const { data, signOut } = useAuth();
</script>
