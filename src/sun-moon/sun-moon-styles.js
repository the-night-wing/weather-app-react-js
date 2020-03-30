import styled from "styled-components";

import { CardStyles } from "../styles/global-styles";

import sunEclipse from "../assets/sun-path.png";

const Container = styled.article`
    ${CardStyles}
    height: 400px;
    width: 50%;
`;

const Sun = styled.div`
    position: relative;
    height: 200px;
    width: 300px;
    margin: 0 auto;
    overflow: hidden;
`;

const SunPath = styled.div`
    height: 200px;
    margin: 0 auto;
    background: url(${sunEclipse});
    background-size: 300px 300px;
    background-repeat: no-repeat;
`;

const SunSkyWrapper = styled.div`
    position: absolute;
    top: 40px;
    height: 100px;
    margin-left: 50px;
    overflow: hidden;
`;

const SunSky = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 200px;
    background-color: rgba(62, 161, 238, 0.2);
    z-index: 0;
`;

const SunIconWrapper = styled.div`
    width: 270px;
    height: 270px;
    border-radius: 270px;
    color: orange;
    position: absolute;
    top: -2px;
    left: -2px;
    transform: rotate(90deg);
`;

const SunLineWrapper = styled.div`
    width: 270px;
    margin-bottom: 135px;
    height: 135px;
    overflow: hidden;
    position: relative;
`;

const SunLine = styled.div`
    position: absolute;
    width: 240px;
    height: 240px;
    border-radius: 240px;
    top: 10px;
    left: 10px;
    border: 5px solid orange;
    transform: rotate(180deg);
`;

const SunPathWrapper = styled.div`
    width: 270px;
    height: 270px;
    position: absolute;
    top: 0;
    transform: rotate(180deg);
`;

const SunRotationWrapper = styled.div`
    overflow: hidden;
    position: absolute;
    height: 135px;
    width: 350px;
    top: 15px;
    left: 15px;
`;

const SunInfo = styled.section``;

const Moon = styled.div``;

export {
    Container,
    Sun,
    SunPath,
    Moon,
    SunSky,
    SunInfo,
    SunSkyWrapper,
    SunIconWrapper,
    SunLine,
    SunLineWrapper,
    SunPathWrapper,
    SunRotationWrapper
};
