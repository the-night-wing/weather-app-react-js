import styled from "styled-components";

import { flexRow, flexColumn } from "../styles/global-styles";

const Container = styled.article`
    ${flexColumn}
    width: 66%;
    /* max-height: 346px; */
    box-sizing: border-box;
    align-items: center;
    padding: 1% 1%;
    padding-top: 5px;
    color: #2b2b2b;
    background-color: white;
    /* height: 370px; */
    border-radius: 5px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
        0 3px 1px -2px rgba(0, 0, 0, 0.2);
`;

const ItemsBlock = styled.div`
    width: 100%;
    ${flexRow}
    flex-wrap: wrap;
    justify-content: space-around;
    /* align-items: center; */
`;

export { Container, ItemsBlock };
