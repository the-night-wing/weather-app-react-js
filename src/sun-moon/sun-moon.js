import React from "react";

import { FaSun } from "react-icons/fa";

import { SubTitle } from "../styles/global-styles";

import {
    Container,
    Sun,
    SunPath,
    Moon,
    SunSky,
    SunSkyWrapper,
    SunIconWrapper,
    SunLine,
    SunLineWrapper,
    SunPathWrapper,
    SunRotationWrapper
} from "./sun-moon-styles";

export const SunMoon = () => {
    return (
        <Container>
            <SubTitle>Sun and Moon in Kyiv</SubTitle>
            <Sun>
                <SunPath />
                <SunSkyWrapper>
                    <SunSky />
                </SunSkyWrapper>
                <SunRotationWrapper>
                    <SunPathWrapper>
                        <SunLineWrapper>
                            <SunLine />
                        </SunLineWrapper>
                        <SunIconWrapper>
                            <FaSun size={26} />
                        </SunIconWrapper>
                    </SunPathWrapper>
                </SunRotationWrapper>
            </Sun>
        </Container>
    );
};
