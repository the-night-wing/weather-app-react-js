import styled, { css } from "styled-components";

const flexRow = css`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const flexRowReverse = css`
    display: flex;
    flex-direction: row-reverse;
`;

const flexColumn = css`
    display: flex;
    flex-direction: column;
`;
const flexColumnReverse = css`
    display: flex;
    flex-direction: column-reverse;
`;
const SubTitle = styled.p`
    color: #2b2b2b;
    font-size: 1.5em;
    margin: 0;
    display: flex;
    align-items: center;
`;

export { flexRow, flexColumn, flexRowReverse, flexColumnReverse, SubTitle };
