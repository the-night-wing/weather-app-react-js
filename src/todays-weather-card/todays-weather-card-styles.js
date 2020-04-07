import styled from "styled-components";

import { flexColumn, flexRow, CardStyles } from "../styles/global-styles";

const Container = styled.article`
    ${flexColumn}
    ${CardStyles}
    justify-content: space-around;
    align-items: center;
    align-self: stretch;
    box-sizing: border-box;
    padding: 1% 0;
    color: #2b2b2b;
    width: 32%;
    @media (max-width: 900px) {
        width: 100%;
    }
`;

const Temperature = styled.span`
    font-size: 3.5em;
    margin: 0 5px;
`;

const SmallLabel = styled.span`
    font-size: 1em;
    /* margin: 30px; */
`;

const MiddleLabel = styled.span`
    font-size: 1.2em;
    margin: 5px;
`;

const TemperatureBlock = styled.div`
    ${flexRow}
    align-items: baseline;
    margin: 5px;
`;

const SaveLocation = styled.div`
    ${flexRow}
    /* margin-top: 15px; */
    cursor: pointer;
    font-size: 2em;
    color: rgb(65, 152, 240);
`;

export {
    Container,
    Temperature,
    SmallLabel,
    MiddleLabel,
    TemperatureBlock,
    SaveLocation,
};
