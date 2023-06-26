<template>
    <div>
        <h1>{{ route.query.name }}</h1>

        <div class="py-3">
            <label for="forecastDays">Forecast days:</label>

            <select
                id="forecastDays"
                v-model="forecastDays"
                name="forecastDays"
                class="w-20 rounded-xl border border-orange-400 px-2 outline-none"
            >
                <option v-for="day in forecastDaysOptions" :key="day" :value="day">
                    {{ day }}
                </option>
            </select>
        </div>

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

/** Get current time so that we can get
 * weather data starting from the current time.
 */
const currentTime = ref(new Date().getTime());

const forecastDays = ref(7);

const forecastDaysOptions = ref([1, 3, 7, 14, 16]);

const route = useRoute();

const { data: forecast } = await useFetch<Forecast>(
    `https://api.open-meteo.com/v1/forecast?hourly=temperature_2m&timezone=auto`,
    {
        pick: ["hourly"],
        query: {
            latitude: route.query.lat,
            longitude: route.query.long,
            forecast_days: forecastDays,
        },
    }
);
</script>
