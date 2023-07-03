<template>
    <div class="flex flex-col items-center justify-center pt-20">
        <UInput
            v-model="citySearchInput"
            placeholder="Search for a city..."
            icon="i-heroicons-magnifying-glass-20-solid"
            @input="debouncedSearch"
        />

        <div v-auto-animate>
            <div v-for="city in citiesList" :key="city.id">
                <NuxtLink
                    :to="{
                        name: 'city-weather-details',
                        query: { lat: city.latitude, long: city.longitude, name: city.name },
                    }"
                >
                    {{ city.name }}, {{ city.country }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { City } from "~/typesAndInterfaces";

const citySearchInput = ref("");

const citiesList = ref<City[] | undefined>([]);

/**
 * The cities input is debounced so that there is no
 * request every key stroke, but every couple of letters.
 */
const debouncedSearch = useDebounce(function () {
    getCoordinates();
}, 300);

/**
 * The latitude and longitude are fetched from the geocoding api.
 * We have to use those in order to fetch the weather forecast.
 */
const getCoordinates = async () => {
    const { data } = await useFetch<{ results: City[] }>(
        `https://geocoding-api.open-meteo.com/v1/search?name=${citySearchInput.value}&count=10&language=en&format=json`
    );

    citiesList.value = data.value?.results;
};
</script>
