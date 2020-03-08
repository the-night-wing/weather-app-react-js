import styled from "styled-components";

import { flexColumn, flexRow } from "../styles/global-styles";

const Container = styled.article`
    ${flexColumn}
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    padding: 1% 0;
    color: #2b2b2b;
    width: 33%;
    height: 18vw;
    height: 370px;
    border-radius: 5px;
    background-color: white;
    margin: 0 1% 1% 0;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
        0 3px 1px -2px rgba(0, 0, 0, 0.2);
`;

const Temperature = styled.span`
    font-size: 3.5em;
    margin: 0 5px;
`;

const SmallLabel = styled.span`
    font-size: 1em;
`;

const MiddleLabel = styled.span`
    font-size: 1.2em;
`;

const TemperatureBlock = styled.article`
    ${flexRow}
    align-items: baseline;
`;

export { Container, Temperature, SmallLabel, MiddleLabel, TemperatureBlock };
