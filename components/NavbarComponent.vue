<template>
    <div class="flex items-center justify-between bg-orange-500 px-10 py-4 lg:px-20">
        <NuxtLink class="text-2xl font-semibold" to="/">Weatherly</NuxtLink>

        <UDropdown
            v-if="data?.user"
            :items="userDropdownItems"
            :popper="{ placement: 'bottom-start' }"
        >
            <UAvatar :src="(data?.user?.image as (string | undefined))" alt="user avatar" />
        </UDropdown>

        <button v-else @click="signIn('')">Sign in</button>
    </div>
</template>

<script setup lang="ts">
const { data, signIn, signOut } = useAuth();

const userDropdownItems = ref([
    [
        {
            label: data.value?.user?.name as string,
            icon: "i-heroicons-user",
        },
        {
            label: "Sign out",
            click: () => {
                signOut();
            },
        },
    ],
]);
</script>

<style scoped></style>
