import styled from "styled-components";

import { CardStyles, flexColumn } from "../styles/global-styles";

const Container = styled.article`
    ${CardStyles}
    ${flexColumn}
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
`;

const Link = styled.span`
    cursor: pointer;
    font-size: 80%;
    color: rgb(44, 160, 206);
    margin: 0 10px;
`;

export { Container, Link };
