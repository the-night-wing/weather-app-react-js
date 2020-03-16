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
    /* align-items: center; */
    justify-content: center;
`;

const CardStyles = css`
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
        0 3px 1px -2px rgba(0, 0, 0, 0.2);
`;

export {
    flexRow,
    flexColumn,
    flexRowReverse,
    flexColumnReverse,
    SubTitle,
    CardStyles
};
