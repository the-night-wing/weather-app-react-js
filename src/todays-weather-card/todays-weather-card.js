import React from "react";

import {
    Container,
    SmallLabel,
    MiddleLabel,
    Temperature,
    TemperatureBlock
} from "./todays-weather-card-styles";

import { SubTitle } from "../styles/global-styles";

import { IoIosStar } from "react-icons/io";

export const TodaysWeatherCard = () => {
    return (
        <Container>
            <SubTitle>Today's weather</SubTitle>
            <TemperatureBlock>
                <SmallLabel>Max</SmallLabel>
                <Temperature>13°</Temperature>
                <SmallLabel>Min</SmallLabel>
                <Temperature>8°</Temperature>
            </TemperatureBlock>
            Icon
            <MiddleLabel>Overcast</MiddleLabel>
            <SubTitle>
                Kyiv <IoIosStar />
            </SubTitle>
            <MiddleLabel>Fri, Mar 6, 15:21</MiddleLabel>
        </Container>
    );
};
