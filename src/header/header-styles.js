import { flexRow, flexColumn } from "../styles/global-styles";

import styled, { css } from "styled-components";

const Container = styled.header`
    ${flexRow}
    /* background-color: rgb(163, 123, 123); */
        background:transparent;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 1;
`;

const Title = styled.p`
    margin: 0;
    font-weight: normal;
    font-size: 32px;
    color: white;
    cursor: pointer;
`;

const LeftBlock = styled.div`
    ${flexRow}
`;
const RightBlock = styled.div`
    ${flexRow}
`;

const Button = styled.button`
    background-color: transparent;
    display: flex;
    align-items: center;
    font-size: 20px;
    height: 30px;
    border: none;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    box-sizing: border-box;
    margin: 0 7px;
    cursor: pointer;
    transition: 0.3s all ease;
    outline: none;
    &:hover {
        background-color: rgba(255, 255, 255, 0.7);
    }
`;

export { Container, Title, Button, RightBlock, LeftBlock };
