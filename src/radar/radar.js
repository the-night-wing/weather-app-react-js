import React from "react";

import { Container, RadarWrapper } from "./radar-styles";

import { SubTitle } from "../styles/global-styles";

export const Radar = () => {
    return (
        <Container>
            <SubTitle>Radar</SubTitle>
            <RadarWrapper>
                <iframe
                    width="100%"
                    height="330"
                    src="https://embed.windy.com/embed2.html?lat=40.730610&lon=-73.935242&zoom=9&level=surface&overlay=rain&menu=&message=true&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=47.651&detailLon=34.082&metricWind=default&metricTemp=default&radarRange=-1"
                    frameborder="0"
                ></iframe>
            </RadarWrapper>
        </Container>
    );
};
