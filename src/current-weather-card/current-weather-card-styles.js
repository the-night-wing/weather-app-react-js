import styled from 'styled-components';

import { flexRow, flexColumn, CardStyles } from '../styles/global-styles';

const Container = styled.article`
  ${flexColumn}
  ${CardStyles}
  align-self: stretch;
  width: 66%;
  box-sizing: border-box;
  align-items: center;
  padding: 1% 1%;
  padding-top: 5px;
  color: #2b2b2b;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const ItemsBlock = styled.div`
  width: 100%;
  ${flexRow}
  flex-wrap: wrap;
  justify-content: space-around;
  /* align-items: center; */
`;

export { Container, ItemsBlock };
