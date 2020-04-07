import styled from "styled-components";

import { flexRow } from "../styles/global-styles";

const Container = styled.section`
    ${flexRow}
    flex-wrap : wrap;
    flex: 1;
    padding: 15px 70px 0px 70px;
    background-color: #f0f0f0;
    & > * {
        margin: 0.5%;
    }
    @media (max-width: 700px) {
        padding: 15px 5px 0;
    }
`;

export { Container };
