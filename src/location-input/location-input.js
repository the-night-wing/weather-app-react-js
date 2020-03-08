import React, { useRef, useEffect } from "react";

import styled from "styled-components";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdMyLocation } from "react-icons/md";

export const LocationInput = ({ Button }) => {
    const cityInputRef = useRef();

    useEffect(() => {
        cityInputRef.current.focus();
        console.log("object");
        // return () => {
        //     cleanup
        // };
    }, []);

    const Container = styled.article`
        display: flex;
        flex-direction: row;
        align-items: center;
    `;

    const CityInputForm = styled.form`
        display: flex;
        flex-direction: row;
        align-items: center;
    `;

    const CityInput = styled.input`
        width: 300px;
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

    return (
        <Container>
            <CityInputForm>
                <CityInput
                    type="text"
                    placeholder="Enter your city here"
                    ref={cityInputRef}
                />
                <Button type="submit">
                    <IoMdCheckmarkCircleOutline />
                </Button>
            </CityInputForm>
            <DetectLocationButton>
                <MdMyLocation />
                <span> </span>
                Detect your location
            </DetectLocationButton>
        </Container>
    );
};
