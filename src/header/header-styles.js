import { flexRow } from '../styles/global-styles';

import styled, { css } from 'styled-components';

const Container = styled.header`
  ${flexRow}
  /* background-color: rgb(163, 123, 123); */
  background:transparent;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 2;
`;

const Title = styled.h1`
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

export { Container, Title, RightBlock, LeftBlock };
