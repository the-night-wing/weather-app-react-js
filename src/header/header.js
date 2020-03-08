import React from "react";

import { LocationInput } from "../location-input/location-input";

import { IoMdMenu, IoMdSettings } from "react-icons/io";

import {
    Container,
    Title,
    Button,
    RightBlock,
    LeftBlock
} from "./header-styles.js";

export const Header = () => {
    return (
        <Container>
            <LeftBlock>
                <Button className="show-menu">
                    <IoMdMenu />
                </Button>
                <Title>myWEATHER</Title>
            </LeftBlock>
            <LocationInput Button={Button} />
            <RightBlock>
                <Button>Log in</Button>
                <Button>Sign up</Button>
                <Button>
                    <IoMdSettings />
                </Button>
                <Button>EN</Button>
            </RightBlock>
        </Container>
    );
};
