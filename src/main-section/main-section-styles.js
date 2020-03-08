import styled, { css } from "styled-components";
import { flexColumnReverse } from "../styles/global-styles";

const Container = styled.section`
    position: relative;
    ${flexColumnReverse}
    justify-content:start;
    height: 634px;
    width: 100%;
    overflow: hidden;
    /* margin-top: -64px; */
    /* box-sizing: border-box; */
    /* padding: 25px 50px; */
    /* padding-bottom: 0px; */
    /* background: transparent; */
    /* background-color: #f0f0f0; */
    /* background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; */
    /* background-image: url("https://d2idu5mmj5r5g3.cloudfront.net/photos_wp/cKqkdmn02p86440.webp"); */
    /* background-image: url("../assets/main-section.webp"); */
`;

const paragraphTemplate = styled.p`
    color: white;
    display: inline-block;
    text-align: left;
    font-weight: normal;
    margin: 5px 0;
`;

const Temperature = styled(paragraphTemplate)`
    /* color: white; */
    font-size: 8em;
    /* text-align: left; */
`;
const Cloudness = styled(paragraphTemplate)`
    /* color: white; */
    font-size: 3em;
    /* text-align: left; */
`;
const Location = styled(paragraphTemplate)`
    /* color: white; */
    font-size: 2em;
    /* text-align: left; */
`;

export { Container, Temperature, Cloudness, Location };
