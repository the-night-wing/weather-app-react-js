import styled, { css } from "styled-components";
import { flexColumnReverse } from "../styles/global-styles";

const Container = styled.article`
    position: relative;
    ${flexColumnReverse}
    /* justify-content:start; */
    height: 634px;
    width: 100%;
    overflow: hidden;
`;

const LabelWrapper = styled.div`
    ${flexColumnReverse}
    justify-content:start;
    margin: 40px;
`;

const ParallaxBackgroundImage = styled.div`
    position: absolute;
    width: 100%;
    left: 0px;
    min-height: 634px;
    overflow: hidden;
    background-position: center center;
    /* background-image: url("https://d2idu5mmj5r5g3.cloudfront.net/photos_wp/cKqkdmn02p86440.webp"); */
    background-image: url("https://d2idu5mmj5r5g3.cloudfront.net/photos_wp/Mv2tfOJOWi70133.webp");
    overflow-x: hidden;
    z-index: -1;
`;

const FixedNavbar = styled.div`
    position: fixed;
    left: 0px;
    width: 100%;
    height: 60px;
    top: 0px;
    background-image: url("https://d2idu5mmj5r5g3.cloudfront.net/photos_wp/Mv2tfOJOWi70133.webp");
    background-position: center center;
    background-position-y: 60%;
    overflow-x: hidden;
    z-index: 1;
`;

const paragraphTemplate = styled.p`
    color: white;
    display: inline-block;
    text-align: left;
    font-weight: normal;
    margin: 5px 0;
`;

const Temperature = styled(paragraphTemplate)`
    font-size: 8em;
`;
const Cloudness = styled(paragraphTemplate)`
    font-size: 3em;
`;
const Location = styled(paragraphTemplate)`
    font-size: 2em;
`;

export {
    Container,
    Temperature,
    Cloudness,
    Location,
    ParallaxBackgroundImage,
    FixedNavbar,
    LabelWrapper
};
