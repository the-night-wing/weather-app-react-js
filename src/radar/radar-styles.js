import styled from "styled-components";

import { CardStyles } from "../styles/global-styles";

const Container = styled.article`
    ${CardStyles}
    width: 49%;
    height: 400px;
`;

const RadarWrapper = styled.div`
    width: 95%;
    margin: 0 auto;
`;

export { Container, RadarWrapper };
