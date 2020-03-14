import React, { useState } from "react";

import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import Plx from "react-plx";

import {
    Container,
    Temperature,
    Cloudness,
    Location,
    ParallaxBackgroundImage,
    FixedNavbar,
    LabelWrapper
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

export const MainSection = () => {
    const [showFixedNavbar, setShowFixedNavbar] = useState(false);

    const turnOnNavbar = () => {
        setShowFixedNavbar(true);
    };
    const turnOffNavbar = () => {
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
                <LabelWrapper as={Plx} parallaxData={labelsParallaxData}>
                    <Location>Today's weather in Kyiv</Location>
                    <Cloudness>icon Overcast</Cloudness>
                    <Temperature>10°C</Temperature>
                </LabelWrapper>
            </Container>
        </React.Fragment>
    );
};
