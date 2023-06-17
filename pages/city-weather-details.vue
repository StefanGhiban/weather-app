<template>
    <div>
        <h1>{{ route.query.name }}</h1>

        <ul>
            <li v-for="(time, index) in forecast?.hourly.time" :key="time">
                <div v-if="currentTime <= new Date(time).getTime()">
                    {{ new Date(time).toLocaleString() }}
                    {{ forecast?.hourly.temperature_2m[index] }}
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { Forecast } from "~/typesAndInterfaces";

const route = useRoute();

const currentTime = ref(new Date().getTime());

const { data: forecast } = await useFetch<Forecast>(
    `https://api.open-meteo.com/v1/forecast?latitude=${route.query.lat}&longitude=${route.query.long}&hourly=temperature_2m&timezone=auto`,
    { pick: ["hourly"] }
);
</script>
