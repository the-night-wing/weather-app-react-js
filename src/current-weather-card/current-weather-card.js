import React from "react";

import { Container, ItemsBlock } from "./current-weather-card-styles";
import { SubTitle } from "../styles/global-styles";

import { CurrentWeatherItem } from "../current-weather-item/current-weather-item";

import { WiThermometer, WiHumidity, WiBarometer } from "react-icons/wi";
import { GiGroupedDrops, GiDew, GiWindsock } from "react-icons/gi";
import { AiFillCloud } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import { MdVisibility } from "react-icons/md";

export default function CurrentWeatherCard() {
    const size = 35;
    return (
        <Container>
            <SubTitle>Current Weather</SubTitle>
            <ItemsBlock>
                <CurrentWeatherItem
                    label="Apparent Temp."
                    icon={<WiThermometer size={size} />}
                    value="12"
                    metrics="°C"
                />
                <CurrentWeatherItem
                    label="Precip Intensity"
                    value="0"
                    icon={<GiGroupedDrops size={size} />}
                    metrics="mm/h"
                />
                <CurrentWeatherItem
                    label="Cloud cover"
                    icon={<AiFillCloud size={size} />}
                    value="14"
                    metrics="%"
                />
                <CurrentWeatherItem
                    label="Humidity"
                    icon={<WiHumidity size={size} />}
                    value="15"
                    metrics="%"
                />
                <CurrentWeatherItem
                    label="Dew point"
                    icon={<GiDew size={size} />}
                    value="12"
                    metrics="°C"
                />
                <CurrentWeatherItem
                    label="Pressure"
                    icon={<WiBarometer size={size} />}
                    value="1000"
                    metrics="hPa"
                />
                <CurrentWeatherItem
                    label="Wind"
                    icon={<GiWindsock size={size} />}
                    value="10"
                    metrics="m/s"
                />
                <CurrentWeatherItem
                    label="UV index"
                    icon={<FiSun size={size} />}
                    value="1"
                    metrics="/11"
                />
                <CurrentWeatherItem
                    label="Visibility"
                    icon={<MdVisibility size={size} />}
                    value="12"
                    metrics="km"
                />
            </ItemsBlock>
        </Container>
    );
}
