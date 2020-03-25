import styled from "styled-components";

import { flexColumn } from "../styles/global-styles";

const Container = styled.section`
    ${flexColumn}
    box-sizing : border-box;
    width: 31%;
    max-width: 150px;
    margin: auto;
`;

const Text = styled.span`
    color: #2b2b2b;
    margin: 0px;
`;

const Label = styled(Text)`
    font-size: 1em;
`;

const Value = styled(Text)`
    font-size: 1.6em;
`;

const Metrics = styled(Text)`
    font-size: 0.8em;
`;

export { Container, Label, Value, Metrics };
