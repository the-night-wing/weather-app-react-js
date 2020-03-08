import styled from "styled-components";

import { flexRow } from "../styles/global-styles";

const Container = styled.article`
    ${flexRow}
    flex-wrap: wrap;
    width: 66%;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    padding-bottom: 5%;
    color: #2b2b2b;
    background-color: white;
    /* height: 370px; */
    border-radius: 5px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
        0 3px 1px -2px rgba(0, 0, 0, 0.2);
`;

export { Container };
