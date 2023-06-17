export interface City {
    id: number;
    name: string;
    country: string;
    longitude: number;
    latitude: number;
}

interface HourlyForecast {
    time: string[];
    temperature_2m: number[];
}

export interface Forecast {
    hourly: HourlyForecast;
}
