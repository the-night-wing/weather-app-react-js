import styled from "styled-components";

import { flexColumn } from "../styles/global-styles";

const Container = styled.section`
    ${flexColumn}
`;

const Text = styled.span`
    color: #2b2b2b;
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
