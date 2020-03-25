import React from "react";

import { Container, Link } from "./daily-weather-card-styles";

import { FaCloud, FaSun } from "react-icons/fa";

import { SubTitle } from "../styles/global-styles";

import styled from "styled-components";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianAxis,
    CartesianGrid,
    LabelList,
    Label
} from "recharts";

const PlotContainer = styled.div`
    width: 100%;
`;

const data = [];
const iconLabels = [];

for (let i = 0; i < 24; i++) {
    data.push({ y: Math.random().toFixed(1), x: i + 1 });
    // iconLabels.push(i % 2 === 0 ? <FaCloud /> : <FaSun />);
    // iconLabels.push(i - 10);
}

const formatter = label => label + "°";

export const DailyWeatherCard = () => {
    return (
        <Container>
            <SubTitle>
                24-hour weather in Kyiv <Link>See more</Link>
            </SubTitle>
            <LineChart
                width={1345}
                height={240}
                margin={{ top: 25, left: 15, right: 15, bottom: 15 }}
                data={data}
            >
                <XAxis
                // minTickGap={0}
                // interval={0}
                // domain={[0, 25]}
                // ticks={iconLabels}
                // tickFormatter={lab => lab}
                />
                {/* <YAxis /> */}
                <Tooltip />
                <CartesianGrid />
                <Line
                    type="monotone"
                    dataKey="y"
                    stroke="orange"
                    dot={{ fill: "orange", r: 7 }}
                >
                    <LabelList
                        dataKey="y"
                        formatter={formatter}
                        offset="10"
                        position="top"
                    />
                </Line>
            </LineChart>
        </Container>
    );
};
