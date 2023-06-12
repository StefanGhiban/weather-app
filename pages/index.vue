<template>
    <div class="bg-green-400 text-lg">
        <div>
            <input v-model="citySearchInput" type="text" @input="debouncedSearch" />

            <div v-for="city in citiesList" :key="city.id">
                <button @click="getWeather(city)">{{ city.name }}, {{ city.country }}</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface City {
    id: number;
    name: string;
    country: string;
    longitude: number;
    latitude: number;
}

const citySearchInput = ref("");

const citiesList = ref<City[] | undefined>([]);

/**
 * The cities input is debounced so that there is no
 * request every key stroke, but every couple of letters.
 */
const debouncedSearch = useDebounce(function () {
    getCoordinates();
}, 400);

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

/** TODO: this function will probably be moved to another page called city weather or smth. */
const getWeather = async (city: City) => {
    const { data } = await useFetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&hourly=temperature_2m&timezone=auto`
    );

    console.log(data.value);
};
</script>
