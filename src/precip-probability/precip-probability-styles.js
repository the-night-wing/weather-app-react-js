import styled from "styled-components";

import { CardStyles } from "../styles/global-styles";

const Container = styled.article`
    ${CardStyles}
    width: 54%;
    height: 350px;
    @media (max-width: 900px) {
        width: 100%;
    }
`;

export { Container };
