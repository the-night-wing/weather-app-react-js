import React from "react";

import { LocationInput } from "../location-input/location-input";

import {
    IoMdMenu,
    IoMdSettings,
    IoMdPersonAdd,
    IoMdLogIn,
    IoMdLogOut
} from "react-icons/io";

import { Button } from "../styles/global-styles";

import { Container, Title, RightBlock, LeftBlock } from "./header-styles.js";

export const Header = () => {
    return (
        <Container>
            <LeftBlock>
                <Button className="show-menu">
                    <IoMdMenu />
                </Button>
                <Title>myWEATHER</Title>
            </LeftBlock>
            <LocationInput />
            <RightBlock>
                <Button>
                    <IoMdLogIn />
                </Button>
                <Button>
                    <IoMdPersonAdd />
                </Button>
                <Button>
                    <IoMdSettings />
                </Button>
                <Button>EN</Button>
            </RightBlock>
        </Container>
    );
};
