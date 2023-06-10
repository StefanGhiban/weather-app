<script setup lang="ts">
const { $client } = useNuxtApp();

const hello = await $client.hello.hello.query({ text: "client" });

const { data } = useAuth();
</script>

<template>
    <div>
        <!-- As `superjson` is already pre-configured, we can use `time` as a `Date` object without further deserialization 🎉 -->
        tRPC Data: "{{ hello?.greeting }}" send at "{{ hello?.time.toLocaleDateString("en-EN") }}".

        {{ data }}
    </div>
</template>
