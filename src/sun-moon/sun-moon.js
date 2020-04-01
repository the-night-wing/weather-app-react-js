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
    SunRotationWrapper,
    Dawn,
    Sunrise,
    Sunset,
    Dusk
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
                <Dawn>
                    Dawn <br /> 5:49
                </Dawn>
                <Sunrise>
                    Sunrise <br /> 5:49
                </Sunrise>
                <Sunset>
                    Sunset <br /> 5:49
                </Sunset>
                <Dusk>
                    Dusk <br /> 5:49
                </Dusk>
            </Sun>
        </Container>
    );
};
