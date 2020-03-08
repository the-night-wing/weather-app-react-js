import React from "react";

import {
    Container,
    Label,
    Value,
    Metrics
} from "./current-weather-item-styles";

export const CurrentWeatherItem = ({ label, value, metrics, icon }) => {
    return (
        <Container>
            <Label>{label}</Label>
            {/* <Label>{icon}</Label> */}
            <Value>{value}</Value>
            <Metrics>{metrics}</Metrics>
        </Container>
    );
};
