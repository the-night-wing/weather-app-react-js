import React from "react";

import { Container } from "./current-weather-card-styles";
import { SubTitle } from "../styles/global-styles";

import { CurrentWeatherItem } from "../current-weather-item/current-weather-item";

export default function CurrentWeatherCard() {
    return (
        <Container>
            <SubTitle>Current Weather</SubTitle>
            <CurrentWeatherItem
                label="Apparent Temp."
                value="12"
                metrics="°C"
            />
            <CurrentWeatherItem
                label="Precip Intensity"
                value="12"
                metrics="°C"
            />
            <CurrentWeatherItem label="Cloud cover" value="12" metrics="°C" />
            <CurrentWeatherItem label="Humidity" value="12" metrics="°C" />
            <CurrentWeatherItem label="Dew point" value="12" metrics="°C" />
            <CurrentWeatherItem label="Pressure" value="12" metrics="°C" />
            <CurrentWeatherItem label="Wind" value="12" metrics="°C" />
            <CurrentWeatherItem label="UV index" value="12" metrics="°C" />
            <CurrentWeatherItem label="Visibility" value="12" metrics="°C" />
        </Container>
    );
}
