import React, { useState } from "react";

import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import styled from "styled-components";

import Plx from "react-plx";

import {
    Container,
    Temperature,
    Cloudness,
    Location
} from "./main-section-styles";

const labelsParallaxData = [
    {
        start: 0,
        end: 575,
        properties: [
            {
                startValue: 1,
                endValue: 0,
                property: "opacity"
            }
        ]
    }
];

const bgParallaxData = [
    {
        start: 0,
        end: 575,
        properties: [
            {
                startValue: 0,
                endValue: 200,
                property: "translateY"
            }
        ]
    }
];

const ParallaxBackgroundImage = styled.div`
    position: absolute;
    width: 100%;
    left: 0px;
    min-height: 634px;
    overflow: hidden;
    background-size: cover;
    background-position-x: 0px;
    /* background-image: url("https://d2idu5mmj5r5g3.cloudfront.net/photos_wp/cKqkdmn02p86440.webp"); */
    background-image: url("https://d2idu5mmj5r5g3.cloudfront.net/photos_wp/Mv2tfOJOWi70133.webp");
    overflow-x: hidden;
    z-index: -1;
`;

const FixedNavbar = styled.div`
    position: fixed;
    left: 0px;
    width: 100%;
    height: 60px;
    top: 0px;
    background-image: url("https://d2idu5mmj5r5g3.cloudfront.net/photos_wp/Mv2tfOJOWi70133.webp");
    background-position-y: 387px;
    background-size: cover;
    overflow-x: hidden;
    z-index: 0;
`;

export const MainSection = () => {
    const [showFixedNavbar, setShowFixedNavbar] = useState(false);

    const turnOnNavbar = () => {
        console.log("turnOn");
        console.log(window.pageYOffset);
        setShowFixedNavbar(true);
    };
    const turnOffNavbar = () => {
        console.log("turnOff");
        console.log(window.pageYOffset);
        setShowFixedNavbar(false);
    };

    return (
        <React.Fragment>
            {showFixedNavbar ? <FixedNavbar /> : null}
            <Container>
                <ParallaxBackgroundImage
                    as={Plx}
                    parallaxData={bgParallaxData}
                    onPlxStart={turnOffNavbar}
                    onPlxEnd={turnOnNavbar}
                />
                <Plx parallaxData={labelsParallaxData}>
                    <Location>Today's weather in Kyiv</Location>
                    <Cloudness>icon Overcast</Cloudness>
                    <Temperature>10°C</Temperature>
                </Plx>
            </Container>
            {/* <FixedNavbar /> */}
        </React.Fragment>
    );
};
