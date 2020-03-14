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
            <Label>{icon}</Label>
            <Label>{label}</Label>
            <div>
                <Value>{value}</Value>
                <Metrics>{metrics}</Metrics>
            </div>
        </Container>
    );
};
