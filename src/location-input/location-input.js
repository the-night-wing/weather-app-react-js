import React, { useRef, useEffect } from "react";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdMyLocation } from "react-icons/md";

import { Button } from "../styles/global-styles";

import {
    Container,
    CityInputForm,
    CityInput,
    SubmitLocationButton,
    DetectLocationButton
} from "./location-input-styles";

export const LocationInput = () => {
    const cityInputRef = useRef();

    useEffect(() => {
        cityInputRef.current.focus();
        console.log("object");
        // return () => {
        //     cleanup
        // };
    }, []);

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
