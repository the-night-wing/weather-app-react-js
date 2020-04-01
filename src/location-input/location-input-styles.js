import styled from "styled-components";

import { Button } from "../styles/global-styles";

const Container = styled.section`
    width: 35%;
    max-width: 400px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const CityInputForm = styled.form`
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const CityInput = styled.input`
    width: 90%;
    max-width: 300px;
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.5);
    transition: 0.5s all ease;
    padding: 10px;
    &:focus {
        background-color: rgba(255, 255, 255, 0.7);
        outline: none;
    }
    &:placeholder {
    }
`;

const SubmitLocationButton = styled(Button)``;
const DetectLocationButton = styled(Button)`
    font-size: 20px;
`;

export {
    Container,
    CityInputForm,
    CityInput,
    SubmitLocationButton,
    DetectLocationButton
};
